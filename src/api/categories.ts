import React from "react";
import { ICategory } from "../models/ICategory";
import { SERVER_URL } from "../constants";

export async function fetchCategoriesApi() {
  const res = await fetch(SERVER_URL + "/categories/all");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data:ICategory[] = await res.json();
  return data;
}
