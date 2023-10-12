import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import api from '../../core/api';

export interface ImageState {
  error:{
    isError?:boolean,
    message?:string
  },
  imageUploaded:{
    id?:string,
    message?:string,
  }
  uploading:boolean
}

const initialState:ImageState = {
  error:{
    isError:false
  },
  imageUploaded:{},
  uploading:false
}

export const uploadImage = createAsyncThunk(
  'image/uploadImages',
  async (file:File) => {

    const response = await api.postImage(file)
    return response
  }
)


export const coinsSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setUploading:(state, action:PayloadAction<boolean>)=>{
      state.uploading = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(uploadImage.pending, (state) => {
      state.uploading = true;
      state.error.isError = false;
      
    })
    .addCase(uploadImage.fulfilled, (state, action: PayloadAction<{id:string, msg:string}>) => {
      state.uploading = false;
      state.imageUploaded.id = action.payload.id;
      state.imageUploaded.message = action.payload.msg;
    })
    .addCase(uploadImage.rejected, (state, action) => {
      state.uploading = false;
      state.error = {
        isError: true,
        message: action.error.message,
      };
    })
  },
})

export const {setUploading} = coinsSlice.actions

export default coinsSlice.reducer;