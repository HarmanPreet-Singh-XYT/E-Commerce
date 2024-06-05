import React,{ Fragment, useState } from 'react'
import Stars from './Stars'
import { ShoppingCartIcon, ReceiptRefundIcon, HeartIcon, CurrencyRupeeIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { Radio, RadioGroup } from '@headlessui/react'
import { products } from '@/app/data'
import ReviewSection from './Product/ReviewSection'
function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}
const ProductPage = () => {
    const collection = ["https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-4.jpg","https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shirt-2.jpg","https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/jacket-6.jpg","https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/clothes-4.jpg","https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shoe-2_1.jpg"]
    const product = products[0];
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    
    
    return (
    <div className='flex flex-col gap-5 border-t-[1px]'>
        <div className='flex items-center justify-center'>
            <div className='w-[80%] mb-5 mt-5'>
                <p>Home {'>'} Lamp & Lighting</p>
            </div>
        </div>
        <div className='flex justify-center gap-10'>
            <div className='flex flex-col gap-5'>
                <img className='border-[1px] rounded-xl drop-shadow-custom-xl' height={600} width={600} src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg'/>
                <div className='flex gap-5 justify-center'>
                    {collection.map((each,index)=>
                        <img className='rounded-md border-[1px] drop-shadow-custom-xl' height={75} width={75} key={index} src={each}/>
                    )}
                </div>
            </div>
            <div className='flex flex-col gap-5 border-[1px] py-10 px-10 rounded-xl'>
                <div className='border-b-[1px] pb-5 mb-2'>
                    <p className='text-3xl w-[600px] font-medium'>Matte Balck & Gold Self Design Handcrafted Table Lamp with Shade</p>
                    <p className='text-silver'>By Homesake</p>
                    <div className="flex items-center">
                        <p className='mr-1 text-sm'>4.1</p>
                        <Stars stars={4.1}/>
                        <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {46} reviews
                        </a>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                    <p className='font-bold text-3xl'>₹ 2150.00</p>
                    <p className='line-through'>₹ 2970.00</p>
                    <p className='text-yellow-500'>30% off</p>
                </div>
                <p><span className='font-semibold'>In stock</span>: Dispatch in 5 working days</p>
                <div className='flex gap-10 items-center'>
                    <p>Quantity</p>
                    <div className='flex'>
                        <button className='w-[50px] text-4xl bg-gray-100 rounded-l-lg'>-</button>
                        <input defaultValue={1} className='bg-gray-100 w-[30px] h-[50px]' type='number'/>
                        <button className='w-[40px] text-4xl bg-gray-100 rounded-r-lg'>+</button>
                    </div>
                    
                </div>
                {/*  */}
                <section aria-labelledby="options-heading">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Colors */}
                          <fieldset aria-label="Choose a color">
                            <legend className="text-sm font-medium text-gray-900">Color</legend>

                            <RadioGroup
                              value={selectedColor}
                              onChange={setSelectedColor}
                              className="mt-2 flex items-center space-x-3"
                            >
                              {product.colors.map((color) => (
                                <Radio
                                  key={color.name}
                                  value={color}
                                  aria-label={color.name}
                                  className={({ focus, checked }) =>
                                    classNames(
                                      color.selectedClass,
                                      focus && checked ? 'ring ring-offset-1' : '',
                                      !focus && checked ? 'ring-2' : '',
                                      'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                    )
                                  }
                                >
                                  <span
                                    aria-hidden="true"
                                    className={classNames(
                                      color.class,
                                      'h-8 w-8 rounded-full border border-black border-opacity-10'
                                    )}
                                  />
                                </Radio>
                              ))}
                            </RadioGroup>
                          </fieldset>

                          {/* Sizes */}
                          <fieldset className="mt-4" aria-label="Choose a size">
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-medium text-gray-900">Size</div>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                Size guide
                              </a>
                            </div>

                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                              className="mt-2 grid grid-cols-4 gap-4"
                            >
                              {product.sizes.map((size) => (
                                <Radio
                                  key={size.name}
                                  value={size}
                                  disabled={!size.inStock}
                                  className={({ focus }) =>
                                    classNames(
                                      size.inStock
                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                      focus ? 'ring-2 ring-indigo-500' : '',
                                      'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                    )
                                  }
                                >
                                  {({ checked, focus }) => (
                                    <>
                                      <span>{size.name}</span>
                                      {size.inStock ? (
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
                          </fieldset>
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
                <p className='font-semibold mt-5'>Eligible for Delivery?</p>
                <div className='flex items-center gap-10 text-sm'>
                    <input className='bg-gray-100 w-[200px] h-[35px] rounded-md' type='number'/>
                    <p>The product is deliverable to this pincode</p>
                </div>
                <div className='flex gap-4 mb-10 border-b-[1px] pb-10 text-sm'>
                    <div className='flex gap-2'>
                        <div className='bg-gray-100 rounded-full px-2 py-2'>
                        <ShoppingCartIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Get it by Thu, 20 Aug</p>
                    </div>
                    <div className='flex gap-2'>
                        <div className='bg-gray-100 rounded-full px-2 py-2'>
                        <ReceiptRefundIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Easy returns available</p>
                    </div>
                    <div className='flex gap-1'>
                        <div className='bg-gray-100 rounded-full px-2 py-2'>
                        <CurrencyRupeeIcon width={30}/>
                        </div>
                        <p className='w-[135px]'>Cash on delivery available</p>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <p className='font-semibold'>Description:</p>
                    <p className='w-[600px]'>WIDE RANGE OF APPLICATION: Ideal for bundling various items together at home, office, garden, workshop etc., and helping to sort out cords, electrical cables, wires. These cables are easy to use put the tail of zip tie through the ratchet hole in the head part, tighten it and cut the excess part with scissors or cable tie gun.</p>
                </div>
                
            </div>
        </div>
        <ReviewSection/>
    </div>
  )
}

export default ProductPage