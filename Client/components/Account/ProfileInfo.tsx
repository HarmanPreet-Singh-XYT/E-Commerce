import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React from 'react'
interface Account{
    userID:number;
    userName:string;
    email:string;
    mobile_number:number;
    dob:string;
  }
const ProfileInfo = ({Component,setdialogType}:{Component:Account,setdialogType:React.Dispatch<React.SetStateAction<string | null>>}) => {
    return (
        <div className="p-6 w-full sm:w-[600px]  min-w-[360px] max-w-[600px]">
            <div className='flex justify-between border-b-[1px] items-center'>
            <h1 className="text-xl font-semibold mb-4 pb-2">Basic info</h1>
            <button className='text-sm text-white px-2 py-2 rounded-xl font-medium hover:bg-primary-800 bg-primary-600' onClick={()=>setdialogType('password')}>Change Password</button>
            </div>
            <div className='w-full mb-10'>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Name</p>
                    <p className='absolute left-[40%]'>{Component.userName}</p>
                    <ChevronRightIcon width={20} onClick={()=>setdialogType('name')} className='cursor-pointer'/>
                </div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Date of Birth</p>
                    <p className='absolute left-[40%]'>{Component.dob}</p>
                    <ChevronRightIcon width={20} onClick={()=>setdialogType('date of birth')} className='cursor-pointer'/>
                </div>
                {/* <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Gender</p>
                    <p className='absolute left-[40%]'>{dummydata1.gender}</p>
                    <ChevronRightIcon width={20} className='cursor-pointer'/>
                </div> */}
            </div>
            <h1 className='text-xl font-semibold mt-2 mb-2 border-b-[1px] pb-2'>Account Info</h1>
            <div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Email</p>
                    <p className='absolute left-[40%]'>{Component.email}</p>
                    <ChevronRightIcon width={20} onClick={()=>setdialogType('email')} className='cursor-pointer'/>
                </div>
                <div className='flex border-b-[1px] py-4 justify-between relative'>
                    <p>Mobile Number</p>
                    <p className='absolute left-[40%]'>{Component.mobile_number}</p>
                    <ChevronRightIcon width={20} onClick={()=>setdialogType('number')} className='cursor-pointer'/>
                </div>
            </div>
        </div>
      );
};

export default ProfileInfo