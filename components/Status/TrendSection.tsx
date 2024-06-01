import React from 'react'
import { trendings } from '@/app/data'
const TrendSection = () => {
  return (
    <div className='flex-wrap flex justify-center'>
            <div className='sm:ml-4 tracking-[1px] font-bold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>New Arrivals</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center'>
                            {trendings.newArrivals.primary.map((each,index)=>
                                    <div key={index} className='flex mt-5 mr-5 static border-[1px] rounded-xl min-w-[310px] max-w-[310px] h-[110px] items-center'>
                                        <a href={each.productLink}><img className='ml-2 w-[75px] h-[60px] rounded-md' src={each.imgLink}/></a>
                                        <div className='ml-2 w-[200px]'>
                                        <a href={each.productLink}>
                                            <p className='text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{each.title}</p>
                                        </a>
                                            <a href={each.catLink}><p className='tracking-normal text-silver font-normal text-[16px] hover:text-salmon'>{each.category}</p></a>
                                            <div className='flex items-center'>
                                                <p className='text-lg text-salmon font-bold'>${each.discountPrice.toFixed(2)}</p>
                                                <p className='text-sm line-through ml-4 text-silver'>${each.basePrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                        <div className='snap-center'>
                            {trendings.newArrivals.secondary.map((each,index)=>
                                <div key={index} className='flex mt-5 static border-[1px] rounded-xl min-w-[310px] max-w-[310px] h-[110px] items-center'>
                                        <a href={each.productLink}><img className='ml-2 w-[75px] h-[60px] rounded-md' src={each.imgLink}/></a>
                                        <div className='ml-2 w-[200px]'>
                                        <a href={each.productLink}>
                                            <p className='text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{each.title}</p>
                                        </a>
                                            <a href={each.catLink}><p className='tracking-normal text-silver font-normal text-[16px] hover:text-salmon'>{each.category}</p></a>
                                            <div className='flex items-center'>
                                                <p className='text-lg text-salmon font-bold'>${each.discountPrice.toFixed(2)}</p>
                                                <p className='text-sm line-through ml-4 text-silver'>${each.basePrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 tracking-[1px] font-bold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Trending</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center'>
                            {trendings.trending.primary.map((each,index)=>
                                <div key={index} className='flex mt-5 mr-5 static border-[1px] rounded-xl min-w-[310px] max-w-[310px] h-[110px] items-center'>
                                        <a href={each.productLink}><img className='ml-2 w-[75px] h-[60px] rounded-md' src={each.imgLink}/></a>
                                        <div className='ml-2 w-[200px]'>
                                        <a href={each.productLink}>
                                            <p className='text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{each.title}</p>
                                        </a>
                                            <a href={each.catLink}><p className='tracking-normal font-normal text-[16px] text-silver hover:text-salmon'>{each.category}</p></a>
                                            <div className='flex items-center'>
                                                <p className='text-lg text-salmon font-bold'>${each.discountPrice.toFixed(2)}</p>
                                                <p className='text-sm line-through ml-4 text-silver'>${each.basePrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                        <div className='snap-center'>
                            {trendings.trending.secondary.map((each,index)=>
                                <div key={index} className='flex mt-5 static border-[1px] rounded-xl min-w-[310px] max-w-[310px] h-[110px] items-center'>
                                        <a href={each.productLink}><img className='ml-2 w-[80px] h-[60px] rounded-md' src={each.imgLink}/></a>
                                        <div className='ml-2 w-[200px]'>
                                        <a href={each.productLink}>
                                            <p className='text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{each.title}</p>
                                        </a>
                                            <a href={each.catLink}><p className='tracking-normal text-silver font-normal text-[16px] hover:text-salmon'>{each.category}</p></a>
                                            <div className='flex items-center'>
                                                <p className='text-lg text-salmon font-bold'>${each.discountPrice.toFixed(2)}</p>
                                                <p className='text-sm line-through ml-4 text-silver'>${each.basePrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 tracking-[1px] font-bold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Top Rated</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center'>
                            {trendings.topRated.primary.map((each,index)=>
                                <div key={index} className='flex mt-5 mr-5 static border-[1px] rounded-xl min-w-[310px] max-w-[310px] h-[110px] items-center'>
                                        <a href={each.productLink}><img className='ml-2 w-[75px] h-[60px] rounded-md' src={each.imgLink}/></a>
                                        <div className='ml-2 w-[200px]'>
                                        <a href={each.productLink}>
                                            <p className='text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{each.title}</p>
                                        </a>
                                            <a href={each.catLink}><p className='tracking-normal font-normal text-[16px] text-silver hover:text-salmon'>{each.category}</p></a>
                                            <div className='flex items-center'>
                                                <p className='text-lg text-salmon font-bold'>${each.discountPrice.toFixed(2)}</p>
                                                <p className='text-sm line-through ml-4 text-silver'>${each.basePrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                        <div className='snap-center'>
                            {trendings.topRated.secondary.map((each,index)=>
                                <div key={index} className='flex mt-5 static border-[1px] rounded-xl min-w-[310px] max-w-[310px] h-[110px] items-center'>
                                        <a href={each.productLink}><img className='ml-2 w-[80px] h-[60px] rounded-md' src={each.imgLink}/></a>
                                        <div className='ml-2 w-[200px]'>
                                        <a href={each.productLink}>
                                            <p className='text-[17px] font-bold overflow-hidden whitespace-nowrap text-ellipsis w-full'>{each.title}</p>
                                        </a>
                                            <a href={each.catLink}><p className='tracking-normal text-silver font-normal text-[16px] hover:text-salmon'>{each.category}</p></a>
                                            <div className='flex items-center'>
                                                <p className='text-lg text-salmon font-bold'>${each.discountPrice.toFixed(2)}</p>
                                                <p className='text-sm line-through ml-4 text-silver'>${each.basePrice.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                            )}
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default TrendSection