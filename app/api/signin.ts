"use server"
import axios from 'axios';
import { cookies } from 'next/headers';

export default async function signInHandler({email,password,remember}:{email:string,password:string,remember:boolean}) {
  const url = process.env.BACKEND_URL;
  const authKey = process.env.AUTH_KEY;

  try {
    const response = await axios.post(`${url}/api/user/signin/${remember}`, { email, password }, {
      headers: { Authorization: authKey },
    });
    if(remember){
      cookies().set({
        name: 'sessionhold',
        value: response.data.token,
        httpOnly: true,
        secure:true,
        maxAge:24 * 60 * 60 * 1000 * 7
      })
    }
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};