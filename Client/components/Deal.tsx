import React, { useLayoutEffect, useRef, useState } from 'react'
import DealTime from './DealTime';
import ProgressBar from './ProgressBar';
import Stars from './ProductUi/Stars';
import { dealDataHandler } from '@/app/api/homeData';
import Link from 'next/link';
import Loading from './Loading';
interface DealProduct {
    productid: number;
    title: string;
    stars: number;
    description: string;
    price: number;
    discount: number;
    sold: number;
    available: number;
    rating: number;
    imglink: string;
    imgalt: string;
    end_time:string;
}
const Deal = () => {
    const data = useRef<DealProduct[]>([]);
    const [loading, setloading] = useState(true);
    async function sync(){
        const res = await dealDataHandler();
        switch (res.status) {
          case 200:
            data.current = res.deals.data;
            setloading(false);
            break;
          default:
    
            break;
        }
    }
    useLayoutEffect(() => {
      sync();
    }, [])
  return (
    
    <div className=' mt-10 sm:ml-4 ml-auto mr-auto max-w-[350px] md:max-w-[800px] xl:max-w-[1000px] flex flex-col justify-center'>
        <p className='border-b-[1px] leading-[50px] tracking-[1.5px] font-semibold text-[18px]'> Deal of The Day</p>
        <div className='p-[30px] border-[1px] mt-8 rounded-xl overflow-auto snap-x snap-proximity flex gap-20 relative'>
        {loading && <div className='w-screen h-[350px]'>{loading && <div className='absolute left-0 right-0 top-16 z-50'><Loading/></div>}</div> }
            {data.current.map((each,index)=><div key={index} className='flex flex-col rounded-xl min-w-full gap-5 h-auto items-center lg:pl-10 snap-center lg:flex-row'>
                <a href={`/product/${each.productid}`}><img className='max-w-[450px] min-w-[200px] rounded-md' alt={each.imgalt} src={each.imglink}/></a>
                <div className='flex flex-col gap-4 w-full'>
                    <div className='flex items-center gap-2'>
                        <Stars stars={each.stars}/>
                        {each.rating > 0 && <p className='text-sm text-silver'>{each.rating}</p>}
                    </div>
                    <a href={`/product/${each.productid}`}>
                        <p className='text-base font-bold w-full'>{each.title}</p>
                    </a>
                    <p className='text-base tracking-normal text-silver'>{each.description}</p>
                    <div className='flex items-center'>
                        <p className='text-2xl font-bold text-salmon'>${each.price}</p>
                        <p className='text-xl line-through ml-4 text-silver'>${each.discount}</p>
                    </div>
                    <Link href={`/product/${each.productid}`}><button className='bg-salmon p-2 rounded-xl w-[165px] h-[45px] text-white font-bold text-lg hover:bg-black hover:text-white transition-colors duration-200'>Visit Product</button></Link>
                    <div className='flex justify-between'>
                        <p className='text-sm'>ALREADY SOLD: <span className='font-bold'>{each.sold}</span></p>
                        <p className='text-sm'>AVAILABLE: <span className='font-bold'>{each.available}</span></p>
                    </div>
                    <ProgressBar sold={each.sold} total={each.available}/>
                    <p className='text-sm font-semibold'>HURRY UP! OFFER ENDS IN:</p>
                    <DealTime endTime={each.end_time}/>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default Deal