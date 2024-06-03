import React from 'react'
import { navBtns } from '@/app/data'
import { useMenu } from '@/Helpers/MenuContext';
const MenuType = () => {
    const socialMedia = ['facebook','twitter','instagram','linkedin'];
    const { toggleSidebar } = useMenu();
  return (
    <>
            <div className='flex w-[90%] items-center justify-between border-b-[1px] pb-4 -left-96'>
                <p className='text-salmon font-bold text-xl tracking-wide'>Menu</p>
                <button  onClick={toggleSidebar}><i className="fa-solid fa-xmark fa-xl"></i></button>
            </div>
            <div className='w-[90%]'>
                {navBtns.map((each,index)=> each.name != 'Categories' &&
                    <div className='mt-3 border-b-[1px] pb-3 tracking-wider' key={index}>
                        <a href='' className='text-gray-700'>{each.name}</a>
                    </div>
                )}
            </div>
            <div className='flex gap-2 mt-10'>
                {socialMedia.map((each,index)=>
                    <button key={index} className='text-[16px] text-silver bg-gray-200 w-[40px] h-[40px] rounded-lg hover:bg-salmon hover:text-white'>
                        <i className={`fa-brands fa-${each} fa-xl`}></i>
                    </button>
                )}
            </div>
    </>
  )
}

export default MenuType