import React from "react";
import styles from "./Header.module.css";
import { navLinks } from "./NavLinks";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/helpers";

export const Header: React.FC = () => {
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/images/logo.svg" alt="Company Logo" />
      </Link>
      <nav className={styles.navigation}>
        {navLinks.map((link, index) => (
          <Link key={link.link} to={link.link} className={styles.nav_item}>
            {link.title}
          </Link>
        ))}
      </nav>

      <Link to="/cart" className={styles.cart_icon}>
        {cart.countItems > 0 && <div className={styles.numberCircle}><div>{cart.countItems}</div></div>}
        <img src="/images/cart_icon.svg" alt="Cart" />
      </Link>
    </header>
  );
};
