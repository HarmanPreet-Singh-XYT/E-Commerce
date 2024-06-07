import React from 'react'
import Banner from '../Banner'
import { HomeIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import CategoryProducts from './CategoryProducts';
import CategorySidebar from './CategorySidebar';
import { useParams } from "next/navigation"
const CategoryPage = () => {
    const categoryCapture = useParams();
    const specificCategory:string|string[] = categoryCapture.category;
    const currDirectory = ['Categories','Fashion'];
  return (
    <section className='flex flex-col gap-6'>
        <Banner/>
        <div className='flex items-center gap-5'>
            <HomeIcon width={35}/>
            {currDirectory.map((each,index)=>
            <div className='flex gap-5' key={index}>
                <ChevronDoubleRightIcon width={20}/>
                <p className='font-medium'>{each}</p>
            </div>
            )}
        </div>
        <section className='flex'>
            <CategorySidebar category={specificCategory}/>
            <CategoryProducts/>
        </section>
    </section>
  )
}

export default CategoryPage