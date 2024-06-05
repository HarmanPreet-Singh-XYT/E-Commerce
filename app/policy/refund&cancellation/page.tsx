"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import RefundCancellation from '@/components/PolicyPage/RefundCancellation'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <MenuProvider>
        <Navbar/>
        <RefundCancellation/>
        <Footer/>
    </MenuProvider>
  )
}

export default page