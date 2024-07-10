"use client"
import DialogBoxes from '@/components/DialogBoxes'
import Signup from '@/components/Login/Signup'
import { AppProvider } from '@/Helpers/AccountDialog'
import React from 'react'
import { store } from '@/app/store'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google';
const page = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_FRONTEND_GOOGLE_CLIENT_ID as string}>
      <AppProvider>
        <Provider store={store}>
          <DialogBoxes/>
          <Signup/>
        </Provider>
      </AppProvider>
    </GoogleOAuthProvider>
  )
}

export default page