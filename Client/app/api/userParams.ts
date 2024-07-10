"use server"
import axios from 'axios';
import { sign } from 'jsonwebtoken';
import { cookies } from 'next/headers';
async function encrypt(key:string){
    const encryptedKey =  await sign({},key)
    return encryptedKey
}
interface Address {
  addressID:number;
  addressType:string;
  contactNumber:number;
  addressLine1:string
  addressLine2:string
  city:string;
  state:string;
  country:string;
  postalCode:string;
  userName:string;
  is_default:boolean;
}
interface CartItem {
  cartItemID:number;
  productID:number;
  productImg:string;
  productAlt:string;
  productName:string;
  productPrice:number;
  productColor:string;
  productSize:string;
  // addedAt:string;
  quantity: number;
}
interface Wishlist{
  wishlistItemID:number;
  productID:number;
  productImg:string;
  productAlt:string;
  productName:string;
  productPrice:number;
}
interface UserCoupon {
  couponid: number;
  code: string;
  description: string;
  discountpercentage: number;
  maxdiscountamount: number;
  minpurchaseamount: number;
  validuntil: string;
}
interface GiftCard {
  cardid: number;
  cardname: string;
  cardcode: string;
  description: string;
  balance: number;
  currency: string;
  expirydate: string;
  sendername: string;
  message: string;
  status: string;
}
const mapAddress = (address: any): Address => ({
  addressID: address.addressid,
  addressType: address.addresstype,
  contactNumber: address.contactnumber,
  addressLine1: address.addressline1,
  addressLine2: address.addressline2,
  city: address.city,
  state: address.state,
  country: address.country,
  postalCode: address.postalcode,
  userName: address.username,
  is_default: address.is_default
});
const mapCartItem = (cartItem: any): CartItem => ({
  cartItemID: cartItem.cartitemid,
  productID: cartItem.productid,
  productImg: cartItem.imglink,
  productAlt: cartItem.imgalt,
  productName: cartItem.title,
  productPrice: cartItem.discount,
  productColor: cartItem.colorname,
  productSize: cartItem.sizename,
  quantity: cartItem.quantity,
});

const mapWishlist = (wishlistItem: any): Wishlist => ({
  wishlistItemID: wishlistItem.wishlistitemid,
  productID: wishlistItem.productid,
  productImg: wishlistItem.imglink,
  productAlt: wishlistItem.imgalt,
  productName: wishlistItem.title,
  productPrice: wishlistItem.discount,
});
export default async function userParamsHandler() {
  const url = process.env.BACKEND_URL;
  const authKey = process.env.AUTH_KEY as string;
  const cookie = cookies().get('sessionhold');
  if(cookie){
    const sendingKey = await encrypt(authKey);
    try {
      const response = await axios.post(`${url}/api/user/all-data`, {userIDToken:cookie.value}, {
          headers: { authorization:`Bearer ${sendingKey}` },
        });
      const data = response.data!;
      const addresses: Address[] = data.addresses.map(mapAddress);
      const cartItems: CartItem[] = data.cartItems.map(mapCartItem);
      const wishlistItems: Wishlist[] = data.wishlistItems.map(mapWishlist);
      const userCoupons: UserCoupon[] = data.coupons;
      const giftcardsData: GiftCard[] = data.giftcards;
      return {status:response.status,data:{addresses:addresses,cartItems:cartItems,wishlistItems:wishlistItems,coupons:userCoupons,giftCards:giftcardsData}}
    } catch (error) {
      return {status:500,error: 'Internal Server Error' }
    }
  }else{
    return {status:205,error: 'Cookie not found' }
  }
  
};