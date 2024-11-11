import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";

export interface IFilter {
  priceFrom: number;
  priceTo: number;
  discountedItems: boolean;
}

export interface IFilterSlice {
  filter: IFilter
}

export const InitialState: IFilterSlice = {
  filter: {
    priceFrom: 0,
    priceTo: 1000000,
    discountedItems: false,
  }
};

export const setFilter = (filter: IFilter) => async (dispach: AppDispatch) => {
  dispach(filterSlice.actions.setFilter(filter));
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: InitialState,
  reducers: {
    setFilter(state, action: PayloadAction<IFilter>) {
      state.filter = action.payload;
    }
  },
});

export default filterSlice.reducer;
