import React from "react";
import styles from "./Header.module.css";
import { navLinks } from "./NavLinks";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.logo}>
        <img src="/images/logo.svg" alt="Company Logo" />
      </Link>
      <nav className={styles.navigation}>
        {navLinks.map((link, index) => (
          <Link key={link.link} to={link.link}>
            {link.title}
          </Link>
        ))}
      </nav>

      <Link to='/cart' className={styles.cart_icon}>
        {/* <div className={styles.numberWrapper}> */}
          <div className={styles.numberCircle}>
            {4}
          </div>
        {/* </div> */}
        <img src="/images/cart_icon.svg" alt="Cart" />
      </Link>
    </header>
  );
};
