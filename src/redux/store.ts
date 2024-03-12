import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './image/imageSlice'
import userSlice from './user/userSlice'

const store = configureStore({
    reducer: {
        image:imageReducer,
        user:userSlice
    },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
