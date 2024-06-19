"use client"
import Footer from '@/components/Footer'
import Menubar from '@/components/Mobile-Interface/Menubar'
import Sidebar from '@/components/Mobile-Interface/Sidebar'
import Navbar from '@/components/Navbar'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'
import Cart from '../ProductUi/Cart'
import Favourite from '../ProductUi/Favourite'
import { AppProvider } from '@/Helpers/AccountDialog'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import Session from '../Session'
interface ParentComponentProps {
  Component: React.ComponentType;
}
const Common: React.FC<ParentComponentProps> = ({Component}) => {
  return (
    <Provider store={store}>
      <div className='overflow-x-hidden w-screen h-screen flex flex-col items-center'>
        <MenuProvider>
          <AppProvider>
            <Session/>
            <Menubar/>
            <Cart/>
            <Favourite/>
            <Sidebar/>
            <Navbar/>
            <Component/>
            <Footer/>
          </AppProvider>
        </MenuProvider>
      </div>
    </Provider>
  )
}

export default Common