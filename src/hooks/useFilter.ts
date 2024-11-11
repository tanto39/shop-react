import React, { useMemo} from 'react';
import { IProduct } from '../models/IProcuct';
import { useAppSelector } from '../store/helpers';

export function useFilter(productsData: IProduct[]) {
  const { filter } = useAppSelector((state) => state.filter);

  const products = useMemo(() => {
    const productsFiltered: IProduct[] = productsData.filter((product) =>
      ( product.discont_price ? product.discont_price <= filter.priceTo : product.price <= filter.priceTo ) &&
      ( product.discont_price ? product.discont_price >= filter.priceFrom : product.price >= filter.priceFrom ) &&
      ( filter.discountedItems ? product.discont_price > 0 : true )
    );
    return productsFiltered;
  }, [productsData, filter]);

  return products;
}