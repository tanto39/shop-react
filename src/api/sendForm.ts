import React from "react";
import { IFormInputs } from "../models/IInputField";
import { SERVER_URL } from "../constants";

export const sendForm = async (data: IFormInputs, url: string) => {
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
    alert("Success send");
    return result;
  } catch (error) {
    alert('error ' + error);
    throw new Error("Network response was not ok");
  }
};