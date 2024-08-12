import express, { Request, Response } from 'express';
import { client } from '../data/DB';
import Stripe from 'stripe';
import {orderCreationSchema,orderCreationSchema2,checkoutSchema,OrderIDSchema,createPaymentIntent} from '../validators/productCheckoutValidator';
import { matchedData, validationResult } from 'express-validator';
const router = express.Router();
const stripe = new Stripe(process.env.STRIPE_PUBLISHABLE_KEY as string);
const IDGenerator = () => {
  const ID = Math.round(Math.random() * 1000 * 1000 * 100);
  return ID;
};
function getDateTimeFiveDaysFromNow():string {
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
router.post('/payment-on-delivery/create-order',orderCreationSchema, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const { userid, productid, colorid, sizeid} = matchedData(req);

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
        return res.status(404).json({ error: 'Product not found' });
      }
      const addressQuery = `
        SELECT addressid FROM addresses WHERE userid = $1 AND is_default = true
      `;
      const addressResult = await client.query(addressQuery, [userid]);

      if (addressResult.rows.length === 0) {
        return res.status(404).json({ error: 'Address not found' });
      }
      const addressid = addressResult.rows[0].addressid;
      const amount = productResult.rows[0].discount;
      const shippingcharge = 5;
      
      // Insert into orders table
      const orderQuery = `
        INSERT INTO orders (orderid, userid, totalamount, orderstatus, order_code)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      const totalAmount = (shippingcharge+paymentCharge+parseFloat(amount)).toFixed(2);
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
      await client.query(paymentQuery, [paymentid, orderid, 'Payment on Delivery', 'Pending', amount, transactionid,addressid]);

      // Insert into orderitems table
      await client.query(`
          INSERT INTO orderitems (orderitemid, orderid, productid, quantity, shippingid, paymentid, colorid, sizeid)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [orderitemid, orderid, productid, 1, shippingid, paymentid, colorid, sizeid]);

      const updateViewQuery = `UPDATE productparams SET sold = sold + 1 WHERE productid = $1`
      await client.query(updateViewQuery,[productid])
      res.status(200).json({orderid})
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }else
  {
      res.status(500).json({ message: 'Validation error' });
  }
  
});

router.post('/card/create-order',orderCreationSchema2, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const { userid, productid, colorid, sizeid, paymentid , paymentStatus} = matchedData(req);
    const paymentState = paymentStatus==='Succeeded' ? 'Confirmed' : 'Pending';
    const orderid = IDGenerator();
    const paymentID = IDGenerator();
    const shippingid = IDGenerator();
    const transactionid = `TS-${IDGenerator()}-${paymentID}-${orderid}`;
    const orderitemid = IDGenerator();
    const trackingnumber = `IN${orderid}-${paymentID}-${transactionid}`
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
        return res.status(404).json({ error: 'Product not found' });
      }
      const addressQuery = `
        SELECT addressid FROM addresses WHERE userid = $1 AND is_default = true
      `;
      const addressResult = await client.query(addressQuery, [userid]);
  
      if (addressResult.rows.length === 0) {
        return res.status(404).json({ error: 'Address not found' });
      }
      const addressid = addressResult.rows[0].addressid;
      const amount = productResult.rows[0].discount;
      const shippingcharge = 5;
      
      // Insert into orders table
      const orderQuery = `
        INSERT INTO orders (orderid, userid, totalamount, orderstatus, order_code)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `;
      const totalAmount = (shippingcharge+paymentCharge+parseFloat(amount)).toFixed(2);
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
      await client.query(paymentQuery, [paymentID, orderid, 'Card', paymentState, amount, transactionid,addressid,paymentid]);
  
      // Insert into orderitems table
      await client.query(`
          INSERT INTO orderitems (orderitemid, orderid, productid, quantity, shippingid, paymentid, colorid, sizeid)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [orderitemid, orderid, productid, 1, shippingid, paymentID, colorid, sizeid]);
  
      const updateViewQuery = `UPDATE productparams SET sold = sold + 1 WHERE productid = $1`
      await client.query(updateViewQuery,[productid])
      res.status(200).json({orderid})
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }else
  {
      res.status(500).json({ message: 'Validation error' });
  }
  
});
router.get('/orders/status/:orderID',OrderIDSchema, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const { orderID } = matchedData(req);
    try {
      // Check if the order with the given orderID exists and fetch relevant details
      const orderQuery = `
        SELECT o.orderstatus, p.paymentstatus, p.paymentmethod
        FROM orders o
        JOIN payments p ON p.orderid = o.orderid
        WHERE o.orderid = $1
      `;
      const orderResult = await client.query(orderQuery, [orderID]);
  
      if (orderResult.rows.length === 0) {
        return res.status(404).json({ error: 'Order not found' });
      }
  
      const { orderstatus, paymentstatus, paymentmethod } = orderResult.rows[0];
      // Check conditions and return appropriate status code
      if (orderstatus === 'Confirmed' && paymentstatus === 'Pending' && paymentmethod === 'Payment on Delivery') {
        return res.sendStatus(200);
      } else if (orderstatus === 'Confirmed' && paymentstatus === 'Pending' && paymentmethod === 'Card') {
        return res.sendStatus(205);
      } else if (orderstatus === 'Failed' && paymentstatus === 'Failed') {
        return res.sendStatus(210);
      }else if (orderstatus === 'Confirmed' && paymentstatus === 'Confirmed' && paymentmethod === 'Card') {
        return res.sendStatus(200);
      } else {
        return res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error('Error checking order status:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }else
  {
      res.status(500).json({ message: 'Validation error' });
  }
});

router.get('/checkout/product-details/:productid/:sizeid/:colorid',checkoutSchema, async (req:Request, res:Response) => {
  const result = validationResult(req)
  if(result.isEmpty()){
    const { productid, sizeid, colorid } = matchedData(req);
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
        return res.status(404).json({ error: 'Product details not found' });
      }
  
      const productDetails = productResult.rows[0];
  
      res.status(200).json({
        title: productDetails.title,
        price: productDetails.price,
        discount: productDetails.discount,
        sizename: productDetails.sizename,
        colorname: productDetails.colorname,
        imglink: productDetails.imglink,
        imgalt: productDetails.imgalt,
        shippingcost:5
      });
    } catch (error) {
      console.error('Error fetching product details:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }else
  {

      res.status(500).json({ message: 'Validation error' });
  }
  
});


const calculateOrderAmount = async (item:any) => {
  const shippingcharge = 5;
  const productCheckQuery = 'SELECT discount FROM products WHERE productid = $1';
  const productCheckResult = await client.query(productCheckQuery, [item]);
  const price = (parseFloat(productCheckResult.rows[0].discount)+shippingcharge) * 100;
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return price;
};

router.post("/create/payment/create-payment-intent",createPaymentIntent, async (req:Request, res:Response) => {
  const result = validationResult(req);
  if(result.isEmpty()){
    const { item,userID } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: await calculateOrderAmount(item),
      currency: "usd",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
      metadata:{
        userID,
        type:'product',
        productID:item
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


export default router;
