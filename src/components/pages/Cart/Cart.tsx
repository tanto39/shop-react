import React from "react";
import HeadBlock from "../../UI/HeadBlock/HeadBlock";
import styles from "./Cart.module.css";
import CardProducts from "../../CartProducts/CartProducts";
import OrderDetails from "../../OrderDetails/OrderDetails";
import { useAppSelector } from "../../../store/helpers";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <main className="section">
      <HeadBlock title="Shopping cart" link="/" linkText="Back to the store" />
      {cart.products.length > 0 ? (
        <div className={styles.shoppingCart}>
          <CardProducts products={cart.products} />
          <OrderDetails cart={cart} />
        </div>
      ) : (
        <div className={styles.noItems}>
          <p>Looks like you have no items in your basket currently.</p>
          <ButtonUI btnClass="btnGreen" onClick={() => navigate("/")}>Continue Shopping</ButtonUI>
        </div>
      )}
    </main>
  );
};

export default Cart;
