import React from 'react'
import userParamsHandler from '@/app/api/userParams';
import { setAddress,setCoupon,setGiftCard } from '@/features/UIUpdates/UserAccount';
import { useAppDispatch,useAppSelector } from '@/app/hooks';
import { setCart,setWishlist } from '@/features/UIUpdates/CartWishlist';
const userData = () => {
    const dispatch = useAppDispatch();
    const grabUserData = async () => {
        try {
          const res = await userParamsHandler();
          switch (res.status) {
            case 200:
              try {
                if(res.data?.addresses != undefined && res.data?.cartItems != undefined && res.data?.wishlistItems != undefined && res.data?.coupons != undefined && res.data?.giftCards!= undefined){
                  dispatch(setAddress(res.data.addresses));
                  dispatch(setCart(res.data.cartItems));
                  dispatch(setWishlist(res.data.wishlistItems));
                  dispatch(setCoupon(res.data.coupons));
                  dispatch(setGiftCard(res.data.giftCards));
                }
              } catch (tokenError) {
                // console.log('Parameter setting failed')
              }
              break;
            case 500:
              // console.log('Server Error');
              break;
          }
        } catch (err) {
          // console.log("Internal Server Error");
        }
    };
    return {grabUserData};
}

export default userData