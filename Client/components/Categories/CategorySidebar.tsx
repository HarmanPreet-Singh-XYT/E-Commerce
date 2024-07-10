"use client"
import React from 'react';
import Loading from '../Loading';
interface categories{
    categoryid: number;
    name: string;
};
const CategorySidebar = ({categories,loading,selectedCategoryIndex, setselectedCategoryIndex,mobileMode}:{categories:categories[],loading:boolean,selectedCategoryIndex:number,setselectedCategoryIndex:React.Dispatch<React.SetStateAction<number>>,mobileMode:boolean}) => {
    return (
        <>
            <div className={`${!mobileMode ? 'hidden' : 'flex'} flex-col lg:flex ${!mobileMode ? 'ml-auto' : 'ml-0'} mb-5`}>
                <div className='border-[1px] rounded-xl h-auto w-[220px] xl:w-[220px] p-[15px]'>
                    <p className='tracking-[2px] font-semibold text-davysilver mb-4 relative'>CATEGORIES</p>
                    {loading && <div className='w-full h-[150px]'>{loading && <div className='absolute left-2 top-0 z-50'><Loading/></div>}</div> }
                        {!loading && categories.map((each,index)=> 
                            <div key={index}>
                                <div
                                
                                    className={`flex text-base mb-4 cursor-pointer`}
                                    >
                                    <div className='flex justify-between items-center w-[100%] text-[20px]'>
                                        <div className='flex justify-center items-center'>
                                            <button onClick={()=>setselectedCategoryIndex(each.categoryid)}
                                            disabled={loading} className={`text-[16px] font-medium ${each.categoryid===selectedCategoryIndex ? 'text-black' : 'text-silver'} tracking-[1px]`}>{each.name}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </>
    );
};

export default CategorySidebar;
