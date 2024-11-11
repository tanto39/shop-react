import React from "react";
import { ICategory } from "../../models/ICategory";
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { fetchCategoriesApi } from "../../api/categories";

export interface InitialState {
  categories: ICategory[];
  loading: boolean;
  error: string | null
}

const initialState: InitialState = {
  categories: [],
  loading: false,
  error: null
}

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async(_, thunkAPI) => {
    const categories = await fetchCategoriesApi();
    return categories;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    })
    .addCase(fetchCategories.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCategories.rejected, (state, action) => { 
      state.loading = false; 
      state.error = action.error.message || 'Failed to fetch';
    });
  }, 
});

export default categoriesSlice.reducer;