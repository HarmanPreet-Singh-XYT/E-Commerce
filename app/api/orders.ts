"use server"
import axios from 'axios';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
  const url = process.env.BACKEND_URL;
  const authKey = process.env.AUTH_KEY as string;
async function ordersHandler() {
  const sendingKey = await encrypt(authKey);
  const cookie = cookies().get('sessionhold');
  if(cookie){
    try {
        const response = await axios.post(`${url}/api/user/orders`, {userIDToken:cookie.value}, {
          headers: { authorization:`Bearer ${sendingKey}` },
        });
        return {status:response.status,data:response.data}
    } catch (error) {
        return {status:500,error: 'Internal Server Error' }
    }
  }else
    return {status:250,error: 'Cookie Not Found' };
    
};
async function orderDetailHandler(orderID:string) {
  const sendingKey = await encrypt(authKey);
  const cookie = cookies().get('sessionhold');
  if(cookie){
    try {
        const response = await axios.get(`${url}/api/user/order-detail/${cookie.value}/${orderID}`, {
          headers: { authorization:`Bearer ${sendingKey}` },
        });
        return {status:response.status,data:response.data}
    } catch (error) {
        return {status:404,error: 'Internal Server Error' }
    }
  }else
    return {status:500,error: 'Cookie Not Found' };
};
export {ordersHandler,orderDetailHandler};