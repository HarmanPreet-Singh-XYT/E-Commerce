"use server"
import axios from 'axios';

export default async function forgotOTPHandler(email:string) {
  const url = process.env.BACKEND_URL;
  try {
    const response = await axios.post(`${url}/api/user/send-forgot-otp`, {email});
    return {status:response.status,data:response.data}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};