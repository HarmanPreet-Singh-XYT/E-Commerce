import React from 'react'
interface Wishlist{
  wishlistItemID:number;
  productID:number;
  productImg:string;
  productAlt:string;
  productName:string;
  productPrice:number;
  productColor:string;
  addedAt:string;
}
const Wishlist = ({Component}:{Component:Wishlist[]}) => {
  return (
    <div className='w-full h-full py-4 px-4'>
      <h1 className='text-xl font-semibold'>My Wishlist</h1>
      <div>
        <div className='flex justify-end mb-5'>
          <button className='bg-primary-600 text-white px-4 py-2 rounded-xl'>Add all to Cart</button>
        </div>
        <div className='flex flex-col gap-4 py-2 px-2'>
         <div className="mt-8">
                <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {Component.map((product) => (
                        <li key={product.productID} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                            src={product.productImg}
                            alt={product.productAlt}
                            className="h-full w-full object-cover object-center"
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                            <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                <a href={`./product/${product.productID}`}>{product.productName}</a>
                                </h3>
                                <p className="ml-4">{product.productPrice}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.productColor}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                            <button className="font-medium text-indigo-600 hover:text-indigo-500">Add to Cart</button>

                            <div className="flex">
                                <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                Remove
                                </button>
                            </div>
                            </div>
                        </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist