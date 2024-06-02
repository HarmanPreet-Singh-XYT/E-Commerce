import React from 'react'
import { trendings } from '@/app/data'
import TrendingPrimary from './TrendingSec'
const TrendSection = () => {
  return (
    <div className='flex-wrap flex justify-center'>
            <div className='sm:ml-4'>
                    <p className='border-b-[1px] font-semibold text-lg leading-[50px] '>New Arrivals</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center'>
                            <TrendingPrimary data={trendings.newArrivals.primary} isSecondary={false}/>
                        </div>
                        <div className='snap-center'>
                            <TrendingPrimary data={trendings.newArrivals.secondary} isSecondary={true}/>
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 font-semibold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Trending</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center'>
                            <TrendingPrimary data={trendings.trending.primary} isSecondary={false}/>
                        </div>
                        <div className='snap-center'>
                            <TrendingPrimary data={trendings.trending.secondary} isSecondary={true}/>
                        </div>
                    </div>
            </div>
            <div className='sm:ml-4 font-semibold text-[18px]'>
                    <p className='border-b-[1px] leading-[50px] '>Top Rated</p>
                    <div className='flex max-w-[310px] overflow-x-auto snap-x snap-mandatory'>
                        <div className='snap-center'>
                            <TrendingPrimary data={trendings.topRated.primary} isSecondary={false}/>
                        </div>
                        <div className='snap-center'>
                            <TrendingPrimary data={trendings.topRated.secondary} isSecondary={true}/>
                        </div>
                    </div>
            </div>
        </div>
  )
}

export default TrendSection