import React, { MouseEvent, useEffect, useState } from "react";
import styles from "./Product.module.css";
import QuantityControl from "../../UI/QuantityControl/QuantityControl";
import ProductPrice from "../../ProductPrice/ProductPrice";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";
import SalePercent from "../../UI/SalePercent/SalePercent";
import { useProduct } from "../../../hooks/useProduct";
import Loader from "../../UI/Loader/Loader";
import { SERVER_URL } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../store/helpers";
import { useCheckCart } from "../../../hooks/useCheckCart";
import { setCart } from "../../../store/slices/cart";
import { useNavigate } from "react-router-dom";
import ErrorBlock from "../../UI/ErrorBlock/ErrorBlock";

const Product: React.FC = () => {
  const { product, loading, error } = useProduct();
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();
  const inCart = useCheckCart(product);
  const { cart } = useAppSelector((state) => state.cart);

  const navigate = useNavigate();

  if (error === "Error: 404") {
    navigate('/404');
  }

  useEffect(() => {
    cart.products.forEach((productCartItem) => {
      if(productCartItem.id == product.id) {
        setQuantity(productCartItem.quantity);
      }
    })
  },[cart.products, product]);

  const changeCart = async () => {
    const productCart = { ...product, quantity: quantity };
    let products = [...cart.products, productCart];
    dispatch(setCart(products));
  };

  const onQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  }

  return (
    <main className="section">
      {loading ? (
        <Loader />
      ) : product.id ? (
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
              <QuantityControl quantity={quantity} onChange={onQuantityChange} disabled={inCart}/>
              <div className={styles.addToCartButton}>
                {inCart ? (
                  <ButtonUI btnClass="btnAdded" onClick={() => navigate('/cart')}>Added</ButtonUI>
                ) : (
                  <ButtonUI btnClass="btnGreen" onClick={() => changeCart()}>
                    Add to cart
                  </ButtonUI>
                )}
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
        error && <ErrorBlock error={error} />
      )}
    </main>
  );
};

export default Product;
