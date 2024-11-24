import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import ProductList from "../../ProductList/ProductList";
import { useProductsSale } from "../../../hooks/useProductsSale";
import Loader from "../../UI/Loader/Loader";
import Filter from "../../Filter/Filter";
import ErrorBlock from "../../UI/ErrorBlock/ErrorBlock";

const Sales: React.FC = () => {
  const { productsSale, loading, error } = useProductsSale();

  return (
    <main className="section">
      <HeadBlock title="Discounted items" />
      <Filter showDiscountCheckbox={false} />
      {loading ? (
        <Loader />
      ) : productsSale.length > 0 ? (
        <ProductList products={productsSale} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Sales;
