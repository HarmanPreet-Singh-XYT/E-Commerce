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
const App = () => {
  return (
    <main className='h-screen w-screen flex items-center flex-col overflow-x-hidden'>
        <Cart/>
        <Menubar/>
        <Navbar/>
        <Trends/>
        <Status/>
        <Details/>
        <Tabs/>
        <Footer/>
    </main>
  )
}

export default App