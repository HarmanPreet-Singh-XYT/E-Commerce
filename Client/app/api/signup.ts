"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
interface propForm{
  userName: string;
  email: string;
  password: string;
  mobile_number: number;
  dob: string;
}

export default async function signUpHandler({ userName, email, password, mobile_number, dob }:propForm,promotional:boolean) {
  const url = process.env.BACKEND_URL;
  const authKey = process.env.AUTH_KEY as string;
  const sendingKey = await encrypt(authKey);

  try {
    const response = await axios.post(`${url}/api/user/signup/${promotional}`, { userName, email, password, mobile_number, dob }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    cookies().set({
      name: 'sessionhold',
      value: response.data.token,
      httpOnly: true,
      secure:true,
      maxAge:24 * 60 * 60 * 1000 * 7
    })
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};