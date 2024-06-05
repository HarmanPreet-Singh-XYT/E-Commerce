"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Secure from '@/components/SecurePayment/Secure'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <div className='overflow-x-hidden'>
    <MenuProvider>
        <Navbar/>
        <Secure/>
        <Footer/>
    </MenuProvider>
    </div>
  )
}

export default page