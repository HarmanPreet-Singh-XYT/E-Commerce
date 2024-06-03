import Link from 'next/link'
import React from 'react'
import { navBtns } from '@/app/data'
import Account from './DropdownMenu/Account';
import { useMenu } from '@/Helpers/MenuContext';
const Navbar = () => {
    const socialMedia = ['facebook','twitter','instagram','linkedin'];
    const { toggleCart, toggleFav } = useMenu();
    return (
    <nav className='w-full h-auto flex flex-col items-center'>
        <div className='h-[50px] w-[100%] justify-evenly items-center border-b-[1px] hidden sm:flex'>
            <div className='flex gap-2'>
                {socialMedia.map((each,index)=>
                    <button key={index} className='text-[16px] text-silver bg-gray-200 w-[25px] rounded-md hover:bg-salmon hover:text-white'><i className={`fa-brands fa-${each}`}></i></button>
                )}
                
            </div>
            <div>
                <p className='text-[15px] text-silver'>FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
            </div>
            <div>
                <button className='text-[18px] mr-5 hidden sm:block'>Newsletter Email</button>
            </div>
        </div>
        <div className='w-[100%] h-auto flex flex-col justify-between items-center border-b-[1px]'>
            <div className='flex justify-evenly items-center w-[100%] flex-col sm:flex-row gap-2 sm:gap-0'>
                <div>
                    <Link className='m-2.5 text-[26px] font-bold' href={"#"}><span className='text-[36px]'>H</span>-Comm</Link>
                </div>
                <div className='border-[1.5px] rounded-[10px] h-[42px] w-[90%] sm:w-[600px] mb-5 sm:mb-0 flex justify-between items-center'>
                    <input placeholder='Enter your product name...' type='text' className='outline-0 ml-5 text-[20px] w-[90%] placeholder:text-base placeholder:text-silver'/>
                    <button className='text-[16px] mr-2'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className='gap-5 text-davysilver hidden sm:flex'>
                    {/* <button><i className="fa-regular fa-user fa-xl"></i></button> */}
                    <Account/>
                    <button onClick={toggleFav}><i className="fa-regular fa-heart fa-xl"></i></button>
                    <button onClick={toggleCart}><i className="fa-solid fa-bag-shopping fa-xl"></i></button>
                </div>
            </div>
        </div>
        <div className='h-[50px] w-[100%] mt-2 justify-center items-center hidden sm:flex'>
            <div className='flex'>
                {navBtns.map((btn,index)=><button key={index} className='m-6 text-[16px] text-gray-800 font-semibold tracking-wide'>{btn.name.toUpperCase()}</button>)}
            </div>
        </div>
    </nav>
  )
};

export default Navbar