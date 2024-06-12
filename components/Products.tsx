import { products } from '@/app/data';
import React, { useState } from 'react';
import Quickview from './ProductUi/Quickview';
import { defaultData } from '@/app/data';
import Stars from './ProductUi/Stars';
import Link from 'next/link';
interface Color {
  name: string;
  class: string;
  selectedClass: string;
}

interface Size {
  name: string;
  inStock: boolean;
}

interface Price {
  basePrice: number;
  discountPrice: number;
}

interface Params {
  isSale: boolean;
  isNew: boolean;
  isDiscount: boolean;
}

interface Product {
  imgLink: string;
  secImglink: string;
  imgCollection: string[];
  imgAlt: string;
  productID: string;
  discount: number;
  category: string;
  title: string;
  ratingCount: number;
  stars: number;
  price: Price;
  params: Params;
  colors: Color[];
  isSizeAvailable: boolean;
  sizes: Size[];
}
const ProductCard = ({ product }:{ product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [productData, setproductData] = useState(defaultData);
  const [open, setOpen] = useState(false);
  return (
    <div
      className='relative flex flex-col border-[1px] rounded-xl sm:max-w-[220px] p-1 overflow-hidden transition-shadow duration-300 hover:shadow-lg'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Quickview open={open} setOpen={setOpen} product={productData} />
      {product.params.isSale && (
        <div className="absolute top-2 -left-8 bg-black text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
          SALE
        </div>
      )}
      {product.params.isNew && (
        <div className="absolute top-2 -left-8 bg-salmon text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
          New
        </div>
      )}
      {product.params.isDiscount && (
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 text-md uppercase rounded">
          {product.discount}%
        </div>
      )}
      <div className={`relative transition-transform mb-1 duration-300 ${isHovered && 'scale-105'}`}>
        <img className='min-w-[200px] min-h-[210px]' src={product.imgLink} alt={product.title} />
        {isHovered && (
          <button
            className='absolute bottom-2 left-1/2 rounded-xl transform -translate-x-1/2 w-[100px] h-[30px] flex items-center justify-center bg-black bg-opacity-50 text-white text-sm uppercase transition-opacity duration-300'
            onClick={() => {setOpen(true);setproductData(product)}}>
            Quickview
          </button>
        )}
      </div>
      <div className='pl-4 pr-4 flex flex-col gap-2'>
        <a href=''><p className='text-[14px] text-salmon'>{product.category}</p></a>
        <Link href={`/product/${product.productID}`}><p className='tracking-[1px] text-silver hover:text-davysilver'>{product.title}</p></Link>
        <div className='flex items-center gap-2'>
          <Stars stars={product.stars}/>
          {product.ratingCount > 0 && <p className=' text-silver'>{product.ratingCount}</p>}
        </div>
        <div className='flex mb-5 items-center gap-4'>
          <p className='font-bold text-[18px]'>${product.price.discountPrice.toFixed(2)}</p>
          <p className='line-through'>${product.price.basePrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className='sm:ml-4 ml-auto p-2 mr-auto mt-10 pb-8 max-w-[980px] flex flex-col flex-1'>
      <p className='border-b-[1px] leading-[50px] tracking-wide font-semibold text-lg'>New Products</p>
      <div className='flex flex-wrap mt-8 gap-5 justify-center max-w-[980px] flex-1'>
        {products.map((each, index) => (
          <ProductCard key={index} product={each} />
        ))}
      </div>
    </div>
  );
}

export default Products;
