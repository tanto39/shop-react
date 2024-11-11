import React from "react";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { IProduct } from "../../models/IProcuct";
import { fetchProductApi } from "../../api/product";

export interface IInitialStateProduct {
  product: IProduct
  loading: boolean;
  error: string | null
}

const initialState: IInitialStateProduct = {
  product: {} as IProduct,
  loading: false,
  error: null
}

export const fetchProduct = createAsyncThunk(
  'products/fetchProduct',
  async(id: number, thunkAPI) => {
    const product = await fetchProductApi(id);
    return product;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    .addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProduct.rejected, (state, action) => { 
      state.loading = false; 
      state.error = action.error.message || 'Failed to fetch';
    });
  }, 
});

export default productSlice.reducer;