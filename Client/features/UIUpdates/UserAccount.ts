import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Define interfaces for each piece of state
interface Address {
  addressID:number;
  addressType:string;
  contactNumber:number;
  addressLine1:string
  addressLine2:string
  city:string;
  state:string;
  country:string;
  postalCode:string;
  userName:string;
  is_default:boolean;
}

interface GiftCard {
  cardid: number;
  cardname: string;
  cardcode: string;
  description: string;
  balance: number;
  currency: string;
  expirydate: string;
  sendername: string;
  message: string;
  status: string;
}
interface Coupon {
    couponid: number;
    code: string;
    description: string;
    discountpercentage: number;
    maxdiscountamount: number;
    minpurchaseamount: number;
    validuntil: string;
}

interface PaymentCard {
  id: number;
  cardNumber: string;
  expirationDate: string;
  cardholderName: string;
}

interface Notification {
  id: number;
  message: string;
  read: boolean;
}

interface Preference {
  id: number;
  key: string;
  value: string;
}
interface Account{
  userID:number;
  userName:string;
  email:string;
  mobile_number:number;
  dob:string;
}
interface UserState {
  defaultAccount: Account;
  addresses: Address[];
  giftCards: GiftCard[];
  coupons: Coupon[];
  paymentCards: PaymentCard[];
  notifications: Notification[];
  preferences: Preference[];
}

// Initial state for each piece of state
const initialState: UserState = {
  defaultAccount: {userID:0,userName:'', email:'', mobile_number:0, dob:''},
  addresses: [],
  giftCards: [],
  coupons: [],
  paymentCards: [],
  notifications: [],
  preferences: [],
}

// Create the slice
export const userSlice = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setDefaultAccount(state, action: PayloadAction<Account>) {
      state.defaultAccount = action.payload
    },
    setAddress(state, action: PayloadAction<Address[]>) {
      state.addresses = action.payload
    },
    setCoupon(state, action: PayloadAction<Coupon[]>) {
      state.coupons = action.payload
    },
    setGiftCard(state, action: PayloadAction<GiftCard[]>) {
      state.giftCards = action.payload
    },
    addAddress(state, action: PayloadAction<Address>) {
      state.addresses.push(action.payload)
    },
    removeAddress(state, action: PayloadAction<number>) {
      state.addresses = state.addresses.filter(address => address.addressID !== action.payload)
    },
    addGiftCard(state, action: PayloadAction<GiftCard>) {
      state.giftCards.push(action.payload)
    },
    removeGiftCard(state, action: PayloadAction<number>) {
      state.giftCards = state.giftCards.filter(giftCard => giftCard.cardid !== action.payload)
    },
    addCoupon(state, action: PayloadAction<Coupon>) {
      state.coupons.push(action.payload)
    },
    removeCoupon(state, action: PayloadAction<number>) {
      state.coupons = state.coupons.filter(coupon => coupon.couponid !== action.payload)
    },
    addPaymentCard(state, action: PayloadAction<PaymentCard>) {
      state.paymentCards.push(action.payload)
    },
    removePaymentCard(state, action: PayloadAction<number>) {
      state.paymentCards = state.paymentCards.filter(paymentCard => paymentCard.id !== action.payload)
    },
    addNotification(state, action: PayloadAction<Notification>) {
      state.notifications.push(action.payload)
    },
    markNotificationAsRead(state, action: PayloadAction<number>) {
      const notification = state.notifications.find(notification => notification.id === action.payload)
      if (notification) {
        notification.read = true
      }
    },
    setPreference(state, action: PayloadAction<Preference>) {
      const existingPreference = state.preferences.find(preference => preference.id === action.payload.id)
      if (existingPreference) {
        existingPreference.value = action.payload.value
      } else {
        state.preferences.push(action.payload)
      }
    },
  },
})

// Export the actions
export const { 
  setDefaultAccount, 
  setAddress,
  setCoupon,
  setGiftCard,
  addAddress, 
  removeAddress, 
  addGiftCard, 
  removeGiftCard, 
  addCoupon, 
  removeCoupon, 
  addPaymentCard, 
  removePaymentCard, 
  addNotification, 
  markNotificationAsRead, 
  setPreference 
} = userSlice.actions

// Export the reducer
export default userSlice.reducer