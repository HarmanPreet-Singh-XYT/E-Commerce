import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useMenu } from '@/Helpers/MenuContext';
import { useAppSelector,useAppDispatch } from '@/app/hooks';
import { removeItemFromCart, setCart } from '@/features/UIUpdates/CartWishlist';
import { cartDeleteHandler } from '@/app/api/itemLists';
import { useApp } from '@/Helpers/AccountDialog';
import { useState } from 'react';
import Loading from '../Loading';
import Link from 'next/link';
import { cartQuantityHandler } from '@/app/api/userUpdate';
export default function Cart() {
  const { appState } = useApp();
  const [loading, setloading] = useState(false);
  const isLogged = appState.loggedIn;
  const cartlist = useAppSelector((state) => state.cartWishlist.cart);
  const defaultAccount = useAppSelector((state) => state.userState.defaultAccount)
  const dispatch = useAppDispatch();
  const { menu,toggleCart } = useMenu();
  let total = cartlist.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.quantity * currentValue.productPrice;
  }, 0);
  async function removeItem(cartItemID:number,productID:number){
    setloading(true);
    isLogged && await cartDeleteHandler({userID:defaultAccount.userID,cartItemID});
    dispatch(removeItemFromCart(productID));
    setloading(false);
  }
  const changeValue = async (action:string,cartitemID:number,selectedQuantity:number,productID:number)=>{
    switch (action) {
      case 'increase':
        if(10 > selectedQuantity && 9 > selectedQuantity) {
          setloading(true);
          isLogged && await cartQuantityHandler(cartitemID,productID,defaultAccount.userID,'increment');
          dispatch(setCart((cartlist.map((each)=>each.cartItemID===cartitemID ? {...each,quantity:each.quantity+1} : each))));
          setloading(false);
        };
        break;
      case 'decrease':
        if(selectedQuantity > 1){
          setloading(true);
          isLogged && await cartQuantityHandler(cartitemID,productID,defaultAccount.userID,'decrement');
          dispatch(setCart((cartlist.map((each)=>each.cartItemID===cartitemID ? {...each,quantity:each.quantity-1} : each))));
          setloading(false);
        };
        break;
    }
  }
  return (
    <Transition show={menu.cart}>
      <Dialog className="relative z-50" onClose={toggleCart}>
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
                        <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={toggleCart}
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
                            {cartlist.map((product) => (
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
                                    <p className="mt-1 text-sm text-gray-500">{product.productColor}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className='flex gap-10 items-center'>
                                  <p>Qty</p>
                                  <div className='flex items-center justify-center rounded-xl bg-gray-100'>
                                      <button onClick={()=>changeValue('decrease',product.cartItemID,product.quantity,product.productID)} className='w-[50px] text-4xl bg-gray-100 rounded-l-lg'>-</button>
                                      <p className='bg-gray-100 w-[20px]'>{product.quantity}</p>
                                      <button onClick={()=>changeValue('increase',product.cartItemID,product.quantity,product.productID)} className='w-[40px] text-4xl bg-gray-100 rounded-r-lg'>+</button>
                                  </div>
                                
                            </div>

                                    <div className="flex">
                                      <button
                                      onClick={()=>removeItem(product.cartItemID,product.productID)}
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
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        {isLogged ? <Link
                        href={`/cart-checkout`}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </Link>:
                        <Link
                        href={'/sign-in'}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Login to Checkout
                        </Link>
                        }
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={toggleCart}
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
