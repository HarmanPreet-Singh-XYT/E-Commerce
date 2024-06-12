import { BookOpenIcon, CreditCardIcon, EnvelopeIcon, GiftIcon, ListBulletIcon, QueueListIcon, ReceiptPercentIcon, UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import ProfileInfo from './ProfileInfo'
const Settings = () => {
  return (
    <div className='w-screen h-screen flex justify-center bg-white'>
        <div className='flex w-[80%] justify-center my-5 gap-5'>
            <div className='flex flex-col gap-4'>
                <div className='flex gap-4 border-[1px] bg-white drop-shadow-custom-xl items-center rounded-xl px-10 py-4'>
                    <div><UserCircleIcon width={50}/></div>
                    <div>
                        <p className='flex text-sm font-medium'>Hello,</p>
                        <p className='font-medium'>Random User</p>
                    </div>
                </div>
                <div>
                    <div className='rounded-xl py-1 px-1 flex flex-col gap-2'>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <UserIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Profile Information</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <BookOpenIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Manage Addresses</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <GiftIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Available Gift Cards</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <ReceiptPercentIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>My Coupons</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <QueueListIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>My Wishlist</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <CreditCardIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Saved Payment Cards</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <EnvelopeIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>My Notifications</p>
                        </div>
                        <div className='flex items-center gap-4 drop-shadow-custom-xl bg-white rounded-xl py-1 px-1 cursor-pointer hover:text-salmon'>
                            <ListBulletIcon className=' max-w-[35px] rounded-xl bg-white drop-shadow-custom-xl px-2 py-2'/>
                            <p>Preferences</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white w-[600px] h-full drop-shadow-custom-xl rounded-xl flex-col flex items-center'>
                <ProfileInfo/>
            </div>
        </div>
    </div>
  )
}

export default Settings