'use server'
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export default async function paymentGatewayHandler(productID:string|string[],userID:number) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/create/payment/create-payment-intent`,{ item:productID,userID }, {
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
export async function cardCheckoutHandler({userid, productid, colorid, sizeid, paymentid,paymentStatus}:{userid:number,productid:string|string[],colorid:string|string[],sizeid:string|string[],paymentid:string,paymentStatus:string}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/card/create-order`,{ userid, productid, colorid, sizeid,paymentid,paymentStatus }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function checkoutCartProductDataHandler(userID:number) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/checkout-cart/product-details/${userID}`,{
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function cartCardCheckoutHandler(userID:number,paymentid:string,paymentstatus:string) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/cart-card/create-order`,{ userID,paymentid,paymentstatus }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function cartCashCheckoutHandler(userID:number) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/cart-payment-on-delivery/create-order`,{ userID }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function paymentGatewayCartHandler(userID:number) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/create/cart-payment/create-payment-intent`,{ userID }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,clientSecret:response.data.clientSecret};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};