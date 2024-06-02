import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: boolean
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false,
}

export const CartUI = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openCart: (state) => {
      state.value = true;
    },
    closeCart: (state) => {
      state.value = false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { openCart, closeCart } = CartUI.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.sidebar.value

export default CartUI.reducer