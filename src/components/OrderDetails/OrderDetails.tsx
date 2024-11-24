import React, { FC, useState } from "react";
import styles from "./OrderDetails.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { IFormInputs, inputFields } from "../../models/IInputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/helpers";
import { IMessage, setMessage } from "../../store/slices/message";
import { ICart, sendOrder, clearSend } from "../../store/slices/cart";
import Loader from "../UI/Loader/Loader";

interface OrderDetailsProps {
  cart: ICart;
}

export interface IOrderData {
  userInfo: IFormInputs;
  order: ICart;
}

const OrderDetails: FC<OrderDetailsProps> = ({ cart }) => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const dispatch = useAppDispatch();
  const [isSended, setIsSended] = useState<boolean>(false);
  const { loadingSend, errorSend, successSend } = useAppSelector((state) => state.cart);
  const messageSet: IMessage = {} as IMessage;

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (isSended) return;
    const orderData: IOrderData = { userInfo: data, order: cart };
    dispatch(sendOrder(orderData));
  };

  if (successSend) {
    messageSet.type = "S";
    messageSet.title = "Congratulations!";
    messageSet.message = (
      <div>
        <p>{successSend}</p>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    );
    dispatch(clearSend());
    setIsSended(true);
    dispatch(setMessage(messageSet));
  }

  if (errorSend) {
    messageSet.type = "E";
    messageSet.title = "Error";
    messageSet.message = <p>{errorSend}</p>;
    dispatch(clearSend());
    dispatch(setMessage(messageSet));
  }

  return (
    <section className={styles.orderDetails}>
      <div className={styles.orderSummary}>
        <h1 className={styles.orderTitle}>Order details</h1>
        <div className={styles.orderInfo}>
          <p className={styles.itemCount}>{cart.countItems} items</p>
          <div className={styles.priceSummary}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalAmount}>${cart.totalPrice}</span>
          </div>
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInputs}>
          {inputFields.map((field) => (
            <InputUI key={field.id} field={field} register={register} />
          ))}
        </div>
        {isSended || loadingSend ? (
          <ButtonUI btnClass="btnAdded">The Order is Placed</ButtonUI>
        ) : (
          <ButtonUI btnClass="btnGreen">Order</ButtonUI>
        )}
        {loadingSend && <Loader/>}
      </form>
    </section>
  );
};

export default OrderDetails;
