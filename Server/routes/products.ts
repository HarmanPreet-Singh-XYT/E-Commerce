import express, { Request, Response } from 'express';
import { client } from '../data/DB';
import { createReviewSchema, deleteReviewSchema, editReviewSchema, getReviewSchema, productIDSchema } from '../validators/productsValidation';
import { matchedData, validationResult } from 'express-validator';
const router = express.Router();
const IDGenerator = ()=>{
    const ID = Math.round(Math.random() * 1000 * 1000 * 100);
    return ID;
}
async function calculateStarAverage(productID:string){
    const query = `SELECT rating FROM reviews WHERE productid = $1`
    const ratingQuery = `UPDATE productparams SET stars = $2 WHERE productid = $1`
    try {
        const result = await client.query(query,[productID])
        if(result.rows.length===0) {
            await client.query(ratingQuery,[productID,0]);
            return;
        }
        const totalStars = result.rows.reduce((sum, review) => sum + review.rating, 0);
        const totalReviews = result.rows.length;
        const averageStars = totalStars / totalReviews;
        await client.query(ratingQuery,[productID,averageStars]);
        return;
    } catch (error) {
        console.error(error);
        return;
    }
};
router.post('/product/create',async (req:Request,res:Response)=>{
    const {title,description,price,discount,stock,tags,imgLink,imgAlt,isSale,isNew,isDiscount,categoryID} = req.body;
    const productQuery = `INSERT INTO products (productid, title, description, categoryid, price, discount, stock, tags, imgid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
    const productImagesQuery = `INSERT INTO productimages (imageid, productid, imglink, imgalt, isprimary) VALUES ($1, $2, $3, $4, $5)`;
    const productParamsQuery = `INSERT INTO productparams (productid, issale, isnew, isdiscount) VALUES ($1, $2, $3, $4)`;
    const productID = IDGenerator();
    const imageID = IDGenerator();
    try {
        await client.query(productQuery,[productID,title,description,categoryID,price,discount,stock,tags,imageID]);
        await client.query(productImagesQuery,[imageID,productID,imgLink,imgAlt,true]);
        await client.query(productParamsQuery,[productID,isSale,isNew,isDiscount]);
        return res.status(200).json({message:'Product Added Successfully'});
    } catch (error) {
        return res.status(500).json({message:'Internal Server Error'});
    }
    });
router.post('/product/create/image',async (req:Request,res:Response)=>{
    const {productID,imgLink,imgAlt} = req.body;
    const imageID = IDGenerator();
    const productImagesQuery = `INSERT INTO productimages (imageid, productid, imglink, imgalt, isprimary) VALUES ($1, $2, $3, $4, $5)`;
    try {
        await client.query(productImagesQuery,[imageID,productID,imgLink,imgAlt,false]);
        res.status(200).json({message:'Image Added Successfully'});
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
});
router.post('/product/create/size',async (req:Request,res:Response)=>{
    const {productID,sizeName,inStock} = req.body;
    const sizeID = IDGenerator();
    const productSizesQuery = `INSERT INTO productparams (sizeid,productid,sizename,instock) VALUES ($1, $2, $3, $4)`;
    try {
        await client.query(productSizesQuery,[sizeID,productID,sizeName,inStock]);
        res.status(200).json({message:'Size Added Successfully'});
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
});
router.post('/product/create/color',async (req:Request,res:Response)=>{
    const {productID,colorName,colorClass} = req.body;
    const colorID = IDGenerator();
    const productColorsQuery = `INSERT INTO productcolors (colorid, productid, colorname, colorclass) VALUES ($1, $2, $3, $4)`;
    try {
        await client.query(productColorsQuery,[colorID,productID,colorName,colorClass]);
        res.status(200).json({message:'Color Added Successfully'});
    } catch (error) {
        res.status(500).json({message:'Internal Server Error'});
    }
});
async function review(productID:string){
    try {
        const result = await client.query(`SELECT reviews.reviewid,reviews.userid,reviews.rating,reviews.title,reviews.comment,users.username,reviews.createdat,productparams.stars AS productstars FROM reviews INNER JOIN users ON users.userid = reviews.userid INNER JOIN productparams ON reviews.productid = productparams.productid WHERE reviews.productid = $1 ORDER BY reviews.createdat LIMIT 10`,[productID])
        if (result.rows.length === 0) {
            return [0,[]];
        }
        return [result.rowCount,result.rows];
    } catch (error) {
        console.error(error)
        return [0,[]];
    }
    
}
async function getColors(productID:string){
    try {
        const result = await client.query(`SELECT colorid,colorname,colorclass FROM productcolors WHERE productid = $1`,[productID])
        if (result.rows.length === 0) {
            return [];
        }
        return result.rows;
    } catch (error) {
        return [];
    }
    
}
async function getSizes(productID:string){
    try {
        const result = await client.query(`SELECT sizeid,sizename,instock FROM productsizes WHERE productid = $1`,[productID])
        if (result.rows.length === 0) {
            return [];
        }
        return result.rows;
    } catch (error) {
        return [];
    }
}
async function getImages(productID:string){
    try {
        const result = await client.query(`SELECT imageid,imglink,imgalt FROM productimages WHERE productid = $1`,[productID])
        if (result.rows.length === 0) {
            return [];
        }
        return result.rows;
    } catch (error) {
        return [];
    }
}
router.get('/product/:productID',productIDSchema,async (req:Request,res:Response)=>{
    const result = validationResult(req)
    if(result.isEmpty()){
        const {productID} = matchedData(req);
        try {
            const result = await client.query(`SELECT products.productid,products.title,products.description,products.stock,products.discount,products.price,productparams.stars,productimages.imglink,productimages.imgalt,sellers.company_name,categories.name AS categoryname,categories.maincategory
                FROM products
                INNER JOIN productparams ON products.productid = productparams.productid 
                INNER JOIN productimages ON productimages.productid = products.productid 
                INNER JOIN sellers ON sellers.seller_id = products.seller_id
                INNER JOIN categories ON products.categoryid = categories.categoryid
                WHERE products.productid = $1 AND productimages.isprimary = true`,[productID]
            );
            const [colors,sizes,images] = await Promise.all([
                getColors(productID),
                getSizes(productID),
                getImages(productID)
            ])
            const [reviewCounts,reviews] = await review(productID);
            const assignedData = result.rows[0];
            const data = {
                productid:assignedData.productid,
                title:assignedData.title,
                description:assignedData.description,
                stock:assignedData.stock,
                discountedprice:assignedData.discount,
                price:assignedData.price,
                stars:assignedData.stars,
                seller:assignedData.company_name,
                reviewcount:reviewCounts,
                categories:{subcategory:assignedData.categoryname,maincategory:assignedData.maincategory},
                imglink:assignedData.imglink,
                imgalt:assignedData.imgalt,
                imgcollection:images,
                colors:colors,
                sizes:sizes,
                reviews
            }
            const updateViewQuery = `UPDATE productparams SET views = views + 1 WHERE productid = $1`
            await client.query(updateViewQuery,[productID])
            res.status(200).json({data});
        } catch (error) {
            res.status(404).json({message:'Not Found'});
        }
    }else
    {
        res.status(500).json({ message: 'Validation error' });
    }
});
router.post('/review/create',createReviewSchema,async (req:Request,res:Response)=>{
    const result = validationResult(req)
    if(result.isEmpty()){
        const {userID,productID,rating,title,comment} = matchedData(req);
        const checkQuery = `SELECT reviewid FROM reviews WHERE userid = $1 AND productid = $2`;
        const checkValue = [userID,productID];
        try {
            const response = await client.query(checkQuery,checkValue);
            if(response.rows.length > 0){
                return res.status(205).json({message:'Review Already Exists'})
            }
        } catch (error) {
            return res.status(500).json({error:'Server Error'});
        }
        const orderCheck = `SELECT orders.userid,orderitems.productid FROM orders INNER JOIN orderitems ON orders.orderid = orderitems.orderid WHERE orders.userid = $1 AND orderitems.productid = $2`;
        const orderValue = [userID,productID];
        try {
            const response = await client.query(orderCheck,orderValue);
            if(response.rows.length === 0){
                return res.status(210).json({message:'Order does not exist'})
            }
        } catch (error) {
            return res.status(500).json({error:'Server Error'});
        }
        const reviewID = IDGenerator();
        const query = `INSERT INTO reviews (reviewid,userid,productid,rating,title,comment) VALUES ($1,$2,$3,$4,$5,$6)`;
        const value = [reviewID,userID,productID,rating,title,comment];
        try {
            await client.query(query,value);
            await calculateStarAverage(productID);
            const updateViewQuery = `UPDATE productparams SET rating = rating + 1 WHERE productid = $1`
            await client.query(updateViewQuery,[productID])
            res.status(200).json({message:'Review Successfully Created'})
        } catch (error) {
            res.status(500).json({error:'Server Error'});
        }
    }else
    {
        res.status(500).json({ message: 'Validation error' });
    }
});
router.patch('/review/edit',editReviewSchema,async (req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const {reviewID,userID,productID,rating,title,comment} = matchedData(req);
        const checkQuery = `SELECT reviewid FROM reviews WHERE userid = $1 AND productid = $2 AND reviewid = $3`;
        const checkValue = [userID,productID,reviewID];
        try {
            const response = await client.query(checkQuery,checkValue);
            if(response.rows.length===0){
                return res.status(205).json({message:'Review Does Not Exist'})
            }
        } catch (error) {
            return res.status(500).json({error:'Server Error'});
        }
        const query = `UPDATE reviews SET rating = $1, comment = $2, title = $3 WHERE productid = $4 AND userid = $5 AND reviewid = $6`;
        const value = [rating,comment,title,productID,userID,reviewID];
        try {
            await client.query(query,value);
            return res.status(200).json({message:'Review Successfully Updated'})
        } catch (error) {
            return res.status(500).json({error:'Server Error'});
        }
    }else
    {
        res.status(500).json({ message: 'Validation error' });
    }
});
router.delete('/review/delete',deleteReviewSchema,async (req:Request,res:Response)=>{
    const result = validationResult(req);
    if(result.isEmpty()){
        const {reviewID,userID,productID} = matchedData(req);
        const checkQuery = `SELECT reviewid FROM reviews WHERE userid = $1 AND productid = $2 AND reviewid = $3`;
        const checkValue = [userID,productID,reviewID];
        try {
            const response = await client.query(checkQuery,checkValue);
            if(response.rows.length===0){
                return res.status(205).json({message:'Review Does Not Exist'})
            }
        } catch (error) {
            return res.status(500).json({error:'Server Error'});
        }
        const query = `DELETE FROM reviews WHERE userid = $1 AND productid = $2 AND reviewid = $3`;
        const value = [userID,productID,reviewID];
        try {
            await client.query(query,value);
            await calculateStarAverage(productID);
            const updateViewQuery = `UPDATE productparams SET rating = rating - 1 WHERE productid = $1`
            await client.query(updateViewQuery,[productID])
            res.status(200).json({message:'Review Successfully Deleted'})
        } catch (error) {
            res.status(500).json({error:'Server Error'});
        }
    }else
    {
        res.status(500).json({ message: 'Validation error' });
    }
});
router.get('/reviews/:productID', getReviewSchema,async (req: Request, res: Response) => {
    const result = validationResult(req);
    if(result.isEmpty()){
        const { productID } = matchedData(req);
        try {
            const result = await client.query(
                `SELECT 
                    reviews.reviewid, reviews.userid, reviews.rating, 
                    reviews.title, reviews.comment, users.username, 
                    reviews.createdat, productparams.stars AS productstars 
                FROM reviews 
                INNER JOIN users ON users.userid = reviews.userid 
                INNER JOIN productparams ON reviews.productid = productparams.productid 
                WHERE reviews.productid = $1 
                ORDER BY reviews.createdat`,
                [productID]
            );
            
            if (result.rows.length === 0) {
                return res.status(200).json({ data: [] });
            }
    
            res.status(200).json({ data: result.rows });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }else
    {
        res.status(500).json({ message: 'Validation error' });
    }
});
export default router;