import React from "react";
import styles from "./ProductListItem.module.css";
import ProductPrice from "../ProductPrice/ProductPrice";
import { IProduct } from "../../models/IProcuct";
import { useNavigate } from "react-router-dom";
import SalePercent from "../UI/SalePercent/SalePercent";
import { SERVER_URL } from "../../constants";

interface ProductListItemProps {
  product: IProduct;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <article className={styles.ProductListItem} onClick={() => navigate("/product/" + product.id)}>
      <div className={styles.imgWrap}>
        <img loading="lazy" src={SERVER_URL + product.image} alt={product.title} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.title}</h2>
        <ProductPrice discont_price={product.discont_price} price={product.price} />
      </div>
      <div className={styles.salePercent}>
        <SalePercent price={product.price} discont_price={product.discont_price} />
      </div>
    </article>
  );
};

export default ProductListItem;
