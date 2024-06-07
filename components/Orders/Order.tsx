import React,{useState} from 'react'
import { orders } from '@/app/data'
import { CheckIcon, ShoppingCartIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './Dropdown';
const Order = () => {
    const [menu, setmenu] = useState<null | number>(null);
    const toggleMenu = (index:number)=>{
        if(typeof(menu)==='number') setmenu(null);
        else setmenu(index);
    };
    const Dropdown = [
        {
            title:'View',
            link:'',
        },
        {
            title:'Invoice',
            link:'',
        }
    ]
  return (
    <div className='flex flex-col gap-10'>
        <section className='border-t-[1px]'></section>
        <section className='w-[95%] mx-auto flex flex-col gap-2'>
            <p className='font-semibold text-3xl'>Order history</p>
            <p className='text-silver text-sm'>Check the status of recent orders, manage returns, and discover similar products.</p>
        </section>
        <section className='flex gap-8 flex-col mb-10'>
            {orders.map((order,index) => <section key={index} className='min-w-[90%] max-w-[90%] md:max-w-[720px] lg:min-w-[900px] mx-auto rounded-xl gap-5 border-[1px]'>
                <div className='px-5 py-5'>
                    <div className='flex gap-8 justify-between items-center  border-b-[1px] pb-4'>
                        <div className='flex gap-10 items-center'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-medium text-sm'>Order number</p>
                                <p className='text-silver font-medium text-sm'>{order.orderNumber}</p>
                            </div>
                            <div className='hidden md:flex-col gap-1 md:flex'>
                                <p className='font-medium text-sm'>Date placed</p>
                                <p className='text-silver font-medium text-sm'>{order.datePlaced}</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-medium text-sm'>Total amount</p>
                                <p className='font-medium text-sm'>${order.totalAmount}</p>
                            </div>
                        </div>
                        <div onClick={()=>toggleMenu(index)} className='flex flex-col gap-1 md:hidden'>
                                <EllipsisVerticalIcon className='h-[25px] text-silver hover:text-black cursor-pointer'/>
                                <div className='relative'>
                                    {menu===index && <DropdownMenu options={Dropdown}/>}
                                </div>
                        </div>
                        <div className='gap-5 hidden md:flex'>
                            <button className='border-[1px] border-gray-300 py-2 px-3 rounded-lg bg-white text-davysilver font-medium text-sm transition-colors duration-150 hover:bg-btnpurple hover:text-white'>View Order</button>
                            <button className='border-[1px] border-gray-300 py-2 px-3 rounded-lg bg-white text-davysilver font-medium text-sm transition-colors duration-150 hover:bg-btnpurple hover:text-white'>View Invoice</button>
                        </div>
                    </div>
                    <div className='flex gap-8 py-5 px-2 border-b-[1px]'>
                        <div>
                            <img className='rounded-lg max-h-[150px] min-w-[150px]' src={order.item.imgLink}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='flex justify-between flex-col gap-2 sm:gap-0 sm:flex-row'>
                                <div className='font-medium text-sm'>{order.item.name}</div>
                                <div className='font-medium'>${order.item.price}</div>
                            </div>
                            <div>
                                <p className='text-silver text-sm hidden sm:block'>{order.item.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between flex-col sm:flex-row items-end pt-2'>
                        {order.isDelivered ? 
                            <div className='flex items-center gap-2 mx-auto sm:mx-0'>
                                <div className='rounded-full w-6 bg-green-400 px-1 py-1 text-white'>
                                    <CheckIcon/>
                                </div>
                                <p className='text-sm font-medium'>Delivered on {order.item.deliveryDate}</p>
                            </div>
                        :
                            <div className='flex items-center gap-2 mx-auto sm:mx-0'>
                                <div className='rounded-full w-6 bg-yellow-400 px-1 py-1 text-white'>
                                    <ShoppingCartIcon/>
                                </div>
                                <p className='text-sm font-medium'>Coming on {order.item.deliveryDate}</p>
                            </div>
                        }
                        <div className='mt-3 mb-3 h-[1px] bg-gray-200 w-full flex sm:hidden'></div>
                        <div className='w-full justify-evenly flex sm:w-auto'>
                            <button className='sm:border-r-[1px] sm:px-4 text-sm font-medium text-btnpurple'>View product</button>
                            <div className='h-[20px] border-r-[1px] bg-gray-200 w-[1px] flex sm:hidden'></div>
                            <button className='px-4 text-sm font-medium text-btnpurple'>Buy again</button>
                        </div>
                    </div>
                </div>
            </section>)}
        </section>
    </div>
  )
}

export default Order