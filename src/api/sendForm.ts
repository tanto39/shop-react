import React from "react";
import { IFormInputs } from "../models/IInputField";
import { SERVER_URL } from "../constants";
import { IOrderData } from "../components/OrderDetails/OrderDetails";

export const sendForm = async (data: IFormInputs | IOrderData, url: string) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    return result.message;
  } catch (error) {
    throw new Error("Error" + error);
  }
};