import React from "react";
import { SERVER_URL } from "../constants";
import { ICategoryProducts } from "../models/ICategory";

export async function fetchCategoryApi(id: number) {
  const res = await fetch(SERVER_URL + "/categories/" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  const data:ICategoryProducts = await res.json();
  return data;
}
