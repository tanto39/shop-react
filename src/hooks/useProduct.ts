import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/helpers";
import { useParams } from "react-router-dom";
import { IProductUrlParam } from "../models/IProcuct";
import { fetchProduct } from "../store/slices/product";

export function useProduct() {
  const { product, loading, error } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const params = useParams<IProductUrlParam>();

  useEffect(() => {
    const paramsId:number = Number(params.id);
    if (!product.id || paramsId !== product.id) {
        dispatch(fetchProduct(paramsId));
    }
  }, [dispatch, product, params.id]);

  return { product, loading, error };
}
