import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";
import { IOption } from "../../components/UI/Dropdown/Dropdown";

export interface ISortSlice {
  sort: IOption;
}

export const InitialState: ISortSlice = {
  sort: {
    value: 'default',
    text: 'by default',
  }
};

export const setSort = (sort: IOption) => async (dispach: AppDispatch) => {
  dispach(sortSlice.actions.setSort(sort));
};

export const sortSlice = createSlice({
  name: "sort",
  initialState: InitialState,
  reducers: {
    setSort(state, action: PayloadAction<IOption>) {
      state.sort = action.payload;
    }
  },
});

export default sortSlice.reducer;
