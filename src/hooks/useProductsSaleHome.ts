import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../store/helpers";
import { fetchProducts } from "../store/slices/products";

export function useProductsSaleHome() {
  const { products, loading, error } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  },[dispatch, products]);

  const productsSale = useMemo(() => {
    return products.filter((product) => product.discont_price && product.discont_price < product.price);
  }, [products]);

  return { productsSale, loading, error };
}
