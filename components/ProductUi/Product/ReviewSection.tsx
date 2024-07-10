import React, { useEffect, useRef, useState } from 'react'
import Stars from '../Stars';
import formatDate from '@/app/api/dateConvert';
import { useAppSelector } from '@/app/hooks';
import Link from 'next/link';
interface Review {
    reviewid: number;
    userid: number;
    rating: number;
    title:string;
    comment: string;
    username: string;
    createdat:string;
    productstars:number;
}
interface star{
    one:number;
    two:number;
    three:number;
    four:number;
    five:number;
}
const ReviewSection = ({data,reviewCount,setloading,setdialogType,setselectedReview,setselectedRating,allReview,productID}:{productID:number,data:Review[],reviewCount:number,setdialogType:React.Dispatch<React.SetStateAction<string | null>>,setloading:React.Dispatch<React.SetStateAction<boolean>>,setselectedReview:React.Dispatch<React.SetStateAction<null|Review>>,setselectedRating:React.Dispatch<React.SetStateAction<number>>,allReview:boolean}) => {
    const [one, setone] = useState(0);
    const [two, settwo] = useState(0);
    const [three, setthree] = useState(0);
    const [four, setfour] = useState(0);
    const [five, setfive] = useState(0);
    
    const defaultAccount = useAppSelector((state) => state.userState.defaultAccount)
    let stars:any = {one:0,two:0,three:0,four:0,five:0};
    function addStars (num:number){
        if(num < 2){
            stars.one++;
        }
        else if(num < 3){
            stars.two++;
        }
        else if(num < 4){
            stars.three++;
        }
        else if(num < 5){
            stars.four++;
        }else{
            stars.five++;
        }
    }
    function varAssign(variable:string,number:number){
        switch (variable) {
            case 'one':
                setone(number);
                break;
            case 'two':
                settwo(number);
                break;
            case 'three':
                setthree(number);
                break;
            case 'four':
                setfour(number);
                break;
            case 'five':
                setfive(number);
                break;
        }
    }
    async function Calculate(){
        if(reviewCount > 0){
            await data.map((each)=>
                addStars(each.rating)
            );
            const sumTotal = Object.keys(stars).reduce((previous, key)=>{
                return previous + stars[key];
            }, 0);
            Object.keys(stars).forEach(function(key){ varAssign(key,Math.round(stars[key] * 100/sumTotal)); });
        } 
    }
    useEffect(() => {
      Calculate();

    }, [data]);
    
  return (
    <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
            <div className="">
                <h2 className="font-manrope font-bold text-xl sm:text-2xl leading-10 text-black mb-8 text-center">
                    Customer reviews &
                    rating</h2>
                <div className="grid grid-cols-12 mb-11">
                    
                    <div className="col-span-12 xl:col-span-4 flex items-center">
                        <div className="box flex flex-col gap-y-4 w-full max-xl:max-w-3xl mx-auto">
                            <div className="flex items-center w-full">
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">5</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="h-2 w-full sm:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                <span style={{ height: '100%', width: `${five}%`, borderRadius: '30px', backgroundColor: 'rgb(99 102 241 / var(--tw-bg-opacity))', display: 'flex' }}></span>
                                </p>
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">30</p>
                            </div>
                            <div className="flex items-center w-full">
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">4</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                <span style={{ height: '100%', width: `${four}%`, borderRadius: '30px', backgroundColor: 'rgb(99 102 241 / var(--tw-bg-opacity))', display: 'flex' }}></span>
                                </p>
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">40</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">3</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                <span style={{ height: '100%', width: `${three}%`, borderRadius: '30px', backgroundColor: 'rgb(99 102 241 / var(--tw-bg-opacity))', display: 'flex' }}></span>
                                </p>
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">20</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">2</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span style={{ height: '100%', width: `${two}%`, borderRadius: '30px', backgroundColor: 'rgb(99 102 241 / var(--tw-bg-opacity))', display: 'flex' }}></span>
                                </p>
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">16</p>
                            </div>
                            <div className="flex items-center">
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">1</p>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_12042_8589)">
                                        <path
                                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                                            fill="#FBBF24" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_12042_8589">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="h-2 w-full xl:min-w-[278px] rounded-[30px] bg-gray-200 ml-5 mr-3">
                                    <span style={{ height: '100%', width: `${one}%`, borderRadius: '30px', backgroundColor: 'rgb(99 102 241 / var(--tw-bg-opacity))', display: 'flex' }}></span>
                                </p>
                                <p className="font-medium text-lg py-[1px] text-black mr-[2px]">8</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 max-xl:mt-8 xl:col-span-8 xl:pl-8 w-full min-h-[230px]">
                        <div
                            className="grid grid-cols-12 h-full px-8 max-lg:py-8 rounded-3xl bg-gray-100 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div className="col-span-12 md:col-span-8 flex items-center">
                                <div className="flex flex-col sm:flex-row items-center max-lg:justify-center w-full h-full">
                                    <div
                                        className="sm:pr-3 sm:border-r border-gray-200 flex items-center justify-center flex-col">
                                        <h2 className="font-manrope font-bold text-4xl text-black text-center mb-4">{data.length > 0 ? data[0].productstars : 0}</h2>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Stars size={40} stars={data.length > 0 ? data[0].productstars : 0}/>
                                        </div>
                                        <p className="font-normal leading-8 text-gray-400">{reviewCount} Ratings</p>
                                    </div>

                                    <div
                                        className="sm:pl-3 sm:border-l border-gray-200 flex items-center justify-center flex-col">
                                        <h2 className="font-manrope font-bold text-4xl text-black text-center mb-4">{data.length > 0 ? data[0].rating : 0}</h2>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Stars size={40} stars={data.length > 0 ? data[0].rating : 0}/>
                                        </div>
                                        <p className="font-normal leading-8 text-gray-400">Last Review</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-4 max-lg:mt-8 md:pl-8">
                                <div className="flex items-center flex-col justify-center w-full h-full ">
                                    <button
                                    onClick={()=>setdialogType('create')}
                                        className="rounded-full px-4 py-4 bg-indigo-600 font-semibold text-md text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">Write
                                        A Review</button>
                                    {!allReview && <Link href={`/all-reviews/${productID}`}><button
                                        className="rounded-full px-4 py-4 bg-white font-semibold text-md text-indigo-600 whitespace-nowrap w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">See
                                        All Reviews</button></Link>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-8 border-b border-gray-200 max-xl:max-w-3xl max-xl:mx-auto">
                    <h4 className="font-manrope font-semibold text-2xl leading-10 text-black mb-6">Recent
                        Reviews</h4>
                    <div className='flex flex-col gap-5'>
                        {data.map((each,index)=>
                            <div className='border-[1px] px-4 rounded-xl py-4' key={index}>
                            <div className="flex sm:items-center flex-col sm:flex-row justify-between  mb-4">
                                <div className="flex gap-3 flex-col">
                                    <Stars stars={each.rating} size={40}/>
                                    
                                    <p className='text-xl font-medium'>{each.title}</p>
                                </div>
                                <div className="flex items-end gap-3 flex-col">
                                    <p className="font-medium text-base leading-7 text-gray-400">{formatDate(each.createdat)}</p>
                                    <h6 className="font-semibold text-lg leading-8 text-black">@{each.username}</h6>
                                    {defaultAccount.userID===each.userid && <div className='flex gap-5'><button
                                        onClick={()=>{setselectedRating(each.rating);setselectedReview(each);setdialogType('edit')}}
                                        className="rounded-full px-4 py-2 bg-indigo-600 font-semibold text-md text-white whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                                        Edit Review
                                    </button>
                                    <button
                                        onClick={()=>{setselectedReview(each);setdialogType('delete')}}
                                        className="rounded-full px-4 py-2 bg-white border-[1px] font-semibold text-md text-black whitespace-nowrap mb-6 w-full text-center shadow-sm shadow-transparent transition-all duration-500 hover:text-white hover:bg-red-400 hover:shadow-red-400">
                                        Delete Review
                                    </button>
                                    </div>
                                    }
                                </div>
                            </div>

                            <p className="font-normal text-lg leading-8 text-gray-500 ">
                                {each.comment}
                            </p>
                            </div>
                        )}
                        
                    </div>
                    

                </div>
                <div
                    className="flex flex-col sm:flex-row items-center justify-between pt-8  max-xl:max-w-3xl max-xl:mx-auto">
                    {/* <p className="font-normal text-lg py-[1px] text-black">{reviewCount} reviews</p> */}
                    {/* <form>
                        <div className="flex">

                            <div className="relative ">
                                <div className=" absolute -left-0 px-2 top-0 py-2">
                                    <p className="font-normal text-lg leading-8 text-gray-500">Sort by:</p>

                                </div>
                                <input type="text"
                                    className="block w-60 h-11 pr-4 pl-20 py-2.5 text-lg leading-8 font-medium rounded-full cursor-pointer shadow-xs text-black bg-transparent placeholder-black focus:outline-gray-200 "
                                    placeholder="Most Relevant"/>
                                <div id="dropdown-button" data-target="dropdown"
                                    className="dropdown-toggle flex-shrink-0 cursor-pointer z-10 inline-flex items-center py-2.5 px-4 text-base font-medium text-center text-gray-900 bg-transparent absolute right-0 top-2 pl-2 "
                                    ><svg className="ml-2" width="12" height="7" viewBox="0 0 12 7" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                                            stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div id="dropdown"
                                    className="absolute top-9 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdown-button">
                                        <li>
                                            <a href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Most Relevant</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">last week</a>
                                        </li>
                                        <li>
                                            <a href="#"
                                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">oldest</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReviewSection