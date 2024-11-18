import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";
import { IProduct } from "../../models/IProcuct";

export interface ICart {
  countItems: number;
  totalPrice: number;
  products: IProduct[]
}

export interface ICartSlice {
  cart: ICart
}

export const InitialState: ICartSlice = {
  cart: {
    countItems: 0,
    totalPrice: 0,
    products: [],
  }
};

export const setCart = (product: IProduct) => async (dispach: AppDispatch) => {
  dispach(cartSlice.actions.setCart(product));
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: InitialState,
  reducers: {
    setCart(state, action: PayloadAction<IProduct>) {
      state.cart.products.forEach((product, i) => {
        if (product.id == action.payload.id) {
          state.cart.products.splice(i, 1);
        }
      });

      if (action.payload.quantity > 0 ) {
        state.cart.products = [...state.cart.products, action.payload];
      }
      
      state.cart.totalPrice = 0;
      state.cart.countItems = 0;

      state.cart.products.forEach((product) => {
        const price = ( product.discont_price ? product.discont_price : product.price ) * product.quantity;
        state.cart.totalPrice = state.cart.totalPrice + price;
        state.cart.countItems = state.cart.countItems + product.quantity;
      });
    }
  },
});

export default cartSlice.reducer;
