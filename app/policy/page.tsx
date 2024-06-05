"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Policy from '@/components/PolicyPage/Policy'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <MenuProvider>
        <Navbar/>
        <Policy/>
        <Footer/>
    </MenuProvider>
  )
}

export default page