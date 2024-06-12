import React from 'react'
import { deals } from '@/app/data'
import DealTime from './DealTime';
import ProgressBar from './ProgressBar';
import Stars from './ProductUi/Stars';
const Deal = () => {
  return (
    
    <div className=' mt-10 sm:ml-4 ml-auto mr-auto max-w-[350px] md:max-w-[800px] xl:max-w-[1000px] flex flex-col justify-center'>
        <p className='border-b-[1px] leading-[50px] tracking-[1.5px] font-semibold text-[18px]'> Deal of The Day</p>
        <div className='p-[30px] border-[1px] mt-8 rounded-xl overflow-auto snap-x snap-proximity flex gap-20'>
            {deals.map((each,index)=><div key={index} className='flex flex-col rounded-xl min-w-full gap-5 h-auto items-center lg:pl-10 snap-center lg:flex-row'>
                <a href={`/deals/${each.productID}`}><img className='w-[100%] h-[100%] min-w-[200px] rounded-md' src={each.imgLink}/></a>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-2'>
                        <Stars stars={each.stars}/>
                        {each.ratingCount > 0 && <p className='text-sm text-silver'>{each.ratingCount}</p>}
                    </div>
                    <a href="">
                        <p className='text-base font-bold w-full'>{each.title}</p>
                    </a>
                    <p className='text-base tracking-normal text-silver'>{each.description}</p>
                    <div className='flex items-center'>
                        <p className='text-2xl font-bold text-salmon'>${each.price.basePrice}</p>
                        <p className='text-xl line-through ml-4 text-silver'>${each.price.discountPrice}</p>
                    </div>
                    <button className='bg-salmon p-2 rounded-xl w-[165px] h-[45px] text-white font-bold text-lg hover:bg-black hover:text-white transition-colors duration-200'>ADD TO CART</button>
                    <div className='flex justify-between'>
                        <p className='text-sm'>ALREADY SOLD: <span className='font-bold'>{each.availability.sold}</span></p>
                        <p className='text-sm'>AVAILABLE: <span className='font-bold'>{each.availability.avilable}</span></p>
                    </div>
                    <ProgressBar sold={each.availability.sold} total={each.availability.avilable}/>
                    <p className='text-sm font-semibold'>HURRY UP! OFFER ENDS IN:</p>
                    <DealTime endTime={each.endTime}/>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Deal