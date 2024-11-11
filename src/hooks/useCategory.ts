import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/helpers";
import { fetchCategory } from "./../store/slices/category";
import { ICategoryUrlParam } from "../models/ICategory";
import { useParams } from "react-router-dom";
import { useFilter } from "./useFilter";
import { useSort } from "./useSort";

export function useCategory() {
  const { category, loading, error } = useAppSelector((state) => state.category);
  const dispatch = useAppDispatch();

  const params = useParams<ICategoryUrlParam>();

  useEffect(() => {
    const paramsId: number = Number(params.id);
    if (!category.category.id || paramsId !== category.category.id) {
      dispatch(fetchCategory(paramsId));
    }
  }, [dispatch, category, params.id]);

  const productsFilter = useFilter(category.data);
  const products = useSort(productsFilter);

  return { category: category.category, products, loading, error };
}
