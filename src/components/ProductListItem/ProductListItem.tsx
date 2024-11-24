import React, { FC, MouseEvent } from "react";
import styles from "./ProductListItem.module.css";
import ProductPrice from "../ProductPrice/ProductPrice";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { IProduct } from "../../models/IProcuct";
import { useNavigate } from "react-router-dom";
import SalePercent from "../UI/SalePercent/SalePercent";
import { SERVER_URL } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../store/helpers";
import { setCart } from "../../store/slices/cart";
import { useCheckCart } from "../../hooks/useCheckCart";

interface ProductListItemProps {
  product: IProduct;
}

const ProductListItem: FC<ProductListItemProps> = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inCart = useCheckCart(product);
  const { cart } = useAppSelector((state) => state.cart);

  const addToCart = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    const productCart = { ...product, quantity: 1 };
    let products = [...cart.products, productCart];
    dispatch(setCart(products));
  };

  return (
    <article className={styles.ProductListItem} onClick={() => navigate("/product/" + product.id)}>
      <div className={styles.imgWrap}>
        <div className={styles.imgBlock}>
          <img loading="lazy" src={SERVER_URL + product.image} alt={product.title} className={styles.productImage} />
        </div>
        <div className={styles.addToCart}>
          {inCart ? (
            <ButtonUI btnClass="btnAdded">Added</ButtonUI>
          ) : (
            <ButtonUI btnClass="btnGreen" onClick={(event) => addToCart(event)}>
              Add to cart
            </ButtonUI>
          )}
        </div>
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.title}</h2>
        <ProductPrice discont_price={product.discont_price} price={product.price} />
      </div>
      <div className={styles.salePercent}>
        <SalePercent price={product.price} discont_price={product.discont_price} />
      </div>
    </article>
  );
};

export default ProductListItem;
