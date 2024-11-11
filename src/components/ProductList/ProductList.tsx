import React from "react";
import styles from "./ProductList.module.css";
import ProductListItem from "../ProductListItem/ProductListItem";
import { IProduct } from "../../models/IProcuct";

interface IProductListProps {
  products: IProduct[];
}
const ProductList: React.FC<IProductListProps> = ({ products }) => {
  return (
    <section className={styles.productList}>
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
