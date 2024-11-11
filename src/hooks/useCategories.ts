import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/helpers';
import { fetchCategories } from '../store/slices/categories';

export function useCategories() {
  const { categories, loading, error } = useAppSelector(state => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  },[dispatch, categories]);

  return { categories, loading, error };
}