import React,{useState} from 'react'
import { allCategories, bestSell, leftStatus } from '@/app/data'
import { useMenu } from '@/Helpers/MenuContext';
import Stars from '@/components/ProductUi/Stars';
import Link from 'next/link';
const CategoryType = () => {
    const { toggleSidebar } = useMenu();
    const [collapsedIndex, setCollapsedIndex] = useState<number | null>(null);
    const handleToggle = (index: number) => {
        setCollapsedIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <>
                <div className='flex w-[90%] items-center mt-5 justify-between'>
                    <p className='text-salmon font-bold text-lg tracking-[2px]'>CATEGORY</p>
                    <button  onClick={toggleSidebar}><i className="fa-solid fa-xmark fa-xl"></i></button>
                </div>
                <div className='w-[90%]'>
                    {leftStatus.map((each,index)=>
                    <div key={index}>
                    <div onClick={()=>handleToggle(index)} className='flex items-center justify-between mr-5 cursor-pointer'>
                        <div className='mt-2 pb-2 tracking-wider flex items-center gap-2'>
                            <img width={20} src={each.imgLink}/>
                            <p className='text-gray-500 tracking-[1px]'>{each.title}</p>
                        </div>
                        <div>
                            <p className='text-lg text-gray-500'>+</p>
                        </div>
                    </div>
                    <div
                    className={`transition-[max-height] duration-[400ms] ease-linear overflow-hidden ${
                        collapsedIndex === index ? 'max-h-[160px]' : 'max-h-0'
                        }`}
                    >
                        {(
                            <div className='border-b-[1px] pb-2'>
                                {each.links.map((link, linkIndex) =>
                                    <a href={link.link} key={linkIndex} className='flex justify-between mt-1 items-center text-silver hover:text-black'>
                                        <p className='tracking-[1px]'>{link.title}</p>
                                        {/* <p className='text-[17px]'>{link.quantity}</p> */}
                                        <p>{'>'}</p>
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                    </div>
                    )}

                </div>
                <div className='h-[500px] border-t-[1px] w-[80%] pt-2'>
                {/* <p className='font-bold tracking-[2px] text-md'>BEST SELLERS</p>
                <div className='flex flex-col'>
                    {bestSell.map((each,index)=>
                        <div key={index} className='flex mt-5'>
                            <Link href={`/best-sales/${each.productID}`}><img className='w-[75px] h-[75px] rounded-md' src={each.imgLink}/></Link>
                            <div className='ml-5'>
                                <Link href={`/best-sales/${each.productID}`} className='tracking-[1px]'>{each.title}</Link>
                                <div className='flex items-center gap-2'>
                                        <Stars stars={each.stars}/>
                                        {each.ratingCount > 0 && <p className='text-sm text-silver'>{each.ratingCount}</p>}
                                </div>
                                <div className='flex items-center'>
                                    <p className='text-sm line-through'>${each.basePrice}</p>
                                    <p className='text-lg font-bold ml-4'>${each.discountPrice}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div> */}

                    <p className='text-salmon font-bold text-lg tracking-[2px]'>Categories</p>
                    {allCategories.map((each,index)=>
                    <div key={index}>
                        <div className='flex mt-3 border-b-[1px] pb-3 tracking-wider justify-between hover:cursor-pointer'>
                            <Link href={each.link} className='flex justify-between mt-1 items-center text-silver hover:text-black'>
                                <p className='tracking-[1px]'>{each.name}</p>
                            </Link>
                        </div>
                    </div>
                    )}
                </div>
        </>
    )
}

export default CategoryType