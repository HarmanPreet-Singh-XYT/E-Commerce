import React, { useLayoutEffect, useState,useRef, useEffect } from 'react'
import { HomeIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/outline'
import CategoryProducts from './CategoryProducts';
import CategorySidebar from './CategorySidebar';
import { useParams } from "next/navigation"
import CategoryBanner from './CategoryBanner';
import FilterSidebar from '../FilterSidebar';
import categoryDataHandler from '@/app/api/mainCategory';
import Loading from '../Loading';
import { categoryFilterHandler, categoryOnlyFilterHandler } from '@/app/api/filter';
import CategoryMSidebar from '../Mobile-Interface/CategoryMSidebar';
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
    const [sidebarLoading, setsidebarLoading] = useState(true);
    const [loading, setloading] = useState(true)
    const categoriesData = useRef<categories[]>([{categoryid:0,name:'All'}]);
    const productsData = useRef<Product[]>([]);
    const dataChecked = useRef(false);
    const [clear, setClear] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [selectedCategoryIndex, setselectedCategoryIndex] = useState<number>(0)
    async function filterSubmit(e:any){
      e.preventDefault();
      productsData.current = [];
      dataChecked.current = false;
      setloading(true);
      const values = {
        minPrice:e.target.pricefrom.value,
        maxPrice:e.target.priceto.value,
        rating:e.target.rating.value
      }
      const response = await categoryFilterHandler({minPrice:values.minPrice,maxPrice:values.maxPrice,minRating:values.rating,categoryID:selectedCategoryIndex,categoryName:specificCategory});
      switch (response.status) {
        case 200:
          productsData.current = response.data.data;
          dataChecked.current = true;
          setloading(false);
          break;
      }
    }
    async function filterCategoryData(){
      productsData.current = [];
      dataChecked.current = false;
      setloading(true);
      const response = await categoryOnlyFilterHandler({categoryID:selectedCategoryIndex,categoryName:specificCategory});
      switch (response.status) {
        case 200:
          productsData.current = response.data.data;
          dataChecked.current = true;
          setloading(false);
          break;
      }
    }
    async function fetchData(){
      if(productsData.current.length != 0) productsData.current=[];
      if(!loading) setloading(true);
      if(categoriesData.current.length!=0) categoriesData.current = [{categoryid:0,name:'All'}];
      if(!sidebarLoading) setsidebarLoading(true);
        const response = await categoryDataHandler(specificCategory);
        switch (response.status) {
            case 200:
                categoriesData.current = [...categoriesData.current,...response.data.data.categories];
                if(response.data.data.products.length > 0) productsData.current = response.data.data.products
                dataChecked.current = true;
                setsidebarLoading(false);
                setloading(false);
                break;
            default:
                break;
        }
    }
    function toggleClear(){
      setClear(!clear);
    }
    useLayoutEffect(() => {
      fetchData();
    }, [clear]);
    useEffect(() => {
      dataChecked.current && filterCategoryData();
    }, [selectedCategoryIndex]);
    
  return (
    <>
    <CategoryMSidebar isMenu={isMenu} setIsMenu={setIsMenu} categoriesData={categoriesData.current} sidebarLoading={sidebarLoading} selectedCategoryIndex={selectedCategoryIndex} setselectedCategoryIndex={setselectedCategoryIndex} dataChecked={dataChecked.current} filterSubmit={filterSubmit} toggleClear={toggleClear} />
    <section className='flex flex-col gap-6'>
        {/* <CategoryBanner banners={filterOut[0]}/> */}
        {/* {loading && <div className='w-full min-w-[1000px]'></div>} */}
        <div className='flex items-center gap-5'>
            <HomeIcon width={35}/>
            {currDirectory.map((each,index)=>
            <div className='flex gap-5' key={index}>
                <ChevronDoubleRightIcon width={20}/>
                <p className='font-medium capitalize'>{each}</p>
            </div>
            )}
        </div>
        <button
        onClick={()=>setIsMenu(true)}
            className="rounded-full lg:hidden px-2 py-2 border-2 font-semibold text-md text-primary-600 whitespace-nowrap w-[200px] mx-auto text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-500 hover:text-white">Filter Products</button>
        <section className='flex'>
            <div className='relative ml-4'>
            <CategorySidebar categories={categoriesData.current} loading={sidebarLoading} selectedCategoryIndex={selectedCategoryIndex} setselectedCategoryIndex={setselectedCategoryIndex} mobileMode={false}/>
            <FilterSidebar dataChecked={dataChecked.current} filterSubmit={filterSubmit} toggleClear={toggleClear} mobileMode={false}/>
            </div>
            <CategoryProducts dataChecked={dataChecked.current} products={productsData.current} loading={loading}/>
        </section>
    </section>
    </>
  )
}

export default CategoryPage