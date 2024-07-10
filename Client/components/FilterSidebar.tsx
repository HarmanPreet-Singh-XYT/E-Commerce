import React from 'react'
import ReactStars from 'react-stars'
const FilterSidebar = ({dataChecked,filterSubmit,toggleClear,mobileMode}:{dataChecked:boolean,filterSubmit:(e:any)=>void,toggleClear:()=>void,mobileMode:boolean}) => {
  return (
    // <form action="#" method="get" id="drawer-example"
    //     className="fixed top-0 left-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
    //      aria-labelledby="drawer-label">
    //     <h5 id="drawer-label"
    //         className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
    //         Apply filters
    //     </h5>
    //     <button type="button" data-drawer-dismiss="drawer-example" aria-controls="drawer-example"
    //         className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
    //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd"
    //                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                 clip-rule="evenodd"></path>
    //         </svg>
    //         <span className="sr-only">Close menu</span>
    //     </button>
        <div className={`${!mobileMode ? 'hidden' : 'flex'} lg:flex-col lg:flex`}>
        <form onSubmit={filterSubmit} className="flex flex-col justify-between flex-1">
            <div className="space-y-6">
                {/* <div className="space-y-2">
                    <h6 className="text-base font-medium text-black dark:text-white">
                        Categories
                    </h6>
                    {
                        availableCategories.map((each,index)=>
                            <div key={index} className="flex items-center mb-4">
                                <input id={each.title} type="checkbox" 
                                    className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    {each.title}
                                </label>
                            </div>
                        )
                    }
                    
                    <a href="#"
                        className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline">
                        View all
                    </a>
                </div> */}

                <div className="space-y-2">
                    <h6 className="text-base font-medium text-black dark:text-white">
                        Prices
                    </h6>
                    <div className="flex items-center justify-between col-span-2 space-x-3">
                        <div className="w-full">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                From
                            </label>

                            <input type="number" id="pricefrom" name='pricefrom' defaultValue={0} min="0" max="10000"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="minimum price" required/>
                        </div>

                        <div className="w-full">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                To
                            </label>

                            <input type="number" id="priceto" name='priceto' defaultValue={10000} min="1" max="10000"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="max price" required/>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <h6 className="text-base font-medium text-black dark:text-white">
                        Minimum Rating
                    </h6>

                    <div className="flex items-center">
                        <input id="five-stars" type="radio"  name="rating" value={5} defaultChecked
                            className="w-4 h-4 bg-gray-100 accent-primary-500 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="flex items-center ml-2">
                        <ReactStars
                        count={5}
                        size={20}
                        value={5}
                        color2={'#ffa500'}
                        edit={false}
                        className='flex gap-1' />
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input id="four-stars" type="radio"  name="rating" value={4}
                            className="w-4 h-4 bg-gray-100 accent-primary-500 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="flex items-center ml-2">
                            <ReactStars
                            count={5}
                            size={20}
                            value={4}
                            color2={'#ffa500'}
                            edit={false}
                            className='flex gap-1' />
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input id="three-stars" type="radio"  name="rating" value={3}
                            className="w-4 h-4 bg-gray-100 accent-primary-500 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="flex items-center ml-2">
                            <ReactStars
                            count={5}
                            size={20}
                            value={3}
                            color2={'#ffa500'}
                            edit={false}
                            className='flex gap-1' />
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input id="two-stars" type="radio"  name="rating"  value={2}
                            className="w-4 h-4 bg-gray-100 accent-primary-500 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="flex items-center ml-2">
                            <ReactStars
                            count={5}
                            size={20}
                            value={2}
                            color2={'#ffa500'}
                            edit={false}
                            className='flex gap-1' />
                        </label>
                    </div>

                    <div className="flex items-center">
                        <input id="one-star" type="radio"  name="rating"  value={1}
                            className="w-4 h-4 bg-gray-100 accent-primary-500 border-gray-300 text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label className="flex items-center ml-2">
                            <ReactStars
                            count={5}
                            size={20}
                            value={1}
                            color2={'#ffa500'}
                            edit={false}
                            className='flex gap-1' />
                        </label>
                    </div>
                </div>

            </div>
            <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-6 space-x-4 md:px-4 ">
                <button type="submit"
                disabled={!dataChecked}
                    className="w-full px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800">
                    Apply filters
                </button>
                <button type="button"
                onClick={toggleClear}
                disabled={!dataChecked}
                    className="w-full px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Clear all
                </button>
            </div>
        </form>
    </div>

  )
}

export default FilterSidebar