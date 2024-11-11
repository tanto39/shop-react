import React from "react";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategoryApi } from "../../api/category";
import { ICategory, ICategoryProducts } from "../../models/ICategory";

export interface IInitialStateCategory {
  category: ICategoryProducts
  loading: boolean;
  error: string | null
}

const initialState: IInitialStateCategory = {
  category: {category: {} as ICategory, data: []},
  loading: false,
  error: null
}

export const fetchCategory = createAsyncThunk(
  'products/fetchCategory',
  async(id: number, thunkAPI) => {
    const category = await fetchCategoryApi(id);
    return category;
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
    })
    .addCase(fetchCategory.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCategory.rejected, (state, action) => { 
      state.loading = false; 
      state.error = action.error.message || 'Failed to fetch';
    });
  }, 
});

export default categorySlice.reducer;