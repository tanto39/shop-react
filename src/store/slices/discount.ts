import React from "react";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";
import { IProduct } from "../../models/IProcuct";
import { sendForm } from "../../api/sendForm";
import { SERVER_URL } from "../../constants";
import { IFormInputs } from "../../models/IInputField";

export interface IDiscountSlice {  
  loadingSend: boolean;
  errorSend: string | null;
  successSend: string | null;
  onceSend: boolean;
}

export const InitialState: IDiscountSlice = {
  loadingSend: false,
  errorSend: null,
  successSend: null,
  onceSend: false,
};

export const setSend = () => async (dispach: AppDispatch) => {
  dispach(discountSlice.actions.setSend());
};

export const clearSend = () => async (dispach: AppDispatch) => {
  dispach(discountSlice.actions.clearSend());
};

export const sendDiscount = createAsyncThunk(
  'discount/send',
  async(sendData: IFormInputs, thunkAPI) => {
    const sendResult = await sendForm(sendData, SERVER_URL + "/sale/send");
    return sendResult;
  }
);

export const discountSlice = createSlice({
  name: "discount",
  initialState: InitialState,
  reducers: {
    setSend(state) {
      state.onceSend = true;
    },
    clearSend(state){
      state.errorSend = null;
      state.successSend = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sendDiscount.fulfilled, (state, action) => {
      state.loadingSend = false;
      state.successSend = action.payload;
    })
    .addCase(sendDiscount.pending, (state, action) => {
      state.loadingSend = true;
      state.errorSend = null;
      state.successSend = null;
    })
    .addCase(sendDiscount.rejected, (state, action) => { 
      state.loadingSend = false; 
      state.successSend = null;
      state.errorSend = action.error.message || 'Failed to send';
    });
  }, 
});

export default discountSlice.reducer;
