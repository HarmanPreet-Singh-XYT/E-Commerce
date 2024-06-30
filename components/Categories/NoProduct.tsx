import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const NoProduct = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-4xl text-primary-600 dark:text-primary-500">No Products</h1>
                <p className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-3xl dark:text-white">We're working hard to Add more products into catalog, you'll find products at other categories or Browse home page.</p>
                <Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Home Page</Link>
                <Image alt='truck with parcels' className='mx-auto' height={200} width={400} src='/deliveryboxes.png'/>
            </div>
        </div>
    </section>
  )
}

export default NoProduct