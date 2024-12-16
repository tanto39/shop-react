import React, { useMemo } from "react";
import { useProducts } from "./useProducts";
import { IProduct } from "../models/IProcuct";
import { useFilter } from "./useFilter";
import { useSort } from "./useSort";

export function useProductsSale() {
  const { products, loading, error } = useProducts();

  const productsDisc = useMemo(() => {
    return products.filter((product) => product.discont_price && product.discont_price < product.price);
  }, [products]);

  const productsFilter = useFilter(productsDisc);
  const productsSale = useSort(productsFilter);

  return { productsSale, loading, error };
}
