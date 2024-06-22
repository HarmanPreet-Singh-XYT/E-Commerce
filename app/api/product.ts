"use server"
import axios from 'axios';

export default async function productDataHandler({productID}:{productID:string}) {
  const url = process.env.BACKEND_URL;
  try {
    const response = await axios.get(`${url}/api/product/${productID}`);
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};