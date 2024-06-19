"use server"
import axios from 'axios';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
export default async function sessionHandler() {
  const url = process.env.BACKEND_URL;
  const authKey = process.env.AUTH_KEY as string;
  const sendingKey = await encrypt(authKey);
  const cookie = cookies().get('sessionhold');
  if(cookie){
    try {
        const response = await axios.post(`${url}/api/user/session-check`, {token:cookie.value}, {
          headers: { authorization:`Bearer ${sendingKey}` },
        });
        return {status:response.status,data:response.data}
    } catch (error) {
        return {status:500,error: 'Internal Server Error' }
    }
  }else
    return {status:500,error: 'Cookie Not Found' };
    
};