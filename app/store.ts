import UISliceReducer from '@/features/UIUpdates/UISlice'
import SidebarType from '@/features/UIUpdates/SidebarType'
import CartUI from '@/features/UIUpdates/CartUI'
import { configureStore } from '@reduxjs/toolkit'
import FavouriteUI from '@/features/UIUpdates/FavouriteUI'
// ...

export const store = configureStore({
  reducer: {
    sidebar:UISliceReducer,
    sidebarType:SidebarType,
    cart:CartUI,
    FavUI:FavouriteUI,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch