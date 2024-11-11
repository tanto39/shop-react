import React from "react";
import CategoryListItem from "../CategoryListItem/CategoryListItem";
import styles from "./CategoryList.module.css";
import { ICategory } from "../../models/ICategory";

interface ICategoryListProps {
  categoryList: ICategory[];
  classItem?: string;
}

const CategoryList: React.FC<ICategoryListProps> = ({ categoryList, classItem = '' }) => (
  <section className={styles.categoryList}>
    {categoryList.map((categoryItem) => (
      <CategoryListItem key={categoryItem.id} category={categoryItem} classItem={classItem} />
    ))}
  </section>
);

export default CategoryList;
