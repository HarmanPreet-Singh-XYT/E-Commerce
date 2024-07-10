"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export async function reviewCreateHandler({userID,productID,rating,title,comment}:{userID:number,productID:number,rating:number,title:string,comment:string}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/review/create`,{userID,productID,rating,title,comment},{
        headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function reviewEditHandler({reviewID,userID,productID,rating,title,comment}:{reviewID:number,userID:number,productID:number,rating:number,title:string,comment:string}) {
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.patch(`${url}/api/review/edit`,{reviewID,userID,productID,rating,title,comment},{
          headers: { authorization:`Bearer ${sendingKey}` },
      });
      return {status:response.status}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
};
export async function reviewDeleteHandler({reviewID,userID,productID}:{reviewID:number,userID:number,productID:number}) {
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.delete(`${url}/api/review/delete`,{
          headers: { authorization:`Bearer ${sendingKey}` },
          data:{reviewID,userID,productID}
      });
      return {status:response.status}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
};
export async function reviewGetHandler({productID}:{productID:string}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/reviews/${productID}`,{
        headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};