import React from "react";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  discont_price: number;
  description: string;
  image: string;
  categoryId: number;
  createdAt: string,
  updatedAt: string,
  quantity: number;
}

export type IProductUrlParam = {
  id: string
}
