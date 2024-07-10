
import React from 'react'
import formatDate from '@/app/api/dateConvert'
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
const GiftCards = ({Component}:{Component:GiftCard[]}) => {
  return (
    <div className='w-full h-full py-4 px-4 overflow-auto'>
      <h1 className='text-xl font-semibold'>Gift Cards</h1>
      <div>
        <div className='flex justify-end mb-5'>
          {/* <button className='bg-primary-600 text-white px-4 py-2 rounded-xl'>Add Gift Card</button> */}
        </div>
        <div className='flex flex-col gap-4 py-2 px-2'>
            {Component.length===0 && 
                <div className='flex font-medium flex-col items-center'>
                    <p>No Gift Cards Available</p>
                    {/* <p>Add Gift Card from Above Option</p> */}
                </div>
            }
            {
                Component.map((each,index)=> each.status==='Active' &&
                <div key={index} className='flex'>
                    <div className='border-[1px] max-w-[380px] rounded-xl px-4 py-4 flex flex-col gap-2 drop-shadow-custom-xl bg-white bg-content'>
                        <p className=' bg-salmon text-white w-[100px] text-center text-sm font-semibold rounded-xl px-2 py-1'>{each.balance} {each.currency}</p>
                        <div className='flex justify-between text-sm font-semibold'>
                            <p>{each.cardname}</p>
                            <p>{each.cardcode}</p>
                        </div>
                        <div className='text-sm font-medium'>
                            <p>Sent By <span className='font-semibold'>{each.sendername}</span></p>
                            <p className='mb-2 border-b-[1px] pb-2'>"{each.message}"</p>
                            <p className='font-medium mt-1'>{each.description}</p>
                        </div>
                        <div className='flex w-full text-sm font-semibold justify-between'>
                            <p>Expiring on</p>
                            <p>{formatDate(each.expirydate)}</p>
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

export default GiftCards