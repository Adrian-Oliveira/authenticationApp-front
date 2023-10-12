import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './image/imageSlice'

const store = configureStore({
    reducer: {
        image:imageReducer
    },
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
