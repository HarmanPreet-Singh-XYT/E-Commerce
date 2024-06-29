import React, { useLayoutEffect, useState,useRef } from 'react'
import { HomeIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import CategoryProducts from './CategoryProducts';
import CategorySidebar from './CategorySidebar';
import { useParams } from "next/navigation"
import CategoryBanner from './CategoryBanner';
import { availableCategories } from '@/app/data';
import FilterSidebar from '../FilterSidebar';
import categoryDataHandler from '@/app/api/mainCategory';
import Loading from '../Loading';
interface categories{
    categoryid: number;
    name: string;
};
interface Color {
  colorid:number;
  name: string;
  colorname: string;
  colorclass: string;
}

interface Size {
  sizeid:number;
  name: string;
  sizename:string;
  instock: boolean;
}
  interface ProductImage {
    imageid: number;
    imglink: string;
    imgalt: string;
  }
  
  // Interface for products
  interface Product {
    productid: number;
    title: string;
    category: string;
    price: string;
    discount: string;
    stars: number;
    isnew: boolean;
    issale: boolean;
    isdiscount: boolean;
    colors: Color[]; // assuming colors is an array of strings
    sizes: Size[];  // assuming sizes is an array of strings
    reviewCount: number;
    images: ProductImage;
  }
const CategoryPage = () => {
    const categoryCapture = useParams();
    const specificCategory:string|string[] = categoryCapture.category;
    const currDirectory = ['Categories',specificCategory];
    const [loading, setloading] = useState(true)
    const categoriesData = useRef<categories[]>([]);
    const productsData = useRef<Product[]>([]);
    const dataChecked = useRef(false);
    const filterOut = availableCategories.filter((each)=>each.title===specificCategory).map((each)=>each.banners);
    async function fetchData(){
        const response = await categoryDataHandler(specificCategory);
        switch (response.status) {
            case 200:
                categoriesData.current = response.data.data.categories;
                if(response.data.data.products.length > 0) productsData.current = response.data.data.products
                dataChecked.current = true;
                setloading(false);
                break;
            default:
                break;
        }
    }
    useLayoutEffect(() => {
      fetchData();
    }, [])
  return (
    <section className='flex flex-col gap-6'>
        {/* <CategoryBanner banners={filterOut[0]}/> */}
        {loading && <div className='w-full min-w-[1000px]'></div>}
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
            <CategorySidebar categories={categoriesData.current} loading={loading}/>
            <FilterSidebar dataChecked={dataChecked.current}/>
            </div>
            <CategoryProducts dataChecked={dataChecked.current} products={productsData.current} loading={loading}/>
        </section>
    </section>
  )
}

export default CategoryPage