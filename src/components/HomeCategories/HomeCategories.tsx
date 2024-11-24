import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import HeadBlock from "../UI/HeadBlock/HeadBlock";
import { useCategories } from "../../hooks/useCategories";
import Loader from "../UI/Loader/Loader";
import ErrorBlock from "../UI/ErrorBlock/ErrorBlock";

const HomeCategories: React.FC = () => {
  const { categories, loading, error } = useCategories();

  return (
    <section className="section">
      <HeadBlock title="Categories" link="/categories" linkText="All categories" />
      {loading ? (
        <Loader />
      ) : categories.length > 0 ? (
        <CategoryList categoryList={categories.slice(0, 4)} classItem="itemHome" />
      ) : (
        error && <ErrorBlock error={error} />
      )}
    </section>
  );
};

export default HomeCategories;
