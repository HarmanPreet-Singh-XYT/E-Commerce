"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
interface cart{
    cartItemID:number,
    userID:number,
    productID:number,
    productPrice:number,
    colorID:number,
    sizeID:number,
    quantity: number,
}
interface wishlist{
    wishlistItemID:number,
    userID:number,
    productID:number,
}
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;

async function cartAddHandler({cartItemID,userID,productID,productPrice,colorID,sizeID,quantity}:cart) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/user/insert/cartitem`, {cartItemID,userID,productID,productPrice,colorID,sizeID,quantity}, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,message:'Successful'}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};

async function wishlistAddHandler({wishlistItemID,userID,productID}:wishlist) {
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.post(`${url}/api/user/insert/wishlistitem`, {wishlistItemID,userID,productID}, {
        headers: { authorization:`Bearer ${sendingKey}` },
      });
      return {status:response.status,message:'Successful'}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
};
async function wishlistDeleteHandler({wishlistItemID,userID}:{wishlistItemID:number,userID:number}) {
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.delete(`${url}/api/user/delete/wishlistitem`, {
        headers: { authorization:`Bearer ${sendingKey}` },
        data:{wishlistItemID,userID}
      });
      return {status:response.status,message:'Successful'}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
};
async function cartDeleteHandler({userID,cartItemID}:{userID:number,cartItemID:number}) {
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.delete(`${url}/api/user/delete/cartitem`, {
        headers: { authorization:`Bearer ${sendingKey}` },
        data:{userID,cartItemID}
      });
      return {status:response.status,message:'Successful'}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
};
export {cartAddHandler,wishlistAddHandler,wishlistDeleteHandler,cartDeleteHandler}