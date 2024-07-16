"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
interface propForm{
    userID:number;
  userName: string |boolean;
  email: string |boolean;
  mobile_number: number |boolean;
  dob: string|boolean;
  password:string|boolean;
}
interface Address {
    addressType:string;
    contactNumber:number;
    addressLine1:string
    addressLine2:string
    city:string;
    state:string;
    country:string;
    postalCode:string;
    userName:string;
}
const url = process.env.BACKEND_URL;
const authKey = process.env.AUTH_KEY as string;
export async function userUpdateHandler({ userID,userName, email, mobile_number, dob,password }:propForm) {
  const sendingKey = await encrypt(authKey);
    
  try {
    const response = await axios.put(`${url}/api/update/user`, { userID, userName, email, mobile_number, dob,password }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status}
  } catch (error) {
    
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function userAddressUpdateHandler({ addressType,contactNumber,addressLine1,addressLine2,city,state,country,postalCode,userName }:Address,userID:number,addressID:number) {
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.put(`${url}/api/update/user/update/address`, { userID,addressID,addressType,contactNumber,addressLine1,addressLine2,city,state,country,postalCode,userName }, {
        headers: { authorization:`Bearer ${sendingKey}` },
      });
      return {status:response.status}
    } catch (error) {
      
      return {status:500,error: 'Internal Server Error' }
    }
};
export async function userAddressAddHandler({ addressType,contactNumber,addressLine1,addressLine2,city,state,country,postalCode,userName }:Address,userID:number) {
    const sendingKey = await encrypt(authKey);
      
    try {
      const response = await axios.post(`${url}/api/update/user/insert/address`, { addressType,userID,contactNumber,addressLine1,addressLine2,city,state,country,postalCode,userName }, {
        headers: { authorization:`Bearer ${sendingKey}` },
      });
      return {status:response.status,addressID:response.data.addressid}
    } catch (error) {
      
      return {status:500,error: 'Internal Server Error' }
    }
};
export async function userAddressDeleteHandler(addressID:number,userID:number) {
  const sendingKey = await encrypt(authKey);
    
  try {
    const response = await axios.delete(`${url}/api/update/user/delete/address`, {
      headers: { authorization:`Bearer ${sendingKey}` },
      data:{ addressID, userID }
    });
    return {status:response.status}
  } catch (error) {
    
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function userAddressDefaultHandler(addressID:number,userID:number) {
  const sendingKey = await encrypt(authKey);
    
  try {
    const response = await axios.post(`${url}/api/update/user/set-default-address`,{ addressID, userID }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status}
  } catch (error) {
    
    return {status:500,error: 'Internal Server Error' }
  }
};
export async function cartQuantityHandler(cartItemID:number,productID:number,userID:number,action:string) {
  const sendingKey = await encrypt(authKey);
  try {
    const response = await axios.post(`${url}/api/update/user/cart-quantity`,{ cartItemID,productID,userID,action }, {
      headers: { authorization:`Bearer ${sendingKey}` },
    });
    return {status:response.status}
  } catch (error) {
    return {status:500,error: 'Internal Server Error' }
  }
};