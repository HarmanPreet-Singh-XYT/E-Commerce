import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { addresses } from '@/app/data'
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
}
const Addresses = ({Component,setdialogType,setselectedAddress}:{Component:Address[],setdialogType:React.Dispatch<React.SetStateAction<string | null>>,setselectedAddress:React.Dispatch<React.SetStateAction<Address>>}) => {
  return (
    <div className='w-full h-full py-4 px-4 overflow-auto'>
      <h1 className='text-xl font-semibold'>Manage Addresses</h1>
      <div>
        <div className='flex justify-end mb-5'>
          <button onClick={()=>setdialogType('newaddress')} className='bg-primary-600 text-white px-4 py-2 rounded-xl'>Add Address</button>
        </div>
        <div className='flex flex-col gap-4 py-2 px-2'>
          {
            Component.map((each,index)=>
              <div key={index} className='flex '>
                <div className='border-[1px] max-w-[380px] rounded-l-xl rounded-br-xl px-4 py-4 flex flex-col gap-2 drop-shadow-custom-xl bg-white'>
                  <p className='text-gray-800 bg-gray-100 w-[60px] text-sm font-medium rounded-xl px-2 py-1'>{each.addressType}</p>
                  <div className='flex justify-between text-sm font-medium'>
                    <p>{each.userName}</p>
                    <p>{each.contactNumber}</p>
                  </div>
                  <div className='text-sm font-medium'>
                    <p>{each.addressLine1}</p>
                    <p>{each.addressLine2}</p>
                    <p>{each.state}, {each.country}</p>
                    <p className='font-medium mt-1'>Postal code- <span className='text-sm'>{each.postalCode}</span></p>
                  </div>
                </div>
                <div className='h-[100px] rounded-r-xl w-[35px] flex flex-col'>
                  <div className='bg-yellow-200 h-[50%] rounded-tr-xl flex justify-center'>
                    <button onClick={()=>{setdialogType('address');setselectedAddress(each)}} className='w-[25px]'><PencilIcon/></button>
                  </div>
                  <div className='bg-red-300 h-[50%] rounded-br-xl flex justify-center'>
                    <button onClick={()=>{setdialogType('deleteaddress');setselectedAddress(each)}} className='w-[25px]'><TrashIcon/></button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Addresses