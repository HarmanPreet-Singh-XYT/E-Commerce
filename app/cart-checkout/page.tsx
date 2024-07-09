'use client'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'
import { AppProvider } from '@/Helpers/AccountDialog'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import CartCheckout from '@/components/Checkout/CartCheckout'
const page = () => {
    return (
        <Provider store={store}>
                <MenuProvider>
                    <AppProvider>
                        <CartCheckout/>
                    </AppProvider>
                </MenuProvider>
        </Provider>
    )
}

export default page