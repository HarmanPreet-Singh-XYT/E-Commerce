"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProductPage from '@/components/ProductUi/ProductPage'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <MenuProvider>
          <Navbar/>
          <ProductPage/>
          <Footer/>
      </MenuProvider>
    </div>
  )
}

export default page