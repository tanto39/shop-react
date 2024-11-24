import React from "react";
import styles from "./CartProductsItem.module.css";
import { IProduct } from "../../models/IProcuct";
import ProductPrice from "../ProductPrice/ProductPrice";
import QuantityControl from "../UI/QuantityControl/QuantityControl";
import { useAppDispatch, useAppSelector } from "../../store/helpers";
import { setCart } from "../../store/slices/cart";
import { SERVER_URL } from "../../constants";
import { Link } from "react-router-dom";

interface CartProductsItemProps {
  product: IProduct;
}

const CartProductsItem: React.FC<CartProductsItemProps> = ({ product }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const onCartChange = (newQuantity: number) => {
    const productCart = { ...product, quantity: newQuantity };
    let productsCart = [...cart.products];
    productsCart.forEach((productItem, i) => {
      if (productItem.id == productCart.id) {
        if (newQuantity > 0) {
          productsCart[i] = productCart;
        } else {
          productsCart.splice(i, 1);
        }
      }
    });
    dispatch(setCart(productsCart));
  };

  return (
    <article className={styles.cartItem}>
      <Link className={styles.imageWrap} to={`/product/${product.id}`}>
        <img src={SERVER_URL + product.image} alt={product.title} className={styles.productImage} />
      </Link>
      <div className={styles.productContent}>
        <header className={styles.productHeader}>
          <h2 className={styles.productName}>{product.title}</h2>
          <button className={styles.close} onClick={() => onCartChange(0)}></button>
        </header>
        <footer className={styles.productFooter}>
          <QuantityControl quantity={product.quantity} onChange={onCartChange} />
          <ProductPrice price={product.price} discont_price={product.discont_price} />
        </footer>
      </div>
    </article>
  );
};

export default CartProductsItem;
