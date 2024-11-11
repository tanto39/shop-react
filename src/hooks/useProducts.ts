import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/helpers';
import { fetchProducts } from './../store/slices/products';
import { useSort } from './useSort';
import { useFilter } from './useFilter';

export function useProducts() {
  const { products, loading, error } = useAppSelector(state => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProducts());
    }
  },[dispatch, products]);

  const productsFilter = useFilter(products);
  const productsSort = useSort(productsFilter);

  return { products: productsSort, loading, error };
}