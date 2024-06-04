import React from 'react';
import { topCat } from '@/app/data';

const Trends = () => {
  return (
    <div className='w-[80%] min-w-[300px] h-auto gap-5 m-5 flex justify-center'>
        <div className='flex overflow-x-auto gap-5 snap-proximity snap-x'>
            {topCat.map((Cat,index)=>
                <div key={index} className='min-w-[300px] mb-2 min-h-[80px] rounded-[10px] border-[1px] flex justify-between items-center snap-center'>
                    <div className='flex flex-row ml-2 items-center justify-center'>
                        <div className='p-[4px] rounded-[10px] bg-gray-100'>
                            <img className='w-[25px] h-[25px] m-[10px]' src={Cat.imgLink}/>
                        </div>
                            <div className='ml-4'>
                                <p className='text-[14px] font-bold text-gray-800 tracking-[1px]'>{Cat.name}</p>
                                <a href={Cat.showLink} className='text-[14px] font-semibold tracking-[0.5px] text-[#ff91a4]'>Show All</a>
                            </div>
                        </div>
                    <div className='h-[60%] mr-5'>
                        <p className=' text-[12px] text-silver'>({Cat.quantity})</p>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Trends