"use client"
import DialogBoxes from '@/components/DialogBoxes'
import SignIn from '@/components/Login/SignIn'
import { AppProvider } from '@/Helpers/AccountDialog'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { GoogleOAuthProvider } from '@react-oauth/google';
const page = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_FRONTEND_GOOGLE_CLIENT_ID as string}>
    <AppProvider>
      <Provider store={store}>
        <DialogBoxes/>
        <SignIn/>
      </Provider>
    </AppProvider>
    </GoogleOAuthProvider>
  )
}

export default page