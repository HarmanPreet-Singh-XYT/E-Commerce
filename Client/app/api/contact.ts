"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export default async function contactHandler({name,email,phone,method,message}:{name:string,email:string,phone:string,method:string,message:string}) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/contact`,{name,email,phone,method,message},{
        headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};