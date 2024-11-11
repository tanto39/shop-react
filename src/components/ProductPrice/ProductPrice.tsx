import React from 'react';
import styles from './ProductPrice.module.css';

interface ProductPriceProps {
  price: number;
  discont_price?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ discont_price, price }) => {
  return (
    <div className={styles.productPriceWrapper}>
      <span className={styles.productPrice}>${discont_price && discont_price < price ? discont_price : price}</span>
      {discont_price && discont_price < price && (
        <span className={styles.productPriceOriginal}>${price}</span>
      )}
    </div>
  );
};

export default ProductPrice;