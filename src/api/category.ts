import React from "react";
import { SERVER_URL } from "../constants";
import { ICategoryProducts } from "../models/ICategory";

export async function fetchCategoryApi(id: number) {
  try {
    const res = await fetch(SERVER_URL + "/categories/" + id);

    if (!res.ok) {
      throw new Error("Failed to fetch category");
    }

    const data: any = await res.json();
    if (data.status == "ERR") {
      throw new Error("404");
    }

    return data as ICategoryProducts;
  } catch (error) {
    throw new Error(`${error}`);
  }
}
