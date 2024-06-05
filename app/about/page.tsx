"use client"
import AboutUs from '@/components/About/AboutUs'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen overflow-x-hidden'>
      <MenuProvider>
          <Navbar/>
          <AboutUs/>
          <Footer/>
      </MenuProvider>
    </div>
  )
}

export default page