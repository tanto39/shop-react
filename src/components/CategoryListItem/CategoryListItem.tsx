import React from "react";
import styles from "./CategoryListItem.module.css";
import { useNavigate } from "react-router-dom";
import { ICategory } from "../../models/ICategory";
import { SERVER_URL } from "../../constants";

interface ICategoryListItemProps {
  category: ICategory;
  classItem?: string;
}

const CategoryItem: React.FC<ICategoryListItemProps> = ({ category, classItem = '' }) => {
  const navigate = useNavigate();

  return (
    <article className={`${styles.categoryItem} ${styles[classItem]}`} onClick={() => navigate("/category/" + category.id)}>
      <div className={styles.imgWrap}>
        <div className={styles.imgBlock}>
          <img loading="lazy" src={SERVER_URL + category.image} alt={category.title} className={styles.categoryImage} />
        </div>
      </div>
      <h3 className={styles.categoryTitle}>{category.title}</h3>
    </article>
  );
};

export default CategoryItem;
