import React from "react";
import { SERVER_URL } from "../constants";
import { IProduct } from "../models/IProcuct";

export async function fetchProductApi(id: number) {
  const res = await fetch(SERVER_URL + "/products/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data:IProduct[] = await res.json();
  return data[0];
}
