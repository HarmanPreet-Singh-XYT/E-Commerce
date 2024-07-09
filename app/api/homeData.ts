'use server'
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export async function bannerDataHandler() {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/home/banner`, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,banners:response.data};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function dealDataHandler() {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.get(`${url}/api/home/deals`, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status,deals:response.data};
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};