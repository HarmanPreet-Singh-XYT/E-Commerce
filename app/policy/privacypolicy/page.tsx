"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PrivacyPolicy from '@/components/PolicyPage/PrivacyPolicy'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <MenuProvider>
        <Navbar/>
        <PrivacyPolicy/>
        <Footer/>
    </MenuProvider>
  )
}

export default page