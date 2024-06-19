import React from 'react'
interface Coupon {
    id: number;
    code: string;
    discount: number;
  }
const Coupons = ({Component}:{Component:Coupon[]}) => {
  return (
    <div className='w-full h-full py-4 px-4'>
      <h1 className='text-xl font-semibold'>Available Coupons</h1>
      <div className='flex flex-col'>
        <div className='flex flex-col gap-4 py-2 px-2'>
          <div className='text-sm font-medium flex flex-col gap-1 drop-shadow-custom-xl bg-white px-4 py-4 rounded-xl'>
            <div className='flex justify-between'>
                <p className='text-green-400'>Extra 400 off</p>
                <p className='text-silver'>Valid till 30 Jun,2024</p>
            </div>
            <div>
                <div className='flex justify-between gap-2'>
                    <p>Get extra $5 off on 20 item's</p>
                    <p>{'('}price inclusive of cashback/coupon{')'}</p>
                </div>
                <p className='text-primary-800'>EXTRA5CODE</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 py-2 px-2'>
          <div className='text-sm font-medium flex flex-col gap-1 drop-shadow-custom-xl bg-white px-4 py-4 rounded-xl'>
            <div className='flex justify-between'>
                <p className='text-green-400'>Extra 400 off</p>
                <p className='text-silver'>Valid till 30 Jun,2024</p>
            </div>
            <div>
                <div className='flex justify-between gap-2'>
                    <p>Get extra $5 off on 20 item's</p>
                    <p>{'('}price inclusive of cashback/coupon{')'}</p>
                </div>
                <p className='text-primary-800'>EXTRA5CODE</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 py-2 px-2'>
          <div className='text-sm font-medium flex flex-col gap-1 drop-shadow-custom-xl bg-white px-4 py-4 rounded-xl'>
            <div className='flex justify-between'>
                <p className='text-green-400'>Extra 400 off</p>
                <p className='text-silver'>Valid till 30 Jun,2024</p>
            </div>
            <div>
                <div className='flex justify-between gap-2'>
                    <p>Get extra $5 off on 20 item's</p>
                    <p>{'('}price inclusive of cashback/coupon{')'}</p>
                </div>
                <p className='text-primary-800'>EXTRA5CODE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coupons