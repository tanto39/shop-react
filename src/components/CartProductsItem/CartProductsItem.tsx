import React from 'react';
import styles from './CartProductsItem.module.css';
import { IProduct } from '../../models/IProcuct';
import ProductPrice from '../ProductPrice/ProductPrice';
import QuantityControl from '../UI/QuantityControl/QuantityControl';
import { useAppDispatch } from '../../store/helpers';
import { setCart } from '../../store/slices/cart';
import { SERVER_URL } from '../../constants';
import { Link } from 'react-router-dom';

interface CartProductsItemProps {
  product: IProduct;
}

const CartProductsItem: React.FC<CartProductsItemProps> = ({ product }) => {

  const dispatch = useAppDispatch();

  const onQuantityChange = (newQuantity: number) => {
    const productCart = { ...product, quantity: newQuantity };
    dispatch(setCart(productCart));
  }

  return (
    <article className={styles.cartItem}>
      <Link className={styles.imageWrap} to={`/product/${product.id}`}>
        <img src={SERVER_URL + product.image} alt={product.title} className={styles.productImage} />
      </Link>
      <div className={styles.productContent}>
        <header className={styles.productHeader}>
          <h2 className={styles.productName}>{product.title}</h2>
          <button className={styles.close}></button>
        </header>
        <footer className={styles.productFooter}>
          <QuantityControl onChange={onQuantityChange} />
          <ProductPrice price={product.price} discont_price={product.discont_price} />
        </footer>
      </div>
    </article>
  );
};

export default CartProductsItem;