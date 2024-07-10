"use client"
import React, { useLayoutEffect, useRef, useState } from 'react';
import { leftStatus } from '@/app/data';
import Stars from '../ProductUi/Stars';
import Link from 'next/link';
import { sidebarDataHandler } from '@/app/api/homeData';
import Loading from '../Loading';
interface Product {
    productid: number;
    title: string;
    price: number;
    discount: number;
    imglink: string;
    imgalt: string;
    category_name: string;
    stars: number;
    rating: number;
}
const SidebarS = () => {
    const data = useRef<Product[]>([]);
    const [loading, setloading] = useState(true)
    const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setCollapsedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    async function sync(){
        const res = await sidebarDataHandler();
        switch (res.status) {
          case 200:
            data.current = res.data.data;
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
        <>
            <div className='hidden lg:flex-col lg:flex ml-auto'>
                <div className='border-[1px] rounded-xl h-auto w-[220px] xl:w-[320px] p-[15px]'>
                    <p className='tracking-[2px] font-semibold text-davysilver mb-4'>CATEGORY</p>
                    {leftStatus.map((stat, index) =>
                        <div key={index}>
                            <div
                                className={`flex text-base mb-4 cursor-pointer ${collapsedIndex === index ? 'border-b-[1px]' : ''}`}
                                onClick={() => {handleToggle(index)}}>
                                <div className='flex justify-between items-center w-[100%] text-[20px]'>
                                    <div className='flex justify-center items-center'>
                                        <img className='h-[20px] w-[20px] mr-2' src={stat.imgLink} alt={stat.title} />
                                        <p className='text-[16px] font-medium text-silver tracking-[1px]'>{stat.title}</p>
                                    </div>
                                    <p className='text-silver'>{collapsedIndex === index ? '-' : '+'}</p>
                                </div>
                            </div>
                            <div
                                className={`transition-[max-height] duration-[400ms] ease-linear overflow-hidden ${
                                    collapsedIndex === index ? 'max-h-[160px]' : 'max-h-0'
                                }`}
                            >
                                {(
                                    <div className='border-b-[1px] pb-2'>
                                        {stat.links.map((link, linkIndex) =>
                                            <a href={link.link} key={linkIndex} className='flex justify-between mt-1 items-center text-silver hover:text-black'>
                                                <p className='tracking-[1px]'>{link.title}</p>
                                                {/* <p className='text-[17px]'>{link.quantity}</p> */}
                                                <p className='text-[17px]'>{'>'}</p>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className='h-[500px] mt-10 relative'>
                    <p className='font-semibold text-gray-700 tracking-wider text-[17px]'>BEST SELLERS</p>
                    {loading && <div className='w-[100px] h-[350px]'>{loading && <div className='absolute left-0 right-8 top-0 z-50'><Loading/></div>}</div> }
                    <div className='flex flex-col'>
                        {data.current.map((each, index) =>
                            <div key={index} className='flex mt-5'>
                                <Link href={`/product/${each.productid}`}>
                                    <img className='w-[80px] h-[80px] rounded-md' src={each.imglink} alt={each.title} />
                                </Link>
                                <div className='ml-5 max-w-[250px]'>
                                    <Link href={`/product/${each.productid}`} className='tracking-[1px] text-[16px] text-davysilver hover:text-black'>
                                        {each.title}
                                    </Link>
                                    <div className='flex items-center gap-2'>
                                        <Stars stars={each.stars}/>
                                        {each.rating > 0 && <p className='text-sm text-silver'>{each.rating}</p>}
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-sm line-through text-silver'>${each.price}</p>
                                        <p className='text-base font-semibold ml-4 text-davysilver'>${each.discount}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarS;
