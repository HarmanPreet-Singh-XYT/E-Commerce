"use client"
import React, { useState } from 'react';
import { bestSell, leftStatus } from '@/app/data';
import Stars from '../ProductUi/Stars';

const SidebarS = () => {
    const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setCollapsedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
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
                                                <p className='text-[17px]'>{link.quantity}</p>
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className='h-[500px] mt-10'>
                    <p className='font-semibold text-gray-700 tracking-wider text-[17px]'>BEST SELLERS</p>
                    <div className='flex flex-col'>
                        {bestSell.map((each, index) =>
                            <div key={index} className='flex mt-5'>
                                <a href={each.productLink}>
                                    <img className='w-[80px] h-[80px] rounded-md' src={each.imgLink} alt={each.title} />
                                </a>
                                <div className='ml-5'>
                                    <a href={each.productLink}>
                                        <p className='tracking-[1px] text-[16px] text-davysilver hover:text-black'>{each.title}</p>
                                    </a>
                                    <div className='flex items-center gap-2'>
                                        <Stars stars={each.stars}/>
                                        {each.ratingCount > 0 && <p className='text-sm text-silver'>{each.ratingCount}</p>}
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='text-sm line-through text-silver'>${each.basePrice.toFixed(2)}</p>
                                        <p className='text-base font-semibold ml-4 text-davysilver'>${each.discountPrice.toFixed(2)}</p>
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
