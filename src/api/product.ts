import React from "react";
import { SERVER_URL } from "../constants";
import { IProduct } from "../models/IProcuct";

export async function fetchProductApi(id: number) {
  try {
    const res = await fetch(SERVER_URL + "/products/" + id);

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    const data:any = await res.json();
    if (data.status == "ERR") {
      throw new Error("404");
    }
    return data[0] as IProduct;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
