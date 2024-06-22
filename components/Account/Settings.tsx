import { BookOpenIcon, CreditCardIcon, EnvelopeIcon, GiftIcon, ListBulletIcon, QueueListIcon, ReceiptPercentIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import React, { useState, useLayoutEffect } from 'react'
import ProfileInfo from './ProfileInfo'
import Addresses from './Addresses'
import GiftCards from './GiftCards'
import Wishlist from './Wishlist'
import { useAppSelector } from '@/app/hooks'
import Coupons from './Coupons'
const Settings = () => {
  const [menuType, setmenuType] = useState('profile');
  const defaultAccount = useAppSelector((state) => state.userState.defaultAccount)
  const addresses = useAppSelector((state) => state.userState.addresses)
  const giftCards = useAppSelector((state) => state.userState.giftCards)
  const coupons = useAppSelector((state) => state.userState.coupons)
  const paymentCards = useAppSelector((state) => state.userState.paymentCards)
  const notifications = useAppSelector((state) => state.userState.notifications)
  const preferences = useAppSelector((state) => state.userState.preferences)
  const wishlist = useAppSelector((state) => state.cartWishlist.wishlist)
  
  return (
    <div className='w-screen h-screen flex justify-center bg-white'>
        <div className='flex w-[80%] justify-center my-5 gap-5'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 border-[1px] bg-white drop-shadow-custom-xl items-center rounded-xl px-10 py-4'>
                    <div><UserCircleIcon width={50}/></div>
                    <div>
                        <p className='flex text-sm font-medium'>Hello,</p>
                        <p className='font-medium'>{defaultAccount.userName}</p>
                    </div>
                </div>
                <div>
                    <div className='rounded-xl py-1 px-1 flex flex-col gap-2'>
                        <button id='profile' onClick={()=>setmenuType('profile')} className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <UserIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Profile Information</p>
                        </button>
                        <button id='address' onClick={()=>setmenuType('address')} className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <BookOpenIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Manage Addresses</p>
                        </button>
                        <button id='giftcard' onClick={()=>setmenuType('giftcard')} className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <GiftIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Available Gift Cards</p>
                        </button>
                        <button id='coupon' onClick={()=>setmenuType('coupon')} className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <ReceiptPercentIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Available Coupons</p>
                        </button>
                        <button id='wishlist' onClick={()=>setmenuType('wishlist')} className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <QueueListIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>My Wishlist</p>
                        </button>
                        {/* <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <CreditCardIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Saved Payment Cards</p>
                        </div> */}
                        {/* <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <EnvelopeIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>My Notifications</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <ListBulletIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Preferences</p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='bg-white w-[600px] h-full drop-shadow-custom-xl rounded-xl flex-col flex items-center'>
                {menuType==='profile' && <ProfileInfo Component={defaultAccount}/>}
                {menuType==='address' && <Addresses Component={addresses}/>}
                {menuType==='giftcard' && <GiftCards Component={giftCards}/>}
                {menuType==='wishlist' && <Wishlist Component={wishlist}/>}
                {menuType==='coupon' && <Coupons Component={coupons}/>}
            </div>
        </div>
    </div>
  )
}

export default Settings