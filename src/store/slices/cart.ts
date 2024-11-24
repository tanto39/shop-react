import React from "react";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";
import { IProduct } from "../../models/IProcuct";
import { IOrderData } from "../../components/OrderDetails/OrderDetails";
import { sendForm } from "../../api/sendForm";
import { SERVER_URL } from "../../constants";

export interface ICart {
  countItems: number;
  totalPrice: number;
  products: IProduct[]
}

export interface ICartSlice {  
  loadingSend: boolean;
  errorSend: string | null;
  successSend: string | null;
  cart: ICart
}

export const InitialState: ICartSlice = {
  loadingSend: false,
  errorSend: null,
  successSend: null,
  cart: {
    countItems: 0,
    totalPrice: 0,
    products: [],
  }
};

export const setCart = (products: IProduct[]) => async (dispach: AppDispatch) => {
  dispach(cartSlice.actions.setCart(products));
};

export const clearSend = () => async (dispach: AppDispatch) => {
  dispach(cartSlice.actions.clearSend());
};

export const sendOrder = createAsyncThunk(
  'cart/order',
  async(orderData: IOrderData, thunkAPI) => {
    const sendResult = await sendForm(orderData, SERVER_URL + "/order/send");
    return sendResult;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    setCart(state, action: PayloadAction<IProduct[]>) {
      let totalPrice = 0;
      let countItems = 0;

      action.payload.forEach((product) => {
        const price = ( product.discont_price ? product.discont_price : product.price ) * product.quantity;
        totalPrice = totalPrice + price;
        countItems = countItems + product.quantity;
      });

      state.cart.products = action.payload;
      state.cart.countItems = countItems;
      state.cart.totalPrice = totalPrice;
    },
    clearSend(state) {
      state.successSend = null;
      state.errorSend = null;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(sendOrder.fulfilled, (state, action) => {
      state.loadingSend = false;
      state.successSend = action.payload;
    })
    .addCase(sendOrder.pending, (state, action) => {
      state.loadingSend = true;
      state.errorSend = null;
      state.successSend = null;
    })
    .addCase(sendOrder.rejected, (state, action) => { 
      state.loadingSend = false; 
      state.successSend = null;
      state.errorSend = action.error.message || 'Failed to send';
    });
  }, 
});

export default cartSlice.reducer;
