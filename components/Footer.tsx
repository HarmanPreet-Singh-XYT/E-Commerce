import React from 'react'
import { footerCategories, footerSections } from '@/app/data'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='bg-footerblack  w-screen flex flex-col'>
        <div className='flex flex-col justify-center items-center border-b-[1px] border-b-silver mt-16 pb-16'>
            <div className='ml-4 mr-4'>
            <p className='text-salmon font-semibold text-base tracking-wide'>BRAND DIRECTORY</p>
                {footerCategories.map((each,index)=>
                    <div key={index} className='flex mt-5 flex-wrap items-center'>
                        <p className='text-footergray font-semibold'>{each.name} :</p>
                                {each.subcategories.map((each1,index)=>
                                    <div key={index} className='flex'>
                                        <Link href={each1.subcatLink} className='text-silver tracking-wide ml-2 hover:text-gray-300'>{each1.name}</Link>
                                        <span className='bg-silver w-[1px] ml-2 h-[20px]'></span>
                                    </div>
                                )}
                    </div>
                )}
            </div>
        </div>
        <div className='relative flex flex-row pb-14 gap-10 flex-wrap border-b-[1px] justify-evenly border-b-silver'>
            {footerSections.map((each,index)=>
                <div key={index} className='flex flex-col'>
                    <p className='text-white mt-16 font-bold text-md tracking-wide mb-1'>{each.sectionName}</p>
                    <span className='border-b-[1px] w-16 border-b-salmon mb-6'></span>
                    <div className='gap-2 flex flex-col'>
                        {each.items.map((each1,index)=>
                            <Link href={each1.link} key={index} className='text-silver hover:text-gray-400'>{each1.title}</Link>
                        )}
                    </div>
                </div>
            )}
        </div>
        <div className='w-[100%] h-50  gap-2 flex flex-col items-center mt-4 mb-16 lg:mb-0'>
            <img height={50} src='https://codewithsadee.github.io/anon-ecommerce-website/assets/images/payment.png'/>
            <p className='text-silver font-semibold tracking-[2px] lg:pb-0'>Copyright &copy; Anon All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer