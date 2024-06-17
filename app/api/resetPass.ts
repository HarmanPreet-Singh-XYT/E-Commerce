"use server"
import axios from 'axios';

export default async function resetPassHandler({email,password,otp}:{email:string,password:string,otp:string}) {
  const url = process.env.BACKEND_URL;
  try {
    const response = await axios.post(`${url}/api/user/reset-password`, {email,password,otp});
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};