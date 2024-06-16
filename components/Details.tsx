"use client"
import { currentEvent, featuresSec, testimonial } from '@/app/data'
import React, { useState } from 'react'

const Details = () => {
    const [hover, sethover] = useState<number | null>(null);
  return (
    <div className='flex w-full flex-wrap justify-center mt-5 gap-8'>
        <div>
            <p className='tracking-base text-xl font-semibold text-eblack border-b-[1px] pb-3 border-b-gray-200'>Testimonial</p>
            <div className='rounded-xl w-80 h-[375px] border-[1px] mt-8 flex justify-center items-center flex-col gap-4'>
                <img height={80} width={80} src={testimonial.imgLink} className=' rounded-full'/>
                <p className=' text-silver font-bold text-lg tracking-wide'>{testimonial.name} </p>
                <p className=' text-onyx'>{testimonial.position} </p>
                <img width={30} src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/quotes.svg'/>
                <p className='w-[175px] text-center text-silver'>{testimonial.description} </p>
            </div>
        </div>
        <div className='w-[640px] h-[450px] relative rounded-xl justify-center items-center'>
            <img className='h-full w-full rounded-xl absolute' src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/cta-banner.jpg'/>
            <a className='w-[50%] h-[60%] left-0 right-0 top-0 bottom-0 m-auto absolute bg-white rounded-md opacity-70 flex flex-col items-center justify-center gap-2'>
            </a>
            <a href={currentEvent.eventLink} className='w-[50%] h-[60%] left-0 right-0 top-0 bottom-0 m-auto absolute bg-transparent rounded-md flex flex-col items-center justify-center gap-2'>
                <p className={`text-white bg-black p-2 rounded-md font-bold text-base text-center tracking-wider ${currentEvent.isDiscount ? 'block' : 'hidden'}`}>{currentEvent.discount}% DISCOUNT</p>
                <p className='text-[30px] leading-8 font-bold text-gray-700'>{currentEvent.titleFirst}</p>
                <p className='text-[30px] leading-10 font-bold text-gray-700'>{currentEvent.titleLast}</p>
                <p className='text-lg text-silver'>Starting @ ${currentEvent.starting}</p>
                <button className='font-bold text-lg text-silver'>SHOP NOW</button>
            </a>
        </div>
        <div>
            <p className='tracking-base text-xl font-semibold text-eblack border-b-[1px] pb-3 border-b-gray-200 tracking-wide'>Our Services</p>
            <div className='rounded-xl w-80 h-[375px] border-[1px] p-8 mt-8 flex justify-center flex-col gap-4'>
                {featuresSec.map((each,index)=>
                    <a key={index} href='/our-services' onMouseEnter={()=>sethover(index)} onMouseLeave={()=>sethover(null)} className='flex justify-start items-center gap-5'>
                    <div className='w-[40px] h-[40px] flex items-center'><i className={`${each.icon} ${hover==index ? 'text-black' : 'text-salmon'}`}></i></div>
                    <div>
                        <p className='font-semibold tracking-wide text-silver'>{each.title}</p>
                        <p className=' text-sm tracking-wide text-silver'>{each.description}</p>
                    </div>
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default Details