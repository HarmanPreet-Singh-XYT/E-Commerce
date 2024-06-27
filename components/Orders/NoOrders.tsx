import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const NoOrders = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">No Products</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Please Purchase a Product to see your order here</p>
                <Link href="/" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Home Page</Link>
                <Image alt='guy with checklist and parcels' height={200} width={400} src='https://cdn3d.iconscout.com/3d/premium/thumb/delivery-guy-delivered-parcel-2937681-2426380.png'/>
            </div>   
        </div>
    </section>
  )
}

export default NoOrders