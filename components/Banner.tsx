import { banners } from '@/app/data'
import React from 'react'

const Banner = () => {
  return (
    <div className='flex rounded-xl flex-row min-h-[460px] max-w-[1300px] overflow-x-auto gap-2 snap-mandatory snap-x mt-4'>
    {banners.map((each,index)=>
    <div key={index} className='flex-shrink-0 snap-center'>
        <div className='relative'>
            <img className='max-h-[450px] z-10 rounded-xl object-cover min-w-[1300px]' src={each.imgLink} />
            <div className='absolute z-20 w-[500px] flex flex-col gap-4 left-32 bottom-0 top-0 mt-auto mb-auto justify-center'>
                <p className='text-salmon text-3xl font-medium'>{each.topTitle}</p>
                <p className='text-5xl font-bold'>{each.middleTitle}</p>
                <p className='text-2xl font-medium text-silver'>{each.bottomTitle} <span className='text-4xl font-bold'>{each.startPrice.toFixed(2)}</span></p>
                <button className='p-2 bg-salmon text-white px-5 w-[130px] rounded-md font-semibold'>{each.buttonTitle}</button>
            </div>
        </div>
    </div>)}
</div>

  )
}
export default Banner