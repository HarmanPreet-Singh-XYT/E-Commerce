import express, { Request, Response } from 'express';
import { client } from '../data/DB';
const router = express.Router();
router.get('/home/banner',async(req:Request,res:Response)=>{
    const fetchQuery = `SELECT * FROM banners`;
    try {
        const response = await client.query(fetchQuery);
        res.status(200).json({data:response.rows})
    } catch (error) {
        res.sendStatus(500)
    }
});
const getImage = async (productID:number) => {
    try {
        const result = await client.query(
            `SELECT imageid, imglink, imgalt 
             FROM productimages 
             WHERE productid = $1 AND isprimary = true`,
            [productID]
        );
        return result.rows[0];
    } catch (error) {
        return {imageid:0,imglink:'',imgalt:''};
    }
};
router.get('/home/deals',async(req:Request,res:Response)=>{
    const fetchQuery = `SELECT deals.productid,products.title,productparams.stars,products.description,products.price,products.discount,deals.sold,deals.available,productparams.rating,productimages.imglink,productimages.imgalt,deals.end_time
    FROM deals 
    INNER JOIN products ON deals.productid = products.productid 
    INNER JOIN productparams ON productparams.productid = deals.productid
    INNER JOIN productimages ON productimages.productid = deals.productid
    WHERE deals.productid = productimages.productid AND productimages.isprimary = true`;
    try {
        const response = await client.query(fetchQuery);
        res.status(200).json({data:response.rows})
    } catch (error) {
        res.sendStatus(500)
    }
})
router.get('/home/trending',async(req:Request,res:Response)=>{
    const fetchQuery = `SELECT products.productid,products.title,products.price,products.discount,productimages.imglink,productimages.imgalt,categories.name AS category_name,categories.maincategory
    FROM products 
    INNER JOIN productparams ON productparams.productid = products.productid
    INNER JOIN productimages ON productimages.productid = products.productid
    INNER JOIN categories ON categories.categoryid = products.categoryid
    WHERE productimages.isprimary = true
    ORDER BY productparams.views DESC
    LIMIT 8`;
    const fetchQuery1 = `SELECT products.productid,products.title,products.price,products.discount,productimages.imglink,productimages.imgalt,categories.name AS category_name,categories.maincategory
    FROM products 
    INNER JOIN productparams ON productparams.productid = products.productid
    INNER JOIN productimages ON productimages.productid = products.productid
    INNER JOIN categories ON categories.categoryid = products.categoryid
    WHERE productimages.isprimary = true
    ORDER BY productparams.rating DESC
    LIMIT 8`;
    const fetchQuery2 = `SELECT products.productid,products.title,products.price,products.discount,productimages.imglink,productimages.imgalt,categories.name AS category_name,categories.maincategory
    FROM products 
    INNER JOIN productparams ON productparams.productid = products.productid
    INNER JOIN productimages ON productimages.productid = products.productid
    INNER JOIN categories ON categories.categoryid = products.categoryid
    WHERE productimages.isprimary = true
    ORDER BY products.createdat DESC
    LIMIT 8`;
    try {
        const response = await client.query(fetchQuery);
        const response1 = await client.query(fetchQuery1);
        const response2 = await client.query(fetchQuery2);
        res.status(200).json({data:{trending:response.rows,top_rated:response1.rows,new_arrival:response2.rows}})
    } catch (error) {
        res.sendStatus(500)
    }
});
router.get('/home/best-sellers',async(req:Request,res:Response)=>{
    const fetchQuery = `SELECT products.productid,products.title,products.price,products.discount,productimages.imglink,productimages.imgalt,categories.name AS category_name,productparams.stars,productparams.rating
    FROM products 
    INNER JOIN productparams ON productparams.productid = products.productid
    INNER JOIN productimages ON productimages.productid = products.productid
    INNER JOIN categories ON categories.categoryid = products.categoryid
    WHERE productimages.isprimary = true
    ORDER BY productparams.sold DESC
    LIMIT 4`;
    try {
        const response = await client.query(fetchQuery);
        res.status(200).json({data:response.rows})
    } catch (error) {
        res.sendStatus(500)
    }
});
const fetchProducts = async () => {
    const query = `SELECT products.productid,products.title,categories.name AS category,categories.maincategory,products.price,products.discount,productparams.stars,productparams.isnew,productparams.issale,productparams.isdiscount FROM products 
    INNER JOIN categories ON products.categoryid = categories.categoryid 
    INNER JOIN productparams ON products.productid = productparams.productid
    ORDER BY productparams.stars DESC,productparams.rating DESC
    LIMIT 12`;
    try {
        const response = await client.query(query, []);
        if (response.rows.length === 0) return [];

        const products = await Promise.all(
            response.rows.map(async (product) => {
                const productID = product.productid;

                const [colors, sizes, reviewCount,images] = await Promise.all([
                    getColors(productID),
                    getSizes(productID),
                    review(productID),
                    getImage(productID)
                ]);

                return {
                    ...product,
                    colors,
                    sizes,
                    reviewCount,
                    images
                };
            })
        );

        return products;
    } catch (error) {
        console.error(error)
        return [];
    }
};

const review = async (productID:number) => {
    try {
        const result = await client.query(
            `SELECT reviews.reviewid
             FROM reviews 
             INNER JOIN users ON users.userid = reviews.userid 
             WHERE productid = $1 `,
            [productID]
        );
        return result.rowCount === 0 ? 0 : result.rowCount;
    } catch (error) {
        return 0;
    }
};

const getColors = async (productID:number) => {
    try {
        const result = await client.query(
            `SELECT colorid, colorname, colorclass 
             FROM productcolors 
             WHERE productid = $1`,
            [productID]
        );
        return result.rows.length === 0 ? [] : result.rows;
    } catch (error) {
        return [];
    }
};

const getSizes = async (productID:number) => {
    try {
        const result = await client.query(
            `SELECT sizeid, sizename, instock 
             FROM productsizes 
             WHERE productid = $1`,
            [productID]
        );
        return result.rows.length === 0 ? [] : result.rows;
    } catch (error) {
        return [];
    }
};
router.get('/home/products',async(req:Request,res:Response)=>{
    try {
        const response = await fetchProducts();
        res.status(200).json({data:response})
    } catch (error) {
        res.sendStatus(500)
    }
});
export default router;