"use client"
import DialogBoxes from '@/components/DialogBoxes'
import SignIn from '@/components/Login/SignIn'
import { AppProvider } from '@/Helpers/AccountDialog'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
const page = () => {
  return (
    <AppProvider>
      <Provider store={store}>
        <DialogBoxes/>
        <SignIn/>
      </Provider>
    </AppProvider>
  )
}

export default page