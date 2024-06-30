import React, { useState } from 'react';
import Quickview from '../ProductUi/Quickview';
import Stars from '../ProductUi/Stars';
import NoProduct from './NoProduct';
import Loading from '../Loading';
import Link from 'next/link';
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
const defaultProduct: Product = {
  productid: 0,
  title: "",
  category: "",
  price: "0.00",
  discount: "0.00",
  stars: 0,
  isnew: false,
  issale: false,
  isdiscount: false,
  colors: [],
  sizes: [],
  reviewCount: 0,
  images: {
      imageid: 0,
      imglink: "",
      imgalt: ""
  }
};
const ProductCard = ({ product }:{ product:Product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [productData, setproductData] = useState(defaultProduct);
  const [open, setOpen] = useState(false);
  return (
    <div
      className='relative flex flex-col border-[1px] rounded-xl lg:max-h-[400px] sm:max-w-[220px] p-1 overflow-hidden transition-shadow duration-300 hover:shadow-lg'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Quickview open={open} setOpen={setOpen} product={productData} />
      {product.issale && (
        <div className="absolute top-2 -left-8 bg-black text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
          SALE
        </div>
      )}
      {product.isnew && (
        <div className="absolute top-2 -left-8 bg-salmon text-white px-10 py-1 z-10 rotate-[320deg] text-[12px] uppercase rounded">
          New
        </div>
      )}
      {product.isdiscount && (
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 text-md uppercase rounded">
          {product.discount}%
        </div>
      )}
      <div className={`relative transition-transform mb-1 duration-300 ${isHovered && 'scale-105'}`}>
        <img className='min-w-[200px] min-h-[210px]' src={product.images.imglink} alt={product.title} />
        {isHovered && (
          <button
            className='absolute bottom-2 left-1/2 rounded-xl transform -translate-x-1/2 w-[100px] h-[30px] flex items-center justify-center bg-black bg-opacity-50 text-white text-sm uppercase transition-opacity duration-300'
            onClick={() => {setOpen(true);setproductData(product)}}>
            Quickview
          </button>
        )}
      </div>
      <div className='pl-4 pr-4 flex flex-col gap-2'>
        <Link href={`/product/${product.productid}`}><p className='text-[14px] text-salmon'>{product.category}</p></Link>
        <Link href={`/product/${product.productid}`}><p className='tracking-[1px] text-silver hover:text-davysilver'>{product.title}</p></Link>
        <div className='flex items-center gap-2'>
          <Stars stars={product.stars}/>
          {product.reviewCount > 0 && <p className=' text-silver'>{product.reviewCount}</p>}
        </div>
        <div className='flex mb-5 items-center gap-4'>
          <p className='font-bold text-[18px]'>${product.discount}</p>
          <p className='line-through'>${product.price}</p>
        </div>
      </div>
    </div>
  );
};

const CategoryProducts = ({ dataChecked,products,loading }:{ dataChecked:boolean,products:Product[],loading:boolean }) => {
  return (
    <div className='sm:ml-4 ml-auto mr-auto pb-8 max-w-[980px] flex flex-col flex-1'>
      <p className='border-b-[1px] leading-[40px] tracking-wide font-semibold text-lg'>Products</p>
      <div className='flex flex-wrap mt-8 gap-5 justify-center xl:w-[980px] lg:w-[720px] max-w-[980px] flex-1 relative'>
      {loading && <div className='w-full h-[300px]'>{loading && <div className='absolute left-0 right-0 top-0 z-50'><Loading/></div>}</div> }
        {(dataChecked && products.length === 0) && <NoProduct/>}
        {dataChecked && products.map((each, index) => (
          <ProductCard key={index} product={each} />
        ))}
      </div>
    </div>
  );
}

export default CategoryProducts;