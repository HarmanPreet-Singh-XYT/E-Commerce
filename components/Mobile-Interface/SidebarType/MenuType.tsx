import React,{useState} from 'react'
import { navBtns } from '@/app/data'
import { useMenu } from '@/Helpers/MenuContext';

const MenuType = () => {
    const socialMedia = ['facebook','twitter','instagram','linkedin'];
    const { toggleSidebar } = useMenu();
    const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setCollapsedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
  return (
    <>
            <div className='flex w-[90%] items-center justify-between border-b-[1px] pb-4 -left-96'>
                <p className='text-salmon font-bold text-xl tracking-wide'>Menu</p>
                <button  onClick={toggleSidebar}><i className="fa-solid fa-xmark fa-xl"></i></button>
            </div>
            <div className='w-[90%]'>
                {navBtns.map((each,index)=> each.name != 'Categories' &&
                <div key={index}>
                    <div onClick={()=>handleToggle(index)} className='flex mt-3 border-b-[1px] pb-3 tracking-wider justify-between hover:cursor-pointer'>
                        <p className='text-gray-700'>{each.name}</p>
                        {each.isExtendable && <p className='text-silver font-bold'>{collapsedIndex === index ? '-' : '+'}</p>}
                    </div>
                    {each.isExtendable && <div
                        className={`transition-[max-height] duration-[400ms] ease-linear overflow-hidden ${
                            collapsedIndex === index ? 'max-h-[160px]' : 'max-h-0'
                        }`}>
                        {(
                            <div className='border-b-[1px] pb-2'>
                                {each.extendables.map((link, linkIndex) =>
                                    <a href={link.link} key={linkIndex} className='flex justify-between mt-1 items-center text-silver hover:text-black'>
                                        <p className='tracking-[1px]'>{link.title}</p>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>}
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