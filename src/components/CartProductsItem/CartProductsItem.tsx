import React from 'react';
import styles from './CartProductsItem.module.css';
import { IProduct } from '../../models/IProcuct';
import ProductPrice from '../ProductPrice/ProductPrice';

interface CartProductsItemProps {
  product: IProduct;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const CartProductsItem: React.FC<CartProductsItemProps> = ({ product, quantity, onQuantityChange }) => {
  return (
    <article className={styles.cartItem}>
      <img src={product.image} alt={product.title} className={styles.productImage} />
      <div className={styles.productContent}>
        <header className={styles.productHeader}>
          <h2 className={styles.productName}>{product.title}</h2>
          <button className={styles.favoriteButton} aria-label="Add to favorites">
            ×
          </button>
        </header>
        <footer className={styles.productFooter}>
          <div className={styles.quantityControl}>
            <button
              className={styles.quantityButton}
              onClick={() => onQuantityChange(quantity - 1)}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className={styles.quantityDisplay}>{quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={() => onQuantityChange(quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <ProductPrice price={product.price} discont_price={product.discont_price} />
        </footer>
      </div>
    </article>
  );
};

export default CartProductsItem;