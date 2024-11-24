import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import ProductList from "../../ProductList/ProductList";
import { useProductsSale } from "../../../hooks/useProductsSale";
import Loader from "../../UI/Loader/Loader";
import Filter from "../../Filter/Filter";


const Sales: React.FC = () => {
  const { productsSale, loading, error } = useProductsSale();

  return (
    <main className='section'>
      <HeadBlock title="Discounted items" />
      <Filter showDiscountCheckbox={false} />
      { 
        loading ? <Loader /> : 
        productsSale ? <ProductList products={productsSale} /> :
        error && <p>{error}</p> 
      }
    </main>
  );
};

export default Sales;
