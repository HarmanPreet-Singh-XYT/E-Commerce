"use client"
import React from 'react';
import { bestSell, availableCategories } from '@/app/data';
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
    return (
        <>
            <div className='hidden lg:flex-col lg:flex ml-auto mb-5'>
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
            </div>
        </>
    );
};

export default CategorySidebar;
