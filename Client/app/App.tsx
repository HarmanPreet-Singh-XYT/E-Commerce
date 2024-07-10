"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Trends from '@/components/Trends'
import Status from '@/components/Status'
import Footer from '@/components/Footer'
import Details from '@/components/Details'
import Tabs from '@/components/Tabs'
import Menubar from '@/components/Mobile-Interface/Menubar'
import { Provider } from 'react-redux'
import Cart from '@/components/ProductUi/Cart'
import Favourite from '@/components/ProductUi/Favourite'
import { MenuProvider } from '@/Helpers/MenuContext'
import Banner from '@/components/Banner'
import { AppProvider } from '@/Helpers/AccountDialog'
import { store } from './store'
import Session from '@/components/Session'
const App = () => {

  return (
    <Provider store={store}>
      <MenuProvider>
        <AppProvider>
          <Session/>
          <main className='h-screen w-screen flex items-center flex-col overflow-x-hidden'>
              <Cart/>
              <Favourite/>
              <Menubar/>
              <Navbar/>
              <Banner/>
              <Trends/>
              <Status/>
              <Details/>
              <Tabs/>
              <Footer/>
          </main>
        </AppProvider>
      </MenuProvider>
    </Provider>
  )
}

export default App