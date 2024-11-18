import React, { FC, MouseEvent } from "react";
import styles from "./OrderDetails.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { inputFields } from "../../models/IInputField";

interface OrderDetailsProps {
  itemCount: number;
  totalAmount: number;
}

const OrderDetails: FC<OrderDetailsProps> = ({ itemCount, totalAmount }) => {
  const sendForm = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.orderDetails}>
      <div className={styles.orderSummary}>
        <h1 className={styles.orderTitle}>Order details</h1>
        <div className={styles.orderInfo}>
          <p className={styles.itemCount}>{itemCount} items</p>
          <div className={styles.priceSummary}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalAmount}>${totalAmount}</span>
          </div>
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.formInputs}>
          {inputFields.map((field) => (
            <InputUI key={field.id} field={field} />
          ))}
        </div>
        <ButtonUI btnClass="btnGreen" onClick={(event) => sendForm(event)}>
          Order
        </ButtonUI>
      </form>
    </section>
  );
};

export default OrderDetails;
