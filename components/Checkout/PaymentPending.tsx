import React from 'react';
import { useRouter,useParams } from 'next/navigation';

const PaymentPending = () => {
  const router = useRouter();
  const params = useParams<{orderID:string|string[]}>();
  return (
    <div className='flex flex-col items-center w-screen'>
      <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Product
          </span>
        </li>

        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
          <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Checkout
          </span>
        </li>

        <li className="flex shrink-0 items-center text-primary-700">
          <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          Order summary
        </li>
      </ol>
      <div className="bg-white flex items-center justify-center h-screen">
        <div className="bg-gray-50 border-2 flex gap-5 items-center flex-col text-gray-800 p-6 rounded-lg shadow-lg max-w-[90%] w-full text-center">
          <div className="text-2xl mb-4 text-white bg-yellow-400 rounded-full py-5 px-5 w-[90px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-1.5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Pending</h2>
          <p className="mb-6">
            Order ID <span className="font-bold">#{params.orderID}</span> payment is pending confirmation.
          </p>
          <p className="mb-6">
          Please wait while we confirm your payment.
          </p>
          <div className="flex justify-center space-x-4 gap-10">
            <button onClick={() => router.push('/orders')} className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-medium py-4 px-6 rounded-xl">
              View All Orders
            </button>
            <button onClick={() => router.push('/')} className="bg-gray-600 hover:bg-gray-800 text-sm text-white font-medium py-4 px-6 rounded-xl">
              Return to Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPending;
