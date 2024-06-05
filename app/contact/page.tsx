"use client"
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
      <MenuProvider>
          <Navbar/>
          <Contact/>
          <Footer/>
      </MenuProvider>
    </div>
  )
}

export default page