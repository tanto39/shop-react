import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import CategoryList from "../../CategoryList/CategoryList";
import { useCategories } from "../../../hooks/useCategories";
import Loader from "../../UI/Loader/Loader";
import ErrorBlock from "../../UI/ErrorBlock/ErrorBlock";

const Categories: React.FC = () => {
  const { categories, loading, error } = useCategories();

  return (
    <main className="section">
      <HeadBlock title="Categories" />
      {loading ? (
        <Loader />
      ) : categories.length > 0 ? (
        <CategoryList categoryList={categories} />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Categories;
