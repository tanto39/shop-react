import React from "react";
import { SERVER_URL } from "../constants";
import { IProduct } from "../models/IProcuct";

export async function fetchProductsApi() {
  const res = await fetch(SERVER_URL + "/products/all");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data:IProduct[] = await res.json();
  return data;
}
