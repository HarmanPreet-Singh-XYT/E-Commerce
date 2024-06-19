import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define interfaces for the items in cart and wishlist
interface Item {
  cartItemID:number;
  productID:number;
  productImg:string;
  productAlt:string;
  productName:string;
  productPrice:number;
  productColor:string;
  productSize:string;
  // addedAt:string;
  quantity: number;
}
interface Wishlist{
  wishlistItemID:number;
  productID:number;
  productImg:string;
  productAlt:string;
  productName:string;
  productPrice:number;
}
interface CartWishlistState {
  cart: Item[];
  wishlist: Wishlist[];
}

// Initial state
const initialState: CartWishlistState = {
  cart: [],
  wishlist: [],
}

// Create the slice
const cartWishlistSlice = createSlice({
  name: 'cartWishlist',
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<Item[]>) {
      state.cart = action.payload
    },
    setWishlist(state, action: PayloadAction<Wishlist[]>) {
      state.wishlist = action.payload
    },
    addItemToCart(state, action: PayloadAction<Item>) {
      const existingItem = state.cart.find(item => item.productID === action.payload.productID)
      if (existingItem) {
        existingItem.quantity += action.payload.quantity
      } else {
        state.cart.push(action.payload)
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(item => item.productID !== action.payload)
    },
    updateCartItemQuantity(state, action: PayloadAction<{ id: number, quantity: number }>) {
      const item = state.cart.find(item => item.productID === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
    },
    addItemToWishlist(state, action: PayloadAction<Wishlist>) {
      const existingItem = state.wishlist.find(item => item.productID === action.payload.productID)
      if (!existingItem) {
        state.wishlist.push(action.payload)
      }
    },
    removeItemFromWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(item => item.productID !== action.payload)
    },
  },
})

// Export the actions
export const { 
  setCart,
  setWishlist,
  addItemToCart, 
  removeItemFromCart, 
  updateCartItemQuantity, 
  addItemToWishlist, 
  removeItemFromWishlist 
} = cartWishlistSlice.actions

// Export the reducer
export default cartWishlistSlice.reducer