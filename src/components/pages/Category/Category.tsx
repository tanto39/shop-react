import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import Filter from "../../Filter/Filter";
import ProductList from "../../ProductList/ProductList";
import { useCategory } from "../../../hooks/useCategory";
import Loader from "../../UI/Loader/Loader";

const Category: React.FC = () => {
  const { category, products, loading, error } = useCategory();

  return (
    <main className="section">
      {category && <HeadBlock title={category.title} />} 
      <Filter />
      {loading ? (
        <Loader />
      ) : products ? (
        <ProductList products={products} />
      ) : (
        error && <p>{error}</p>
      )}
    </main>
  );
};

export default Category;
