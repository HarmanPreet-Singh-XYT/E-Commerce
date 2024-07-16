import formatDate from '@/app/api/dateConvert';
import { orderDetailHandler } from '@/app/api/orders';
import React, { useLayoutEffect, useRef, useState } from 'react'
import { useParams } from 'next/navigation'
import Loading from '../Loading';
import Link from 'next/link';
import OrderNotFound from './OrderNotFound';
import NotLoggedin from './NotLoggedin';
// Interface for address
interface Address {
  username: string;
  contactnumber: string;
  addressline1: string;
  addressline2: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
}

// Main interface for the order
interface Order {
  orderid: number;
  createdat: string;
  deliveredat: string;
  orderstatus: string;
  paymentstatus: string;
  paymentmethod: string;
  username: string;
  email: string;
  mobile_number: string;
  title: string;
  discount: string;
  price:string;
  shippingcost: string;
  quantity: number;
  imglink: string;
  imgalt: string;
  billingaddress: Address;
  addressid: number;
  colorid: number | null;
  sizeid: number | null;
  productid: number;
  order_code: string;
  totalamount: string;
  shippingaddress: Address;
  colorname: string | null;
  sizename: string | null;
}
const emptyOrder: Order = {
  orderid: 0,
  createdat: "",
  deliveredat: "",
  orderstatus: "",
  paymentstatus: "",
  paymentmethod: "",
  username: "",
  email: "",
  mobile_number: "",
  title: "",
  discount: "0.00",
  price:"0.00",
  shippingcost: "0.00",
  quantity: 0,
  imglink: "",
  imgalt: "",
  billingaddress: {
      username: "",
      contactnumber: "",
      addressline1: "",
      addressline2: "",
      city: "",
      state: "",
      country: "",
      postalcode: ""
  },
  addressid: 0,
  colorid: null,
  sizeid: null,
  productid: 0,
  order_code: "",
  totalamount: "0.00",
  shippingaddress: {
      username: "",
      contactnumber: "",
      addressline1: "",
      addressline2: "",
      city: "",
      state: "",
      country: "",
      postalcode: ""
  },
  colorname: null,
  sizename: null
};

const OrderDetail = () => {
    const dataVar = useRef<Order>(emptyOrder);
    const data = dataVar.current
    const [loading, setloading] = useState(true);
    const found = useRef<boolean>(false)
    const dataChecked = useRef(false);
    const loggedIn = useRef(true);
    const paymentCharge = useRef(0);
    const shipping = parseFloat(data.shippingcost);
    const taxes = parseFloat(data.price) * 0.18 * data.quantity;
    const subTotal = parseFloat(data.price) * data.quantity;
    const subTotalWithoutTax = (parseFloat(data.price) * 0.82) * data.quantity; // 100% - 18% tax
    const discount = (parseFloat(data.price) - parseFloat(data.discount)) * data.quantity;
    const totalAmount = subTotalWithoutTax - discount + shipping + taxes + paymentCharge.current; // Assuming paymentCharge is 0 for simplicity
    const formattedSubTotal = subTotalWithoutTax.toFixed(2);
    const formattedShipping = shipping.toFixed(2);
    const formattedTaxes = taxes.toFixed(2);
    const formattedDiscount = discount.toFixed(2);
    const formattedTotalAmount = totalAmount.toFixed(2);
    const params = useParams<{ orderid: string }>()
    async function fetchData(){
      const response = await orderDetailHandler(params.orderid);
      switch (response.status) {
        case 200:
          if(response.data.data != undefined) {
            dataVar.current = response.data.data
            found.current = true;
            dataChecked.current = true;
            if(response.data.data.paymentmethod==='Payment on Delivery') paymentCharge.current=15;
            setloading(false);
          };
          break;
        case 404:
          dataChecked.current = true;
          setloading(false);
          break;
        case 500:
          loggedIn.current = false;
          setloading(false);
          break;
      }
    }
    useLayoutEffect(() => {
      fetchData();
    }, [])
    return (
      <div>
      {loading && <div className='w-full h-[500px]'>{loading && <div className='absolute left-0 right-0 top-[30%] z-50'><Loading/></div>}</div> }
      {(!loggedIn.current) && <NotLoggedin/>}
      {(dataChecked.current && !found.current && loggedIn.current) && <OrderNotFound/>}
      {(dataChecked.current && found.current && loggedIn.current) && <div className="2xl:w-4/6 mx-auto p-4 bg-white rounded-lg mt-10 mb-10">
        <h2 className="text-4xl font-medium mb-12">Your Order Details</h2>
        <div className="text-lg font-medium mb-4">Order <span className='font-semibold'>#{data.order_code}{data.orderid}</span></div>
        <div className="text-gray-700 mb-8 text-lg">Thank you for shipping with us!</div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="border p-8 rounded-xl gap-6 flex flex-col">
            <h3 className="font-semibold text-xl mb-2">Order Info</h3>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Order Date</p>
                <p className='font-medium'>{formatDate(data.createdat)}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Delivery Date</p>
                <p className='font-medium'>{formatDate(data.deliveredat)}</p>
              </div>
            </div>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Status</p>
                <p className='font-medium'>{data.orderstatus}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Payment Status</p>
                <p className='font-medium'>{data.paymentstatus}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
            <p className='text-silver'>Payment Method</p>
            <p className='font-medium'>{data.paymentmethod}</p>
            </div>
          </div>
          <div className="border p-8 rounded-xl gap-6 flex flex-col">
            <h3 className="font-semibold text-xl mb-2">Customer</h3>
            <div className='grid grid-cols-2'>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Name :</p>
                <p className='font-medium'>{data.username}</p>
              </div>
            </div>
            <div className='flex gap-8'>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Email</p>
                <p className='font-medium text-sm'>{data.email}</p>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Phone Number</p>
                <p className='font-medium'>+91 {data.mobile_number}</p>
              </div>
            </div>
          </div>
          <div className="border p-8 rounded-xl gap-6 flex flex-col">
            <h3 className="font-semibold text-xl mb-2">Address</h3>
            <div>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Shipping Address</p>
                <p className='font-medium'>{data.shippingaddress.addressline1}, {data.shippingaddress.addressline2} {data.shippingaddress.city}, {data.shippingaddress.state} {data.shippingaddress.postalcode} {data.shippingaddress.country}</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col gap-2'>
                <p className='text-silver'>Billing Address</p>
                <p className='font-medium'>{data.billingaddress.addressline1}, {data.billingaddress.addressline2} {data.billingaddress.city}, {data.billingaddress.state} {data.billingaddress.postalcode} {data.billingaddress.country}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 mb-8 flex flex-col gap-4">
          <div className="flex border-[1px] min-h-[150px] rounded-xl px-6 py-6 items-center mb-4">
            <Link href={`/product/${data.productid}`}><img src={data.imglink} alt={data.imgalt} width={100} height={100} className="mr-10 bg-gray-50 rounded-xl"/></Link>
            <div className='flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between w-full items-center'>
              <div className={`flex flex-col ${(data.sizename != null || data.colorname != null) ? 'gap-1' : 'gap-5'}`}>
                <Link href={`/product/${data.productid}`}><h4 className="font-medium text-xl">{data.title}</h4></Link>
                {data.sizename != null && <p className='text-sm font-medium'>Size: <span className='font-semibold'>{data.sizename}</span></p>}
                {data.colorname != null && <p className='text-sm font-medium'>Color: <span className='font-semibold'>{data.colorname}</span></p>}
                <p className='text-lg text-silver'>Quantity: <span className='text-black font-semibold'>{data.quantity}</span></p>
              </div>
              <p className='font-medium text-3xl'>${data.discount}</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col border-[1px] rounded-xl px-6 py-6 gap-5">
          <div className='flex justify-between'>
            <p className='text-lg text-silver'>Subtotal</p>
            <p className='text-xl font-semibold'>${formattedSubTotal}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-lg text-silver'>Shipping Charge</p>
            <p className='text-xl font-semibold'>${formattedShipping}</p>
          </div>
          {dataVar.current.paymentmethod==='Payment on Delivery' &&
          <div className='flex justify-between'>
            <p className='text-lg text-silver'>Payment Processing Charge</p>
            <p className='text-xl font-semibold'>${paymentCharge.current}</p>
          </div>
          }
          <div className='flex justify-between'>
            <p className='text-lg text-silver'>Taxes</p>
            <p className='text-xl font-semibold'>${formattedTaxes}</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-lg text-silver'>Discount</p>
            <p className='text-xl font-semibold'>${formattedDiscount}</p>
          </div>
          <div className='w-full h-[1px] bg-gray-100'></div>
          <div className='flex justify-between'>
            <p className='text-2xl font-medium'>Total</p>
            <p className='font-semibold text-2xl'>${formattedTotalAmount}</p>
          </div>
        </div>
      </div>}
      </div>
  )
}

export default OrderDetail