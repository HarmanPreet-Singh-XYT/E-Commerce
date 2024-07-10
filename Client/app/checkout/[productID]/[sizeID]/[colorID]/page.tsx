'use client'
import Checkout from '@/components/Checkout/Checkout'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'
import { AppProvider } from '@/Helpers/AccountDialog'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
const page = () => {
    return (
        <Provider store={store}>
                <MenuProvider>
                    <AppProvider>
                        <Checkout/>
                    </AppProvider>
                </MenuProvider>
        </Provider>
    )
}

export default page