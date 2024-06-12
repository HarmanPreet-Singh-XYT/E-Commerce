import React from 'react'
import { HomeIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import CategoryProducts from './CategoryProducts';
import CategorySidebar from './CategorySidebar';
import { useParams } from "next/navigation"
import CategoryBanner from './CategoryBanner';
import { availableCategories } from '@/app/data';
import FilterSidebar from '../FilterSidebar';
const CategoryPage = () => {
    const categoryCapture = useParams();
    const specificCategory:string|string[] = categoryCapture.category;
    const currDirectory = ['Categories',specificCategory];
    const filterOut = availableCategories.filter((each)=>each.title===specificCategory).map((each)=>each.banners);
  return (
    <section className='flex flex-col gap-6'>
        <CategoryBanner banners={filterOut[0]}/>
        <div className='flex items-center gap-5'>
            <HomeIcon width={35}/>
            {currDirectory.map((each,index)=>
            <div className='flex gap-5' key={index}>
                <ChevronDoubleRightIcon width={20}/>
                <p className='font-medium capitalize'>{each}</p>
            </div>
            )}
        </div>
        <section className='flex'>
            <div className='relative ml-4'>
            <CategorySidebar category={specificCategory}/>
            <FilterSidebar/>
            </div>
            <CategoryProducts/>
        </section>
    </section>
  )
}

export default CategoryPage