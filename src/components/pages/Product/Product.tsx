import React, { MouseEvent } from "react";
import styles from "./Product.module.css";
import QuantityControl from "../../UI/QuantityControl/QuantityControl";
import ProductPrice from "../../ProductPrice/ProductPrice";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";
import SalePercent from "../../UI/SalePercent/SalePercent";
import { useProduct } from "../../../hooks/useProduct";
import Loader from "../../UI/Loader/Loader";
import { SERVER_URL } from "../../../constants";

const Product: React.FC = () => {
  const { product, loading, error } = useProduct();

  const addToCart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <main className="section">
      {loading ? (
        <Loader />
      ) : product ? (
        <article className={styles.productContainer}>
          <section className={styles.gallery}>
            <img loading="lazy" src={SERVER_URL + product.image} alt={product.title} className={styles.productImage} />
          </section>
          <section className={styles.productInfo}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.priceBlock}>
              <ProductPrice price={product.price} discont_price={product.discont_price} />
              <div className={styles.salePercent}>
                <SalePercent price={product.price} discont_price={product.discont_price} />
              </div>
            </div>
            <div className={styles.actionContainer}>
              <QuantityControl />
              <div className={styles.addToCartButton}>
                <ButtonUI btnClass="btnGreen" onClick={(event) => addToCart(event)}>
                  Add to cart
                </ButtonUI>
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Description</h2>
              <p className={styles.descriptionText}>{product.description}</p>
              <a href="#" className={styles.readMore}>
                Read more
              </a>
            </div>
          </section>
        </article>
      ) : (
        error && <p>{error}</p>
      )}
    </main>
  );
};

export default Product;
