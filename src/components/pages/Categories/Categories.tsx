import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import CategoryList from "../../CategoryList/CategoryList";
import { useCategories } from "../../../hooks/useCategories";
import Loader from "../../UI/Loader/Loader";

const Categories: React.FC = () => {
  const { categories, loading, error } = useCategories();

  return (
    <main className="section">
      <HeadBlock title="Categories" />
      { 
        loading ? <Loader /> : 
        categories ? <CategoryList categoryList={categories} /> :
        error && <p>{error}</p>
      }
    </main>
  );
};

export default Categories;
