import React from "react";
import styles from "./HeadBlock.module.css";
import { Link } from "react-router-dom";

interface IHeadBlockProps {
  title: string;
  link?: string;
  linkText?: string;
}

const HeadBlock: React.FC<IHeadBlockProps> = ({ title, link, linkText }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>

      {link && linkText && (
        <nav className={styles.navigation}>
          <div className={styles.divider} />
          <Link className={styles.all} to={link}>
            {linkText}
          </Link>
        </nav>
      )}
      
    </header>
  );
};

export default HeadBlock;
