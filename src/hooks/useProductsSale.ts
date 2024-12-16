import React, { useMemo } from "react";
import { useProducts } from "./useProducts";
import { useSort } from "./useSort";

export function useProductsSale() {
  const { products, loading, error } = useProducts();

  const productsDisc = useMemo(() => {
    return products.filter((product) => product.discont_price && product.discont_price < product.price);
  }, [products]);

  const productsSale = useSort(productsDisc);

  return { productsSale, loading, error };
}
