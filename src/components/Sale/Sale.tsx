import React from "react";
import HeadBlock from "../UI/HeadBlock/HeadBlock";
import ProductList from "../ProductList/ProductList";
import { useProductsSale } from "../../hooks/useProductsSale";
import Loader from "../UI/Loader/Loader";
import ErrorBlock from "../UI/ErrorBlock/ErrorBlock";

const Sale: React.FC = () => {
  const { productsSale, loading, error } = useProductsSale();

  return (
    <section className="section">
      <HeadBlock title="Sale" link="/sales" linkText="All sales" />
      {loading ? (
        <Loader />
      ) : productsSale.length > 0 ? (
        <ProductList products={productsSale.slice(0, 4)} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </section>
  );
};

export default Sale;
