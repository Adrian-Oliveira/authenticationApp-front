import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  isLogged: boolean,
  photo?:string,
  name?:string,
  bio?:string,
  phone?:string,
  email?:string,
  password?:string
  
}

const initialState:UserState = {
  isLogged: false,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogged:(state, action:PayloadAction<boolean>)=>{
      state.isLogged = action.payload
    },
    setUser:(state, action:PayloadAction<UserState>)=>{
      return { ...state, ...action.payload }
    },
    removeUser:(state)=>{
      return {...initialState}
    } 
  },

})

export const {setLogged, setUser, removeUser} = userSlice.actions

export default userSlice.reducer;