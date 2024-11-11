import React, { useMemo } from "react";
import { useProducts } from "./useProducts";
import { IProduct } from "../models/IProcuct";
import { useFilter } from "./useFilter";
import { useSort } from "./useSort";

export function useProductsSale() {
  const { products, loading, error } = useProducts();

  const productsFilter = useFilter(products);
  const productsSort = useSort(productsFilter);

  const productsSale = useMemo(() => {
    return productsSort.filter((product) => product.discont_price && product.discont_price < product.price);
  }, [productsSort]);

  return { productsSale, loading, error };
}
