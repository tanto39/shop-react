import React from "react";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsApi } from "../../api/products";
import { IProduct } from "../../models/IProcuct";

export interface IInitialStateProducts {
  products: IProduct[];
  loading: boolean;
  error: string | null
}

const initialState: IInitialStateProducts = {
  products: [],
  loading: false,
  error: null
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async(_, thunkAPI) => {
    const products = await fetchProductsApi();
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProducts.rejected, (state, action) => { 
      state.loading = false; 
      state.error = action.error.message || 'Failed to fetch';
    });
  }, 
});

export default productsSlice.reducer;