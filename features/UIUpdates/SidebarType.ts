import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: string
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 'menu',
}

export const SidebarType = createSlice({
  name: 'sidebarType',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    menuSidebar: (state) => {
      state.value = 'menu';
    },
    categorySidebar: (state) => {
        state.value = 'category';
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { menuSidebar, categorySidebar } = SidebarType.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.sidebar.value

export default SidebarType.reducer