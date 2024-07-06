'use server'
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export default async function paymentGatewayHandler(productID:string|string[]) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/create/payment/create-payment-intent`,{ item:productID }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,clientSecret:response.data.clientSecret};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function checkoutProductDataHandler({productID,colorID,sizeID}:{productID:string,colorID:string,sizeID:string}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/checkout/product-details/${productID}/${sizeID}/${colorID}`,{
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function orderStatusDataHandler({orderID}:{orderID:string|string[]}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/orders/status/${orderID}`,{
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function paymentOnDeliveryHandler({userid, productid, colorid, sizeid}:{userid:number,productid:string|string[],colorid:string|string[],sizeid:string|string[]}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/payment-on-delivery/create-order`,{ userid, productid, colorid, sizeid }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};