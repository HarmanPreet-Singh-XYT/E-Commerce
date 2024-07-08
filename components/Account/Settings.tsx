import { BookOpenIcon, CreditCardIcon, EnvelopeIcon, GiftIcon, ListBulletIcon, QueueListIcon, ReceiptPercentIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import React, { useState, useLayoutEffect } from 'react'
import ProfileInfo from './ProfileInfo'
import Addresses from './Addresses'
import GiftCards from './GiftCards'
import Wishlist from './Wishlist'
import { useAppSelector } from '@/app/hooks'
import Coupons from './Coupons'
import Loading from '../Loading'
import SettingDialogs from './SettingDialogs'
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
const Settings = () => {
  const [menuType, setmenuType] = useState<string>('profile');
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogType, setdialogType] = useState<null | string>(null);
  const defaultAccount = useAppSelector((state) => state.userState.defaultAccount)
  const addresses = useAppSelector((state) => state.userState.addresses)
  const giftCards = useAppSelector((state) => state.userState.giftCards)
  const coupons = useAppSelector((state) => state.userState.coupons)
  const paymentCards = useAppSelector((state) => state.userState.paymentCards)
  const notifications = useAppSelector((state) => state.userState.notifications)
  const preferences = useAppSelector((state) => state.userState.preferences)
  const wishlist = useAppSelector((state) => state.cartWishlist.wishlist)
  const [selectedAddress, setselectedAddress] = useState<Address>({
    addressID:0,
    addressType:'HOME',
    contactNumber:0,
    addressLine1:'',
    addressLine2:'',
    city:'',
    state:'',
    country:'',
    postalCode:'',
    userName:'',
    is_default:true
  });
  return (
    <>
    <SettingDialogs addresses={addresses} dialogType={dialogType} setdialogType={setdialogType} menuType={menuType} userID={defaultAccount.userID} setLoading={setLoading} selectedAddress={selectedAddress} setselectedAddress={setselectedAddress} defaultAccount={defaultAccount}/>
    {loading && <div className='absolute left-0 right-0 top-[30%] z-50'><Loading/></div>}
    <div className='w-screen h-screen flex justify-center bg-whiteblur-sm'>
        <div className='flex w-[95%] lg:w-[80%] justify-center my-5 lg:gap-5'>
            <div className='flex flex-col gap-4'>

                <div className='hidden gap-4 border-[1px] lg:flex bg-white drop-shadow-custom-xl items-center rounded-xl px-10 py-4'>
                    <div><UserCircleIcon width={50}/></div>
                    <div>
                        <p className='flex text-sm font-medium'>Hello,</p>
                        <p className='font-medium'>{defaultAccount.userName}</p>
                    </div>
                </div>
                <div>
                    <div className='rounded-xl py-1 px-1 flex flex-col gap-2'>
                        <button id='profile' onClick={()=>setmenuType('profile')} className={`flex items-center gap-4 drop-shadow-custom-xl  rounded-xl py-1 px-1 cursor-pointer ${menuType!='profile' && 'hover:text-salmon'}  ${menuType==='profile' ? 'bg-salmon text-white': 'bg-white'}`}>
                            <UserIcon className='w-[35px] max-w-[35px] rounded-xl text-black bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p className='hidden lg:flex'>Profile Information</p>
                        </button>
                        <button id='address' onClick={()=>setmenuType('address')} className={`flex items-center gap-4 drop-shadow-custom-xl  rounded-xl py-1 px-1 cursor-pointer ${menuType!='address' && 'hover:text-salmon'}  ${menuType==='address' ? 'bg-salmon text-white': 'bg-white'}`}>
                            <BookOpenIcon className=' max-w-[35px] rounded-xl text-black bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p className='hidden lg:flex'>Manage Addresses</p>
                        </button>
                        <button id='giftcard' onClick={()=>setmenuType('giftcard')} className={`flex items-center gap-4 drop-shadow-custom-xl  rounded-xl py-1 px-1 cursor-pointer ${menuType!='giftcard' && 'hover:text-salmon'}  ${menuType==='giftcard' ? 'bg-salmon text-white': 'bg-white'}`}>
                            <GiftIcon className=' max-w-[35px] rounded-xl text-black bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p className='hidden lg:flex'>Available Gift Cards</p>
                        </button>
                        <button id='coupon' onClick={()=>setmenuType('coupon')} className={`flex items-center gap-4 drop-shadow-custom-xl  rounded-xl py-1 px-1 cursor-pointer ${menuType!='coupon' && 'hover:text-salmon'}  ${menuType==='coupon' ? 'bg-salmon text-white': 'bg-white'}`}>
                            <ReceiptPercentIcon className=' max-w-[35px] rounded-xl text-black bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p className='hidden lg:flex'>Available Coupons</p>
                        </button>
                        <button id='wishlist' onClick={()=>setmenuType('wishlist')} className={`flex items-center gap-4 drop-shadow-custom-xl  rounded-xl py-1 px-1 cursor-pointer ${menuType!='wishlist' && 'hover:text-salmon'}  ${menuType==='wishlist' ? 'bg-salmon text-white': 'bg-white'}`}>
                            <QueueListIcon className=' max-w-[35px] rounded-xl text-black bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p className='hidden lg:flex'>My Wishlist</p>
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
            <div className='bg-white sm:max-w-[600px] lg:max-w-[600px] lg:w-[600px] h-full drop-shadow-custom-xl rounded-xl flex-col flex items-center'>
                {menuType==='profile' && <ProfileInfo Component={defaultAccount} setdialogType={setdialogType}/>}
                {menuType==='address' && <Addresses Component={addresses}  setdialogType={setdialogType} setselectedAddress={setselectedAddress} setLoading={setLoading} userID={defaultAccount.userID}/>}
                {menuType==='giftcard' && <GiftCards Component={giftCards}/>}
                {menuType==='wishlist' && <Wishlist Component={wishlist} loading={loading} setLoading={setLoading}/>}
                {menuType==='coupon' && <Coupons Component={coupons}/>}
            </div>
        </div>
    </div>
    </>
  )
}

export default Settings