import express, { Request, Response } from 'express';
import { client } from '../data/DB';
import jwt from 'jsonwebtoken';
import { AddressInsertSchema, cartActionSchema, cartItemSchema, orderSchema, userIDSchema, userTokenSchema, wishlistActionSchema, wishlistRemoveSchema } from '../validators/userDetailsValidation';
import { matchedData, validationResult } from 'express-validator';
const router = express.Router();
const JWT_SECRET = process.env.JWT_ENCRYPTION_KEY as string;
const IDGenerator = ()=>{
    const ID = Math.round(Math.random() * 1000 * 1000 * 100);
    return ID;
}
interface JwtPayload {
    userID: number;
    iat: number;
    exp: number;
}
const fetchAddresses = async (userID: number) => {
    const query = `
        SELECT addressID, userID, addressType, userName, contactNumber, addressLine1, addressLine2, city, state, country, postalCode, is_default
        FROM Addresses
        WHERE userID = $1;
    `;
    const values = [userID];
    const result = await client.query(query, values);
    return result.rows;
};

const fetchColor = async (productID: number) => {
    const colorQuery = `
        SELECT colorclass, colorname, colorid
        FROM productcolors
        WHERE productid = $1
        LIMIT 1;
    `;
    const colorValues = [productID];
    const colorResult = await client.query(colorQuery, colorValues);
    return colorResult.rows[0];
};

const fetchSize = async (productID: number) => {
    const sizeQuery = `
        SELECT sizeid, sizename, instock
        FROM productsizes
        WHERE productid = $1
        LIMIT 1;
    `;
    const sizeValues = [productID];
    const sizeResult = await client.query(sizeQuery, sizeValues);
    return sizeResult.rows[0];
};

const fetchCartItems = async (userID: number) => {
    const cartQuery = `
        SELECT cartitems.productid, cartitems.quantity, products.title, products.discount, cartitems.cartitemid, 
               productimages.imglink, productimages.imgalt
        FROM cartitems 
        INNER JOIN products ON cartitems.productid = products.productid 
        INNER JOIN productimages ON cartitems.productid = productimages.productid 
        WHERE productimages.isprimary = true AND cartitems.userid = $1;
    `;
    const cartValues = [userID];
    const cartResult = await client.query(cartQuery, cartValues);

    const cartItems = await Promise.all(cartResult.rows.map(async (item) => {
        const color = await fetchColor(item.productid);
        const size = await fetchSize(item.productid);
        return {
            ...item,
            ...color,
            ...size,
        };
    }));
    return cartItems;
};

const fetchWishlistItems = async (userID: number) => {
    const query = `
        SELECT wishlistitems.productid, products.title, products.discount, wishlistitems.wishlistitemid, 
               productimages.imglink, productimages.imgalt 
        FROM wishlistitems 
        INNER JOIN products ON wishlistitems.productid = products.productid 
        INNER JOIN productimages ON products.productid = productimages.productid 
        WHERE productimages.isprimary = true AND wishlistitems.userid = $1;
    `;
    const values = [userID];
    const result = await client.query(query, values);
    return result.rows;
};
const fetchCoupons = async (userID: number) => {
    const query = `SELECT usercoupons.couponid,coupons.code,coupons.description,coupons.discountpercentage,coupons.maxdiscountamount,coupons.minpurchaseamount,coupons.validuntil 
    FROM usercoupons 
    INNER JOIN coupons ON usercoupons.couponid = coupons.couponid 
    WHERE usercoupons.userid = $1 ORDER BY usercoupons.createdat DESC`;
    const values = [userID];
    const result = await client.query(query, values);
    return result.rows;
};
const fetchGiftCards = async (email:string)=>{
    const query = `SELECT cardid,cardname,cardcode,description,balance,currency,expirydate,sendername,message,status FROM giftcards WHERE recipientemail = $1`
    const values = [email];
    const result = await client.query(query,values);
    return result.rows;
}
router.post('/user/addresses',userIDSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID } = matchedData(req);
        try {
            // Query to fetch addresses by userID, excluding createdAt and updatedAt
              
            const query = `
                SELECT addressID, addressType, contactNumber, addressLine1, addressLine2, city, state, country, postalCode, userName, is_default
                FROM Addresses
                WHERE userID = $1;
            `;
            const values = [userID];
    
            const result = await client.query(query, values);
    
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'No addresses found for this user' });
            }
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
    
});
router.post('/user/cart-items',userIDSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID } = matchedData(req);
        try {
            // Query to fetch cart items by userID, including size and color
            const query = `
                SELECT cartitems.productid,cartitems.quantity,products.title,products.discount,cartitems.cartitemid,productimages.imglink,productimages.imgalt,productcolors.colorclass,productcolors.colorname,productcolors.colorid,productsizes.sizeid,productsizes.sizename,productsizes.instock
                 FROM cartitems INNER JOIN products ON cartitems.productid = products.productid 
                 INNER JOIN productimages ON cartitems.productid = productimages.productid 
                 INNER JOIN productcolors ON cartitems.productid = productcolors.productid 
                 INNER JOIN productsizes ON cartitems.productid = productsizes.productid 
                 WHERE productimages.isprimary = true AND cartitems.userid = $1;
            `;
            const values = [userID];
    
            const result = await client.query(query, values);
    
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'No cart items found for this user' });
            }
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/user/wishlist-items',async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID } = matchedData(req);
        try {
            
            const query = `
                SELECT wishlistitems.wishlistitemid,wishlistitems.productid,products.discount,productimages.imglink,productimages.imgalt,products.title
                 FROM wishlistitems
                 INNER JOIN products ON wishlistitems.productid = products.productid 
                 INNER JOIN productimages ON products.productid = productimages.productid 
                 WHERE productimages.isprimary = true AND wishlistitems.userid = $1;
            `;
            const values = [userID];
    
            const result = await client.query(query, values);
    
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'No wishlist items found for this user' });
            }
            res.status(200).json(result.rows);
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
    
});
router.post('/user/coupons',userIDSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID } = matchedData(req);
        const query = `SELECT usercoupons.couponid,coupons.code,coupons.description,coupons.discountpercentage,coupons.maxdiscountamount,coupons.minpurchaseamount,coupons.validuntil FROM usercoupons INNER JOIN coupons ON usercoupons.couponid = coupons.couponid WHERE usercoupons.userid = $1 ORDER BY usercoupons.createdat DESC`
        try {
            const values = [userID];
            const result = await client.query(query,values);
            if (result.rows.length === 0) {
                return res.status(404).json({ error: 'No coupons found for this user' });
            }
            res.status(200).json(
                {data:result.rows}
            );
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/user/all-data',userTokenSchema, async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userIDToken } = matchedData(req);
        try {
            const userID = jwt.verify(userIDToken,JWT_SECRET) as JwtPayload;
            const [addresses, cartItems, wishlistItems,coupons] = await Promise.all([
                fetchAddresses(userID.userID),
                fetchCartItems(userID.userID),
                fetchWishlistItems(userID.userID),
                fetchCoupons(userID.userID),
            ]);
            const getEmail = await client.query(`SELECT email FROM users WHERE userid = $1`,[userID.userID]);
            const giftcards = await fetchGiftCards(getEmail.rows[0].email);
            res.status(200).json({
                addresses,
                cartItems,
                wishlistItems,
                coupons,
                giftcards
            });
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }else
    {
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/user/insert/address',AddressInsertSchema,async(req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const {userID,addressType,userName,contactNumber,addressLine1,addressLine2,city,state,country,postalCode} = matchedData(req);
        const addressID = IDGenerator();
        const query = `INSERT INTO addresses(addressid,userid,addresstype,username,contactnumber,addressline1,addressline2,city,state,country,postalcode,is_default)
         VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,false)`
        const values = [addressID,userID,addressType,userName,contactNumber,addressLine1,addressLine2,city,state,country,postalCode];
        try {
            await client.query(query,values);
            res.status(200).json({message:'Address added Successfully'})
        } catch (error) {
            res.status(500).json({message:'Internal Server Error'})
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
    
});
router.post('/user/orders',userTokenSchema,async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userIDToken } = matchedData(req);
        const query = `SELECT orders.orderid,orders.totalamount,orders.orderstatus,orders.createdat,shipping.deliveredat,products.title,productimages.imglink,productimages.imgalt,products.description,products.discount,orders.order_code,products.productid 
        FROM orders
         INNER JOIN orderitems on orders.orderid = orderitems.orderid INNER JOIN products ON products.productid = orderitems.productid
          INNER JOIN productimages ON products.productid = productimages.productid 
          INNER JOIN shipping on orderitems.shippingid = shipping.shippingid
          WHERE orders.userid = $1 AND productimages.isprimary = true ORDER BY orders.createdat DESC`
        try {
            const userID = jwt.verify(userIDToken,JWT_SECRET) as JwtPayload;
            const values = [userID.userID];
            const result = await client.query(query,values);
            res.status(200).json(
                {data:result.rows}
            );
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
    
});
router.post('/user/insert/cartitem',cartItemSchema,async(req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID, productID, quantity, sizeID, colorID } = matchedData(req);
        const cartItemID = IDGenerator();
        
        const checkQuery = `
            SELECT cartitemid, quantity 
            FROM cartitems 
            WHERE userid = $1 AND productid = $2 AND sizeid = $3 AND colorid = $4
        `;
        const checkValues = [userID, productID, sizeID, colorID];
    
        const insertQuery = `
            INSERT INTO cartitems (cartitemid, userid, productid, quantity, sizeid, colorid) 
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        const insertValues = [cartItemID, userID, productID, quantity, sizeID, colorID];
    
        const updateQuery = `
            UPDATE cartitems 
            SET quantity = quantity + $1 
            WHERE cartitemid = $2
        `;
    
        try {
            const checkResult = await client.query(checkQuery, checkValues);
    
            if (checkResult.rows.length > 0) {
                // Item already exists, update its quantity
                const existingCartItemID = checkResult.rows[0].cartitemid;
                await client.query(updateQuery, [quantity, existingCartItemID]);
            } else {
                // Item does not exist, insert a new row
                await client.query(insertQuery, insertValues);
            }
    
            res.status(200).json({ message: 'CartItem added or updated successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.delete('/user/delete/cartitem',cartActionSchema,async(req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const {userID,cartItemID} = matchedData(req);
        const query = `DELETE FROM cartitems WHERE userid = $1 AND cartitemid = $2`
        const values = [userID,cartItemID];
        try {
            await client.query(query,values);
            res.status(200).json({message:'Item deleted Successfully'})
        } catch (error) {
            res.status(500).json({message:'Internal Server Error'})
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/user/insert/wishlistitem',wishlistActionSchema,async(req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userID, wishlistItemID, productID } = matchedData(req);
    
        const checkQuery = `
            SELECT wishlistitemid 
            FROM wishlistitems 
            WHERE userid = $1 AND productid = $2
        `;
        const checkValues = [userID, productID];
    
        const insertQuery = `
            INSERT INTO wishlistitems (wishlistitemid, userid, productid) 
            VALUES ($1, $2, $3)
        `;
        const insertValues = [wishlistItemID, userID, productID];
    
        try {
            const checkResult = await client.query(checkQuery, checkValues);
    
            if (checkResult.rows.length > 0) {
                // Item already exists, do not insert again
                res.status(200).json({ message: 'Item already exists in wishlist' });
            } else {
                // Item does not exist, insert a new row
                await client.query(insertQuery, insertValues);
                res.status(200).json({ message: 'Item added Successfully' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
    else res.status(500).json({ message: 'Internal Server Error' });
});
router.delete('/user/delete/wishlistitem',wishlistRemoveSchema,async(req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const {userID,wishlistItemID} = matchedData(req);
        const query = `DELETE FROM wishlistitems WHERE wishlistitemid = $1 AND userid = $2`
        const values = [wishlistItemID,userID];
        try {
            await client.query(query,values);
            res.status(200).json({message:'Item deleted Successfully'})
        } catch (error) {
            res.status(500).json({message:'Internal Server Error'})
        }
    }else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
});

const fetchOrderAddresses = async (userID: number,addressID:number) => {
    const query = `
        SELECT userName, contactNumber, addressLine1, addressLine2, city, state, country, postalCode
        FROM Addresses
        WHERE userid = $1 AND addressid = $2;
    `;
    const values = [userID,addressID];
    const result = await client.query(query, values);
    return result.rows[0];
};

const fetchOrderColor = async (productID: number,colorID:number) => {
    const colorQuery = `
        SELECT colorname
        FROM productcolors
        WHERE productid = $1 AND colorid = $2
        LIMIT 1;
    `;
    const colorValues = [productID,colorID];
    const colorResult = await client.query(colorQuery, colorValues);
    if(colorResult.rows.length === 0) return {colorname:null}
    else return colorResult.rows[0];
};

const fetchOrderSize = async (productID: number,sizeID:number) => {
    const sizeQuery = `
        SELECT sizename
        FROM productsizes
        WHERE productid = $1 AND sizeid = $2
        LIMIT 1;
    `;
    const sizeValues = [productID,sizeID];
    const sizeResult = await client.query(sizeQuery, sizeValues);
    if(sizeResult.rows.length === 0) return {sizename:null}
    else return sizeResult.rows[0];
    
};
router.get('/user/order-detail/:userIDToken/:orderID',orderSchema,async (req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const { userIDToken,orderID } = matchedData(req);
        const query = `SELECT 
        orders.orderid,
        orders.createdat,
        shipping.deliveredat,
        orders.orderstatus,
        payments.paymentstatus,
        payments.paymentmethod,
        users.username,
        users.email,
        users.mobile_number,
        products.title,
        products.discount,
        products.price,
        shipping.shippingcost,
        orderitems.quantity,
        productimages.imglink,
        productimages.imgalt,
        payments.billingaddress,
        shipping.addressid,
        orderitems.colorid,
        orderitems.sizeid,
        orderitems.productid,
        orders.order_code,
        orders.totalamount
        FROM orders
        INNER JOIN users ON orders.userid = users.userid
        INNER JOIN orderitems ON orders.orderid = orderitems.orderid
        INNER JOIN shipping ON orderitems.shippingid = shipping.shippingid
        INNER JOIN payments ON orderitems.paymentid = payments.paymentid
        INNER JOIN products ON orderitems.productid = products.productid
        INNER JOIN productimages ON products.productid = productimages.productid AND productimages.isprimary = true
        WHERE orders.orderid = $1 AND orders.userid = $2;`
        try {
            const userID = jwt.verify(userIDToken,JWT_SECRET) as JwtPayload;
            const values = [orderID,userID.userID];
            const result = await client.query(query,values);
            
            if(result.rows.length === 0){
                return res.status(404).json({message:'Data not Found'});
            }
            
            const [shippingAddress,billingAddress,color,size] = await Promise.all([
                fetchOrderAddresses(userID.userID,result.rows[0].addressid),
                fetchOrderAddresses(userID.userID,result.rows[0].billingaddress),
                fetchOrderColor(result.rows[0].productid,result.rows[0].colorid),
                fetchOrderSize(result.rows[0].productid,result.rows[0].sizeid)
            ]);
            const data = {
                ...result.rows[0],
                shippingaddress:{...shippingAddress},
                billingaddress:{...billingAddress},
                ...color,
                ...size
            }
            
            res.status(200).json(
                {data}
            );
        } catch (error) {
            res.status(500).json({ error: 'Server error' });
        }
    }
    else
    {
        console.log(result);
        res.status(500).json({ message: 'Validation error' });
    }
})
export default router;