import React,{ useLayoutEffect, useRef, useState } from 'react'
import Stars from './Stars'
import { ShoppingCartIcon, ReceiptRefundIcon, HeartIcon, CurrencyRupeeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { Radio, RadioGroup } from '@headlessui/react'

import ReviewSection from './Product/ReviewSection'
import ProductNotFound from './Product/ProductNotFound'
import productDataHandler from '@/app/api/product'
import { useParams } from 'next/navigation'
import Loading from '../Loading'
function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
// Interface for individual reviews
interface Review {
  reviewid: number;
  userid: number;
  rating: number;
  comment: string;
  username: string;
  createdat: string;
}

// Interface for images in imgcollection
interface ProductImage {
  imageid: number;
  imglink: string;
  imgalt: string;
}

// Interface for sizes
interface ProductSize {
  sizeid: number;
  sizename: string;
  instock: number;
}

// Interface for colors
interface ProductColor {
  colorid: number;
  colorname: string;
  colorclass: string;
}

// Interface for categories
interface Categories {
  subcategory: string;
  maincategory: string;
}

// Main interface for the product
interface Product {
  title: string;
  description: string;
  stock: number;
  discountedprice: string;
  price: string;
  stars: number;
  seller: string;
  reviewcount: number;
  categories: Categories;
  imglink: string;
  imgalt: string;
  imgcollection: ProductImage[] | [];
  colors: ProductColor[] | [];
  sizes: ProductSize[] | [];
  reviews: Review[] | [];
}
const ProductPage = () => {
  const ref = useRef<any>(null);
    const [totalQuantity, settotalQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState<ProductColor>();
    const [selectedSize, setSelectedSize] = useState<ProductSize>();
    const [selectedImage, setselectedImage] = useState({imgLink:'',imgAlt:''});
    const [originalImage, setoriginalImage] = useState({imgLink:'',imgAlt:''});
    const [quantity, setQuantity] = useState(1);
    const [found, setfound] = useState(true);
    const [data, setdata] = useState<Product>();
    const params = useParams<{ productID: string }>()
    const [dataChecked, setdataChecked] = useState(false);
    async function dataRequest(){
      const response = await productDataHandler({productID:params.productID});
      switch (response.status) {
        case 200:
        setdata(response.data.data);
        setdataChecked(true);
        if(data != undefined){
          setSelectedColor(data.colors[0]);
          setSelectedSize(data.sizes[0]);
        }
        data != undefined && settotalQuantity(data?.stock);
          break;
        case 500:
          setfound(false);
          setdataChecked(true);
          break;
      }
    }
    useLayoutEffect(() => {
      dataRequest();
    }, [])
    const changeValue = (action:string)=>{
      switch (action) {
        case 'increase':
          totalQuantity > quantity && setQuantity(quantity+1);
          break;
        case 'decrease':
          quantity>1 && setQuantity(quantity-1);
          break;
      }
    }
    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };
    function percentageDifference(a:number, b:number) {
      const difference = Math.abs(a - b);
      const average = (a + b) / 2;
      const percentageDiff = (difference / average) * 100;
      return Math.round(percentageDiff);
    }
    return (
    <div className='flex flex-col gap-5 border-t-[1px] w-[100%]'>
      {!dataChecked && <Loading/>}
      {(dataChecked && data!=undefined) && <>{found && <>
      <div className='flex items-center flex-col justify-center'>
            <div className='w-[80%] mb-5 mt-5'>
                <p>{data.categories.maincategory} {'>'} {data.categories.subcategory}</p>
            </div>
        </div>
        <div className='flex justify-center gap-10 flex-col items-center lg:flex-row'>
            <div className='flex img-wrapper flex-col gap-5 w-[90%] md:w-[60%] py-2 px-2 lg:w-[600px] lg:h-[600px] items-center'>
                <img className='border-[1px] rounded-xl drop-shadow-custom-xl w-[100%] lg:w-[600px] lg:h-[600px] hover-zoom' src={selectedImage.imgLink} alt={selectedImage.imgAlt}/>
                <div className='flex gap-5 justify-center'>
                    {data.imgcollection.map((each,index)=>
                        <img onMouseLeave={()=>setselectedImage(originalImage)} onMouseEnter={()=>setselectedImage({imgLink:each.imglink,imgAlt:each.imgalt})} className='rounded-md border-[1px]' onClick={()=>setselectedImage({imgLink:each.imglink,imgAlt:each.imgalt})} height={75} width={75} key={index} src={each.imgalt} alt={each.imgalt}/>
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-5 border-[1px] py-10 px-10 max-w-[90%] rounded-xl lg:max-w-[50%] w-auto'>
                <div className='border-b-[1px] pb-5 mb-2'>
                    <p className='text-3xl max-w-[600px] font-medium'>{data.title}</p>
                    <p className='text-silver'>By {data.seller}</p>
                    <div className="flex items-center">
                        <p className='mr-1 text-sm'>{data.stars}</p>
                        <Stars stars={data.stars}/>
                        <button onClick={handleClick} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {data.reviewcount} reviews
                        </button>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <p className='font-bold text-3xl'>₹ {data.discountedprice}</p>
                    <p className='line-through'>₹ {data.price}</p>
                    <p className='text-yellow-500'>{percentageDifference(parseInt(data.discountedprice),parseInt(data.price))}% off</p>
                </div>
                <p><span className='font-semibold'>In stock</span>: Dispatch in 5 working days</p>
                <div className='flex gap-10 items-center'>
                    <p>Quantity</p>
                    <div className='flex items-center justify-center rounded-xl bg-gray-100'>
                        <button onClick={()=>changeValue('decrease')} className='w-[50px] text-4xl bg-gray-100 rounded-l-lg'>-</button>
                        <p className='bg-gray-100 w-[20px]'>{quantity}</p>
                        <button onClick={()=>changeValue('increase')} className='w-[40px] text-4xl bg-gray-100 rounded-r-lg'>+</button>
                    </div>
                    
                </div>
                {/*  */}
                <section aria-labelledby="options-heading">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          {data.colors.length > 1 && <fieldset aria-label="Choose a color">
                            <legend className="text-sm font-medium text-gray-900">Color</legend>

                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-2 flex items-center space-x-3"
                            >
                              {data.colors.map((color) => (
                                <Radio
                                  key={color.colorname}
                                  value={color}
                                  aria-label={color.colorname}
                                  className={({ focus, checked }) =>
                                    classNames(
                                      color.colorclass,
                                      focus && checked ? 'ring ring-offset-1' : '',
                                      !focus && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                  }
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.colorclass,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                  />
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>}

                          {/* Sizes */}
                          {data.sizes.length > 0 && <fieldset className="mt-4" aria-label="Choose a size">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-gray-900">Size</div>
                              {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a> */}
                            </div>

                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-2 grid grid-cols-4 gap-4"
                            >
                              {data.sizes.map((size) => (
                                <Radio
                                  key={size.sizename}
                                  value={size}
                                  disabled={!size.instock}
                                  className={({ focus }) =>
                                    classNames(
                                      size.instock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      focus ? 'ring-2 ring-indigo-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ checked, focus }) => (
                                    <>
                                      <span>{size.sizename}</span>
                                      {size.instock ? (
                                        <span
                                          className={classNames(
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            focus ? 'border' : 'border-2',
                                            'pointer-events-none absolute -inset-px rounded-md'
                                          )}
                                          aria-hidden="true"
                                        />
                                      ) : (
                                        <span
                                          aria-hidden="true"
                                          className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                        >
                                          <svg
                                            className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                            viewBox="0 0 100 100"
                                            preserveAspectRatio="none"
                                            stroke="currentColor"
                                          >
                                            <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                          </svg>
                                        </span>
                                      )}
                                    </>
                                  )}
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>}
                        </form>
                      </section>
                {/*  */}
                <div className='flex gap-5'>
                    <button className='w-[200px] h-[50px] bg-yellow-400 rounded-lg font-semibold'>ADD TO CART</button>
                    <button className='w-[200px] h-[50px] rounded-lg font-semibold border-yellow-400 border-[2px]'>BUY NOW</button>
                </div>
                <div className='flex gap-10 text-silver text-sm border-b-[1px] pb-10'>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <HeartIcon width={25}/>
                        <p>Add to wishlist</p>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer'>
                        <GlobeAltIcon width={25}/>
                        <p>Find alternate products</p>
                    </div>
                </div>
                {/* <p className='font-semibold mt-5'>Eligible for Delivery?</p>
                <div className='flex items-center gap-10 text-sm'>
                    <input className='bg-gray-100 w-[200px] h-[35px] rounded-md' type='number'/>
                    <p>The product is deliverable to this pincode</p>
                </div> */}
                <div className='flex gap-4 flex-wrap mb-10 border-b-[1px] pb-5 text-sm'>
                    <div className='flex gap-2'>
                        <div className='bg-yellow-300 rounded-full px-2 py-2'>
                        <ShoppingCartIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Get it by Thu, 20 Aug</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='bg-yellow-300 rounded-full px-2 py-2'>
                        <ReceiptRefundIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Easy returns available</p>
                    </div>
                    <div className='flex gap-1'>
                        <div className='bg-yellow-300 rounded-full px-2 py-2'>
                        <CurrencyRupeeIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Cash on delivery available</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-semibold'>Description:</p>
                    <p className='w-[600px]'>{data.description}</p>
                </div>
                
            </div>
        </div>
        <div ref={ref}>
        <ReviewSection data={data.reviews} reviewCount={data.reviewcount}/>
        </div></>
        }</>}
        {(dataChecked && !found) && <ProductNotFound/>}
    </div>
  )
}

export default ProductPage