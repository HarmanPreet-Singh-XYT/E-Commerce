import React from 'react'

const Deal = () => {
  return (
    <div className=' mt-10 sm:ml-4 ml-auto mr-auto max-w-[350px] sm:max-w-[1000px] flex flex-col justify-center'>
        <p className='border-b-[1px] leading-[50px] tracking-[1.5px] font-semibold text-[18px]'> Deal of The Day</p>
        <div className='p-[30px] border-[1px] mt-8 rounded-xl overflow-y-auto snap-x snap-proximity'>
            <div className='flex flex-col rounded-xl gap-5 h-auto items-center sm:pl-10 snap-center sm:flex-row'>
                <a href=""><img className='w-[100%] h-[100%] min-w-[200px] rounded-md' src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/products/shampoo.jpg"/></a>
                <div className='flex flex-col gap-4'>
                    <p>5 stars</p>
                    <a href="">
                        <p className='text-base font-bold w-full'>SHAMPOO, CONDITIONER & FACEWASH PACKS</p>
                    </a>
                    <p className='text-base tracking-normal text-silver'>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet consectetur Lorem ipsum dolor</p>
                    <div className='flex items-center'>
                        <p className='text-2xl font-bold text-salmon'>$150.00</p>
                        <p className='text-xl line-through ml-4 text-silver'>$200.00</p>
                    </div>
                    <button className='bg-salmon p-2 rounded-2xl w-[175px] h-[45px] text-white font-bold text-xl'>ADD TO CART</button>
                    <div className='flex justify-between'>
                        <p className='text-sm'>ALREADY SOLD: <span className='font-bold'>20</span></p>
                        <p className='text-sm'>AVAILABLE: <span className='font-bold'>40</span></p>
                    </div>
                    <div className='relative flex items-center justify-center mb-2'>
                        <div className='h-3 w-[100%] bg-gray-200 absolute rounded-2xl z-0'></div>
                        <div className='h-1 w-[98%] bg-salmon absolute rounded-xl z-10'></div>
                    </div>
                    <p className='text-sm font-semibold'>HURRY UP! OFFER ENDS IN:</p>
                    <div className='flex gap-5'>
                        <div className='flex flex-col bg-gray-200 w-16 h-16 rounded-2xl items-center justify-center'>
                            <p className='text-xl font-semibold'>360</p>
                            <p className='text-sm text-davysilver'>Days</p>
                        </div>
                        <div className='flex flex-col bg-gray-200 w-16 h-16 rounded-2xl items-center justify-center'>
                            <p className='text-xl font-semibold'>24</p>
                            <p className='text-sm text-davysilver'>Hours</p>
                        </div>
                        <div className='flex flex-col bg-gray-200 w-16 h-16 rounded-2xl items-center justify-center'>
                            <p className='text-xl font-semibold'>59</p>
                            <p className='text-sm text-davysilver'>Min</p>
                        </div>
                        <div className='flex flex-col bg-gray-200 w-16 h-16 rounded-2xl items-center justify-center'>
                            <p className='text-xl font-semibold'>00</p>
                            <p className='text-sm text-davysilver'>Sec</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deal