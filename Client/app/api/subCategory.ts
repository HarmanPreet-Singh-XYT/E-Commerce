"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export default async function subCategoryDataHandler(mainCategory:string | string[],subCategory:string | string[]) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/sub-category/${mainCategory}/${subCategory}`,{
        headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function subCategoryFilteredHandler({categoryID,minPrice,maxPrice,rating}:{categoryID:number,minPrice:number,maxPrice:number,rating:number}) {
    const url = process.env.BACKEND_URL;
    const authKey = process.env.AUTH_KEY as string;
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.get(`${url}/api/sub-category/filtered-product/${categoryID}/${minPrice}/${maxPrice}/${rating}`,{
        headers: { authorization:`Bearer ${sendingKey}` },
      });
      return {status:response.status,data:response.data}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
};