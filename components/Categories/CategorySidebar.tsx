"use client"
import React, { useState } from 'react';
import { bestSell, leftStatus, availableCategories } from '@/app/data';
import Stars from '../ProductUi/Stars';
import Link from 'next/link';

interface SubcategoryType {
    title: string;
    link: string;
}

interface CategoryType {
    title: string;
    subcategories: SubcategoryType[];
}
const CategorySidebar = ({category}:{category:string[] | string}) => {
    const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setCollapsedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const selectedCategory:CategoryType | undefined = availableCategories.find(cat => cat.title === category);
    return (
        <>
            <div className='hidden lg:flex-col lg:flex ml-auto'>
                <div className='border-[1px] rounded-xl h-auto w-[220px] xl:w-[220px] p-[15px]'>
                    <p className='tracking-[2px] font-semibold text-davysilver mb-4'>CATEGORIES</p>
                        {availableCategories.map((each)=> 
                            each.title === category && each.subcategories.map((each,index)=>
                                <div key={index}>
                                <div
                                    className={`flex text-base mb-4 cursor-pointer`}
                                    >
                                    <div className='flex justify-between items-center w-[100%] text-[20px]'>
                                        <div className='flex justify-center items-center'>
                                            <Link href={each.link} className='text-[16px] font-medium text-silver tracking-[1px]'>{each.title}</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            )
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

export default CategorySidebar;
