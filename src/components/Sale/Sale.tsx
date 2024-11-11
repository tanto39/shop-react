import React from "react";
import HeadBlock from "../HeadBlock/HeadBlock";
import ProductList from "../ProductList/ProductList";
import { useProductsSale } from "../../hooks/useProductsSale";
import Loader from "../UI/Loader/Loader";

const Sale: React.FC = () => {
  const { productsSale, loading, error } = useProductsSale();

  return (
    <section className="section">
      <HeadBlock title="Sale" link="/sales" linkText="All sales" />
      { 
        loading ? <Loader /> : 
        productsSale ? <ProductList products={productsSale.slice(0, 4)} /> :
        error && <p>{error}</p>
      }
    </section>
  );
};

export default Sale;
