import React from "react";
import CategoryList from "../CategoryList/CategoryList";
import HeadBlock from "../UI/HeadBlock/HeadBlock";
import { useCategories } from "../../hooks/useCategories";
import Loader from "../UI/Loader/Loader";

const HomeCategories: React.FC = () => {

  const { categories, loading, error } = useCategories();

  return (
    <section className='section'>
      <HeadBlock title="Categories" link="/categories" linkText="All categories" />
      { 
        loading ? <Loader /> : 
        categories ? <CategoryList categoryList={categories.slice(0, 4)} classItem="itemHome"/> :
        error && <p>{error}</p>
      }
    </section>
  );
};

export default HomeCategories;
