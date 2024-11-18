import React, { useMemo} from 'react';
import { IProduct } from '../models/IProcuct';
import { useAppSelector } from '../store/helpers';

export function useCheckCart(product: IProduct) {
  const { cart } = useAppSelector((state) => state.cart);

  const inCart: boolean = useMemo(() => {
    const productCartFiltered = cart.products.filter((productCart) => (productCart.id === product.id));
    return productCartFiltered.length > 0 ? true : false;
  }, [cart.products, product]);

  return inCart;
}