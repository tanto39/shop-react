import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import Filter from "../../Filter/Filter";
import ProductList from "../../ProductList/ProductList";
import { useCategory } from "../../../hooks/useCategory";
import Loader from "../../UI/Loader/Loader";
import { useNavigate } from "react-router-dom";
import ErrorBlock from "../../UI/ErrorBlock/ErrorBlock";

const Category: React.FC = () => {
  const { category, products, loading, error } = useCategory();
  const navigate = useNavigate();

  if (error === "Error: 404") {
    navigate('/404');
  }

  return (
    <main className="section">
      {category && <HeadBlock title={category.title} />} 
      <Filter />
      {loading ? (
        <Loader />
      ) : products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Category;
