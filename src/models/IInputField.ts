import React from "react";

export interface IInputField {
  id: string;
  type: string;
  placeholder: string;
}

export const inputFields: IInputField[] = [
  { id: "name", type: "text", placeholder: "Name" },
  { id: "phone", type: "tel", placeholder: "Phone number" },
  { id: "email", type: "email", placeholder: "Email" },
];

export interface IFormInputs {
  name: string;
  phone: string;
  email: string;
}
