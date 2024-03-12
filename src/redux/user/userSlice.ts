import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface UserState {
  isLogged: boolean
}

const initialState:UserState = {
  isLogged: false
}



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogged:(state, action:PayloadAction<boolean>)=>{
      state.isLogged = action.payload
    }
  },

})

export const {setLogged} = userSlice.actions

export default userSlice.reducer;