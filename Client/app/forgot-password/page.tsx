"use client"
import DialogBoxes from '@/components/DialogBoxes'
import { AppProvider } from '@/Helpers/AccountDialog'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import ForgotPass from '@/components/Login/ForgotPass'
const page = () => {
  return (
    <AppProvider>
      <Provider store={store}>
        <DialogBoxes/>
        <ForgotPass/>
      </Provider>
    </AppProvider>
  )
}

export default page