import express, { Request, Response } from 'express';
import { client } from '../data/DB';
import { paymentCreationSchema, userIDSchema } from '../validators/cartCheckoutValidation';
import Stripe from 'stripe';
import { validationResult,matchedData } from 'express-validator';
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_PUBLISHABLE_KEY as string);
const IDGenerator = () => {
  const ID = Math.round(Math.random() * 1000 * 1000 * 100);
  return ID;
};
function getDateTimeFiveDaysFromNow() {
  const today = new Date();
  const fiveDaysFromNow = new Date(today);
  fiveDaysFromNow.setDate(today.getDate() + 5);

  const year = fiveDaysFromNow.getFullYear();
  const month = String(fiveDaysFromNow.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  const date = String(fiveDaysFromNow.getDate()).padStart(2, '0');
  const hours = String(fiveDaysFromNow.getHours()).padStart(2, '0');
  const minutes = String(fiveDaysFromNow.getMinutes()).padStart(2, '0');
  const seconds = String(fiveDaysFromNow.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
};

const calculateCartAmount = async (userID:any) => {
  const shippingcharge = 10;
  const productCheckQuery = 'SELECT products.discount,cartitems.quantity FROM cartitems INNER JOIN products ON cartitems.productid = products.productid WHERE userid = $1';
  const productCheckResult = await client.query(productCheckQuery, [userID]);
  const priceCalc = productCheckResult.rows.reduce((sum,item)=>{return sum + ((parseFloat(item.discount)+shippingcharge)*item.quantity)},0)
  const price = (priceCalc) * 100;
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return price;
};
router.post("/create/cart-payment/create-payment-intent",userIDSchema, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const data = matchedData(req);
    const userID = data.userID;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent =  await stripe.paymentIntents.create({
      amount: await calculateCartAmount(userID),
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
      metadata:{
        userID,
        orderType:'cart'
      }
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  }else
  {
      res.status(500).json({ message: 'Validation error' });
  }
});
async function fetchProductData(productid:string,colorid:string,sizeid:string,quantity:number){
  try {
    // Fetch product details
    const productQuery = `
      SELECT
        p.title,
        p.price,
        p.discount,
        ps.sizename,
        pc.colorname,
        pi.imglink,
        pi.imgalt
      FROM products p
      JOIN productSizes ps ON ps.productid = p.productid AND ps.sizeid = $2
      JOIN productcolors pc ON pc.productid = p.productid AND pc.colorid = $3
      JOIN productimages pi ON pi.productid = p.productid AND pi.isprimary = true
      WHERE p.productid = $1
    `;
    const productResult = await client.query(productQuery, [productid, sizeid, colorid]);

    if (productResult.rows.length === 0) {
      return []
    }

    const productDetails = productResult.rows[0];

    return {
      title: productDetails.title,
      price: productDetails.price,
      discount: productDetails.discount,
      sizename: productDetails.sizename,
      colorname: productDetails.colorname,
      imglink: productDetails.imglink,
      imgalt: productDetails.imgalt,
      shippingcost:10,
      quantity
    };
  } catch (error) {
    return error;
  }
}
router.get('/checkout-cart/product-details/:userID',userIDSchema, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const data = matchedData(req);
    const userID = data.userID;
    try {
      // Fetch product details
      const cartlistQuery = `SELECT productid,sizeid,colorid,quantity FROM cartitems WHERE userid = $1`;
      const cartItems = await client.query(cartlistQuery,[userID]);
      if(cartItems.rows.length===0){
        return res.status(404).json({ error: 'cart items not found' });
      }
      const productResult = await Promise.all(
          cartItems.rows.map(each => fetchProductData(each.productid, each.colorid, each.sizeid,each.quantity))
      );
  
      if (productResult.length === 0) {
        return res.status(404).json({ error: 'Product details not found' });
      }
      res.status(200).json({products:productResult});
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }else
  {
      res.status(500).json({ message: 'Validation error' });
  }
});
async function createCashOrder(userid:string,productid:string, colorid:string, sizeid:string,quantity:number){
  const orderid = IDGenerator();
  const shippingid = IDGenerator();
  const paymentid = IDGenerator();
  const transactionid = `TS-${IDGenerator()}-${paymentid}-${orderid}`;
  const orderitemid = IDGenerator();
  const trackingnumber = `IN${orderid}-${paymentid}-${transactionid}`
  const deliveryDate = getDateTimeFiveDaysFromNow();
  const paymentCharge = 15;
  try {
    // Check if product with given productid, colorid, and sizeid exists
    const productQuery = `
      SELECT p.discount
      FROM products p
      JOIN productcolors pc ON pc.productid = p.productid AND pc.colorid = $2
      JOIN productSizes ps ON ps.productid = p.productid AND ps.sizeid = $3
      WHERE p.productid = $1
    `;
    const productResult = await client.query(productQuery, [productid, colorid, sizeid]);

    if (productResult.rows.length === 0) {
      return 404;
    }
    const addressQuery = `
      SELECT addressid FROM addresses WHERE userid = $1 AND is_default = true
    `;
    const addressResult = await client.query(addressQuery, [userid]);

    if (addressResult.rows.length === 0) {
      return 404;
    }
    const addressid = addressResult.rows[0].addressid;
    const amount = productResult.rows[0].discount;
    const shippingcharge = 10*quantity;
    
    // Insert into orders table
    const orderQuery = `
      INSERT INTO orders (orderid, userid, totalamount, orderstatus, order_code)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const totalAmount = (shippingcharge+paymentCharge+parseFloat(amount)*quantity).toFixed(2);
    await client.query(orderQuery, [orderid, userid, totalAmount, 'Confirmed', 'IN']);

    // Insert into shipping table
    const shippingQuery = `
      INSERT INTO shipping (shippingid, orderid, addressid, shippingmethod, shippingcost, trackingnumber, deliveredat)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    await client.query(shippingQuery, [shippingid, orderid, addressid, 'Express', shippingcharge, trackingnumber,deliveryDate]);

    // Insert into payments table
    const paymentQuery = `
      INSERT INTO payments (paymentid, orderid, paymentmethod, paymentstatus, amount, transactionid,billingaddress)
      VALUES ($1, $2, $3, $4, $5, $6,$7)
      RETURNING *
    `;
    await client.query(paymentQuery, [paymentid, orderid, 'Payment on Delivery', 'Pending', parseFloat(amount)*quantity, transactionid,addressid]);

    // Insert into orderitems table
    await client.query(`
        INSERT INTO orderitems (orderitemid, orderid, productid, quantity, shippingid, paymentid, colorid, sizeid)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `, [orderitemid, orderid, productid, quantity, shippingid, paymentid, colorid, sizeid]);

    const updateViewQuery = `UPDATE productparams SET sold = sold + 1 WHERE productid = $1`
    await client.query(updateViewQuery,[productid])
    return 200;
  } catch (error) {
    return 500;
  }
}
router.post('/cart-payment-on-delivery/create-order',userIDSchema, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const data = matchedData(req);
    const userID = data.userID;
    try {
      const cartlistQuery = `SELECT productid,sizeid,colorid,quantity FROM cartitems WHERE userid = $1`;
      const cartItems = await client.query(cartlistQuery,[userID]);
      if(cartItems.rows.length===0){
        return res.status(404).json({ error: 'cart items not found' });
      }
      
      cartItems.rows.map(async each=>await createCashOrder(userID,each.productid,each.colorid,each.sizeid,each.quantity))
  
      res.status(200).json({message:'Successfully created orders'});
    } catch (error) {
      res.status(500).json({error:'Server Internal Server'});
    }
  }else
  {
      res.status(500).json({ message: 'Validation error' });
  }
});
async function createCardOrder(userid:string, productid:string, colorid:string, sizeid:string, paymentid:string , paymentStatus:string,quantity:number){
  const paymentState = paymentStatus==='Succeeded' ? 'Confirmed' : 'Pending';
  const orderid = IDGenerator();
  const paymentID = IDGenerator();
  const shippingid = IDGenerator();
  const transactionid = `TS-${IDGenerator()}-${paymentID}-${orderid}`;
  const orderitemid = IDGenerator();
  const trackingnumber = `IN${orderid}-${paymentID}-${transactionid}`;
  const deliveryDate = getDateTimeFiveDaysFromNow();
  const paymentCharge = 0;
  try {
    // Check if product with given productid, colorid, and sizeid exists
    const productQuery = `
      SELECT p.discount
      FROM products p
      JOIN productcolors pc ON pc.productid = p.productid AND pc.colorid = $2
      JOIN productSizes ps ON ps.productid = p.productid AND ps.sizeid = $3
      WHERE p.productid = $1
    `;
    const productResult = await client.query(productQuery, [productid, colorid, sizeid]);

    if (productResult.rows.length === 0) {
      return 404
    }
    const addressQuery = `
      SELECT addressid FROM addresses WHERE userid = $1 AND is_default = true
    `;
    const addressResult = await client.query(addressQuery, [userid]);

    if (addressResult.rows.length === 0) {
      return 404
    }
    const addressid = addressResult.rows[0].addressid;
    const amount = productResult.rows[0].discount;
    const shippingcharge = 10*quantity;
    
    // Insert into orders table
    const orderQuery = `
      INSERT INTO orders (orderid, userid, totalamount, orderstatus, order_code)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const totalAmount = (shippingcharge+paymentCharge+parseFloat(amount)*quantity).toFixed(2);
    await client.query(orderQuery, [orderid, userid, totalAmount, 'Confirmed', 'IN']);

    // Insert into shipping table
    const shippingQuery = `
      INSERT INTO shipping (shippingid, orderid, addressid, shippingmethod, shippingcost, trackingnumber, deliveredat)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
    `;
    await client.query(shippingQuery, [shippingid, orderid, addressid, 'Express', shippingcharge, trackingnumber,deliveryDate]);

    // Insert into payments table
    const paymentQuery = `
      INSERT INTO payments (paymentid, orderid, paymentmethod, paymentstatus, amount, transactionid,billingaddress,paymentgateway_id)
      VALUES ($1, $2, $3, $4, $5, $6,$7,$8)
      RETURNING *
    `;
    await client.query(paymentQuery, [paymentID, orderid, 'Card', paymentState, parseFloat(amount)*quantity, transactionid,addressid,paymentid]);

    // Insert into orderitems table
    await client.query(`
        INSERT INTO orderitems (orderitemid, orderid, productid, quantity, shippingid, paymentid, colorid, sizeid)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      `, [orderitemid, orderid, productid, quantity, shippingid, paymentID, colorid, sizeid]);

    const updateViewQuery = `UPDATE productparams SET sold = sold + 1 WHERE productid = $1`
    await client.query(updateViewQuery,[productid])
    return 200;
  } catch (error) {
    console.error('Error creating order:', error);
    return 500;
  }
}
router.post('/cart-card/create-order',paymentCreationSchema, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const data = matchedData(req);
    const { userID,paymentid,paymentstatus } = data;
    try {
      const cartlistQuery = `SELECT productid,sizeid,colorid,quantity FROM cartitems WHERE userid = $1`;
      const cartItems = await client.query(cartlistQuery,[userID]);
      if(cartItems.rows.length===0){
        return res.status(404).json({ error: 'cart items not found' });
      }
      
      cartItems.rows.map(async each=>await createCardOrder(userID,each.productid,each.colorid,each.sizeid,paymentid,paymentstatus,each.quantity))
  
      res.status(200).json({message:'Successfully created orders'});
    } catch (error) {
      res.status(500).json({error:'Server Internal Server'});
    }
  }else
  {
      console.log(result);
      res.status(500).json({ message: 'Validation error' });
  }
});

export default router;