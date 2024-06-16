"use client"
import DialogBoxes from '@/components/DialogBoxes'
import Signup from '@/components/Login/Signup'
import { AppProvider } from '@/Helpers/AccountDialog'
import React from 'react'
import { store } from '@/app/store'
import { Provider } from 'react-redux'
const page = () => {
  return (
    <AppProvider>
      <Provider store={store}>
        <DialogBoxes/>
        <Signup/>
      </Provider>
    </AppProvider>
  )
}

export default page