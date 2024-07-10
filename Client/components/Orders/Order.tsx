import React,{useEffect, useRef, useState} from 'react'
import { CheckIcon, ShoppingCartIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import DropdownMenu from './Dropdown';
import formatDate from '@/app/api/dateConvert';
import { ordersHandler } from '@/app/api/orders';
import Link from 'next/link';
import Loading from '../Loading';
import { useRouter } from 'next/navigation';
import NotLoggedin from './NotLoggedin';
import NoOrders from './NoOrders';
interface orderDataflow{
    orderid:number;
    totalamount:number;
    orderstatus:string;
    createdat:string;
    deliveredat:string;
    title:string;
    imglink:string;
    imgalt:string;
    description:string;
    discount:number;
    order_code:string;
    productid:string
}
const Order = () => {
    const router = useRouter();
    const [menu, setmenu] = useState<null | number>(null);
    const loggedIn = useRef(true);
    const found = useRef(false);
    const dataVar = useRef<orderDataflow[]>([])
    const data = dataVar.current;
    const [loading, setLoading] = useState(true);
    const toggleMenu = (index:number)=>{
        if(typeof(menu)==='number') setmenu(null);
        else setmenu(index);
    };
    async function orderData(){
        const temp_data = await ordersHandler();
        switch (temp_data.status) {
            case 200:
                if(temp_data.data.data != undefined){
                    dataVar.current = temp_data.data.data;
                    found.current = true;
                }
                setLoading(false);
                break;
            case 250:
                loggedIn.current = false;
                setLoading(false);
                break;
            default:
                setLoading(false);
                break;
        }
    }
    useEffect(() => {
      orderData();
    }, [])
    const Dropdown = [
        {
            title:'View',
            link:'/order-detail/',
        },
        {
            title:'Invoice',
            link:'/order-detail/',
        }
    ]
  return (
    <div className='flex flex-col gap-10'>
        <section className='border-t-[1px]'></section>
        <section className='w-[95%] mx-auto flex flex-col gap-2'>
            <p className='font-semibold text-3xl'>Order history</p>
            <p className='text-silver text-sm'>Check the status of recent orders, manage returns, and discover similar products.</p>
        </section>
        <section className='flex gap-8 flex-col mb-10 relative'>
            {(loggedIn.current && !loading && data.length===0) && <NoOrders/>}
            {(!loggedIn.current && !loading) && <NotLoggedin/>}
            {loading && <div className='h-[300px]'></div>}
            {loading && <div className='absolute left-0 right-0 z-50'><Loading/></div>}
            {data.map((order,index) => <section key={index} className='min-w-[90%] max-w-[90%] md:max-w-[720px] lg:min-w-[900px] mx-auto rounded-xl gap-5 border-[1px]'>
                <div className='px-5 py-5'>
                    <div className='flex gap-8 justify-between items-center  border-b-[1px] pb-4'>
                        <div className='flex gap-10 items-center'>
                            <div className='flex flex-col gap-1'>
                                <p className='font-medium text-sm'>Order number</p>
                                <p className='text-silver font-medium text-sm'>{order.order_code}{order.orderid}</p>
                            </div>
                            <div className='hidden md:flex-col gap-1 md:flex'>
                                <p className='font-medium text-sm'>Date placed</p>
                                <p className='text-silver font-medium text-sm'>{formatDate(order.createdat)}</p>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-medium text-sm'>Total amount</p>
                                <p className='font-medium text-sm'>${order.totalamount}</p>
                            </div>
                        </div>
                        <div onClick={()=>toggleMenu(index)} className='flex flex-col gap-1 md:hidden'>
                                <EllipsisVerticalIcon className='h-[25px] text-silver hover:text-black cursor-pointer'/>
                                <div className='relative'>
                                    {menu===index && <DropdownMenu options={Dropdown} orderid={order.orderid}/>}
                                </div>
                        </div>
                        <div className='gap-5 hidden md:flex'>
                            <button onClick={()=>router.push(`/order-detail/${order.orderid}`)} className='border-[1px] border-gray-300 py-2 px-3 rounded-lg bg-white text-davysilver font-medium text-sm transition-colors duration-150 hover:bg-btnpurple hover:text-white'>View Order</button>
                            <button className='border-[1px] border-gray-300 py-2 px-3 rounded-lg bg-white text-davysilver font-medium text-sm transition-colors duration-150 hover:bg-btnpurple hover:text-white'>View Invoice</button>
                        </div>
                    </div>
                    <div className='flex gap-8 py-5 px-2 border-b-[1px]'>
                        <div>
                            <Link href={`/product/${order.productid}`}><img className='rounded-lg max-h-[150px] min-w-[150px] cursor-pointer' alt={order.imgalt} src={order.imglink}/></Link>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <div className='flex justify-between flex-col gap-2 sm:gap-0 sm:flex-row'>
                                <Link href={`/product/${order.productid}`}><div className='font-medium text-sm cursor-pointer'>{order.title}</div></Link>
                                <div className='font-medium'>${order.discount}</div>
                            </div>
                            <div>
                                <p className='text-silver text-sm hidden sm:block'>{order.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between flex-col sm:flex-row items-end pt-2'>
                        {order.orderstatus==='Delivered' ? 
                            <div className='flex items-center gap-2 mx-auto sm:mx-0'>
                                <div className='rounded-full w-6 bg-green-400 px-1 py-1 text-white'>
                                    <CheckIcon/>
                                </div>
                                <p className='text-sm font-medium'>Delivered on {formatDate(order.deliveredat)}</p>
                            </div>
                        :
                            <div className='flex items-center gap-2 mx-auto sm:mx-0'>
                                <div className='rounded-full w-6 bg-yellow-400 px-1 py-1 text-white'>
                                    <ShoppingCartIcon/>
                                </div>
                                <p className='text-sm font-medium'>Coming on {formatDate(order.deliveredat)}</p>
                            </div>
                        }
                        <div className='mt-3 mb-3 h-[1px] bg-gray-200 w-full flex sm:hidden'></div>
                        <div className='w-full justify-evenly flex sm:w-auto'>
                            <Link href={`/product/${order.productid}`}><button className='sm:border-r-[1px] sm:px-4 text-sm font-medium text-btnpurple'>View product</button></Link>
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