import React, { useMemo} from 'react';
import { IProduct } from '../models/IProcuct';
import { useAppSelector } from '../store/helpers';

export function useSort(productsData: IProduct[]) {
  const { sort } = useAppSelector((state) => state.sort);

  const products = useMemo(() => {

    function setSort(a:IProduct, b:IProduct) {
      const priceA = a.discont_price ? a.discont_price : a.price;
      const priceB = b.discont_price ? b.discont_price : b.price;

      switch(sort.value) {
        case "newest":
          return a.createdAt.localeCompare(b.createdAt);
        case "price-high-low":
          return priceB - priceA;
        case "price-low-high":
          return priceA - priceB;
        default:
          return a.title.localeCompare(b.title);
      }
    }

    const productsSorted: IProduct[] = productsData.sort((a, b) => setSort(a, b));
    return productsSorted;
  }, [productsData, sort]);

  return products;
}