import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useMenu } from '@/Helpers/MenuContext'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useApp } from '@/Helpers/AccountDialog'
import { wishlistDeleteHandler } from '@/app/api/itemLists'
import { removeItemFromWishlist } from '@/features/UIUpdates/CartWishlist'
import Loading from '../Loading'
import { useState } from 'react'
export default function Favourite() {
  const defaultAccount = useAppSelector((state) => state.userState.defaultAccount)
  const [loading, setloading] = useState(false);
  const dispatch = useAppDispatch();
  const { menu,toggleFav } = useMenu();
  const { appState } = useApp();
  const isLogged = appState.loggedIn;
  const wishlist = useAppSelector((state) => state.cartWishlist.wishlist);
  async function removeItem(wishlistItemID:number,productID:number){
    setloading(true);
    isLogged && await wishlistDeleteHandler({wishlistItemID, userID:defaultAccount.userID})
    dispatch(removeItemFromWishlist(productID));
    setloading(false);
  }
  return (
    <Transition show={menu.fav}>
      <Dialog className="relative z-50" onClose={toggleFav}>
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-lg font-medium text-gray-900">Favourites</DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={toggleFav}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root relative">
                        {loading && <div className='absolute left-0 right-0 top-[100%] z-50'><Loading/></div>}
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {wishlist.map((product) => (
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
                                        <a href={`/product/${product.productID}`}>{product.productName}</a>
                                      </h3>
                                      <p className="ml-4">${product.productPrice}</p>
                                    </div>
                                    {/* <p className="mt-1 text-sm text-gray-500">{product.productColor}</p> */}
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">

                                    <div className="flex gap-5">
                                        {/* <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Add to Cart
                                      </button> */}
                                      <button
                                        onClick={()=>removeItem(product.wishlistItemID,product.productID)}
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

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      {/* <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
                      {/* <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Add All to Cart
                        </a>
                      </div> */}
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          {/* or{' '} */}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={toggleFav}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
