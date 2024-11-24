import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import ProductList from "../../ProductList/ProductList";
import Filter from "../../Filter/Filter";
import { useProducts } from "../../../hooks/useProducts";
import Loader from "../../UI/Loader/Loader";

const Products: React.FC = () => {
  const { products, loading, error } = useProducts();

  return (
    <main className="section">
      <HeadBlock title="All products" />
      <Filter />
      {loading ? <Loader /> : 
      products ? <ProductList products={products} />: 
      error && <p>{error}</p>}
    </main>
  );
};

export default Products;
