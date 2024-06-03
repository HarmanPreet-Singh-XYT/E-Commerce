import React from 'react'
import Navbar from '@/components/Navbar'
import Trends from '@/components/Trends'
import Status from '@/components/Status'
import Footer from '@/components/Footer'
import Details from '@/components/Details'
import Tabs from '@/components/Tabs'
import Menubar from '@/components/Mobile-Interface/Menubar'
import Sidebar from '@/components/Mobile-Interface/Sidebar'
import Cart from '@/components/ProductUi/Cart'
import Favourite from '@/components/ProductUi/Favourite'
import { MenuProvider } from '@/Helpers/MenuContext'
const App = () => {
  return (
    <MenuProvider>
      <main className='h-screen w-screen flex items-center flex-col overflow-x-hidden'>
          <Cart/>
          <Favourite/>
          <Menubar/>
          <Navbar/>
          <Trends/>
          <Status/>
          <Details/>
          <Tabs/>
          <Footer/>
      </main>
    </MenuProvider>
  )
}

export default App