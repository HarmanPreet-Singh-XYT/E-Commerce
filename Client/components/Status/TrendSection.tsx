import React, { useEffect, useRef, useState } from 'react'
import TrendingPrimary from './TrendingSec'
import { topDataHandler } from '@/app/api/homeData';
import Loading from '../Loading';
interface Product {
    productid: number;
    title: string;
    price: number;
    discount: number;
    imglink: string;
    imgalt: string;
    category_name: string;
    maincategory:string;
}
interface data{
    trending:Product[];
    top_rated:Product[];
    new_arrival:Product[];
}
const TrendSection = () => {
    const data = useRef<data>({trending:[],top_rated:[],new_arrival:[]});
    const [loading, setloading] = useState(true);
    async function sync(){
        const res = await topDataHandler();
        switch (res.status) {
          case 200:
            data.current = res.data.data;
            setloading(false);
            break;
          default:
    
            break;
        }
    }
    useEffect(() => {
      sync();
    }, [])
    
  return (
    <div className='flex-wrap xl:w-[100%] w-auto flex justify-center'>
            <div className='sm:ml-4'>
                    <p className='border-b-[1px] font-semibold text-lg leading-[50px] '>New Arrivals</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.new_arrival.slice(0,4)} isSecondary={false}/>
                        </div>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.new_arrival.slice(4)} isSecondary={true}/>
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 font-semibold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Trending</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.trending.slice(0,4)} isSecondary={false}/>
                        </div>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.trending.slice(4)} isSecondary={true}/>
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 font-semibold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Top Rated</p>
                    <div className='flex max-w-[310px]  overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center relative'>
                        {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.top_rated.slice(0,4)} isSecondary={false}/>
                        </div>
                        <div className='snap-center relative'>
                            {loading && <div className='w-[310px] h-[450px]'>{loading && <div className='absolute left-0 right-8 top-20 z-50'><Loading/></div>}</div> }
                            <TrendingPrimary data={data.current.top_rated.slice(4)} isSecondary={true}/>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default TrendSection