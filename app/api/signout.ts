"use server"
import { cookies } from 'next/headers';
export default async function signOutHandler() {
  const cookie = cookies().get('sessionhold');
  if(cookie){
    try {
        cookies().delete('sessionhold');
        return true;
    } catch (error) {
        return false;
    }
  }else
    return false;
    
};