import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react'

const ProfileInfo = () => {
    const dummydata1 = {
        name:'Random User',
        dateofbirth:'05-12-1992',
        gender:'Male',
        Email:'randomuser@gmail.com',
        mobileNumber:345123432422
    };
    return (
        <div className="p-6 w-full">
            <h1 className="text-xl font-semibold mb-4 border-b-[1px] pb-2">Basic info</h1>
            <div className='w-full mb-10'>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Name</p>
                    <p className='absolute left-[40%]'>{dummydata1.name}</p>
                    <ChevronRightIcon width={20} className='cursor-pointer'/>
                </div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Date of Birth</p>
                    <p className='absolute left-[40%]'>{dummydata1.dateofbirth}</p>
                    <ChevronRightIcon width={20} className='cursor-pointer'/>
                </div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Gender</p>
                    <p className='absolute left-[40%]'>{dummydata1.gender}</p>
                    <ChevronRightIcon width={20} className='cursor-pointer'/>
                </div>
            </div>
            <h1 className='text-xl font-semibold mt-2 mb-2 border-b-[1px] pb-2'>Account Info</h1>
            <div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Email</p>
                    <p className='absolute left-[40%]'>{dummydata1.Email}</p>
                    <ChevronRightIcon width={20} className='cursor-pointer'/>
                </div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Mobile Number</p>
                    <p className='absolute left-[40%]'>{dummydata1.mobileNumber}</p>
                    <ChevronRightIcon width={20} className='cursor-pointer'/>
                </div>
            </div>
        </div>
      );
};

export default ProfileInfo