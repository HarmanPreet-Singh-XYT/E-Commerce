"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import TermsConditions from '@/components/PolicyPage/TermsConditions'
import { MenuProvider } from '@/Helpers/MenuContext'
import React from 'react'

const page = () => {
  return (
    <MenuProvider>
        <Navbar/>
        <TermsConditions/>
        <Footer/>
    </MenuProvider>
  )
}

export default page