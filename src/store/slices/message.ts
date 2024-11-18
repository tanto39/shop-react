import React from "react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../helpers";

export interface IMessage {
  type: string;
  title: string;
  message: string;
}

export interface IMessageSlice {
  message: IMessage
}

export const InitialState: IMessageSlice = {
  message: {
    type: '',
    title: '',
    message: '',
  }
};

export const setMessage = (message: IMessage) => async (dispach: AppDispatch) => {
  dispach(messageSlice.actions.setMessage(message));
};

export const messageSlice = createSlice({
  name: "message",
  initialState: InitialState,
  reducers: {
    setMessage(state, action: PayloadAction<IMessage>) {
      state.message = action.payload;
    }
  },
});

export default messageSlice.reducer;
