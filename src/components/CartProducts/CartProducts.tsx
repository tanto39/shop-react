import React from "react";
import CartProductsItem from "../CartProductsItem/CartProductsItem";
import styles from "./CartProducts.module.css";
import { IProduct } from "../../models/IProcuct";
import { useAppSelector } from "../../store/helpers";

interface ICartProductsShop {
  products: IProduct[];
}
const CartProducts: React.FC<ICartProductsShop> = ({ products }) => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <section className={styles.cardProductsWrap}>
      {products.map((product) => (
        <CartProductsItem product={product} />
      ))}
    </section>
  );
};

export default CartProducts;
