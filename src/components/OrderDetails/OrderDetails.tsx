import React, { FC, MouseEvent, useState } from "react";
import styles from "./OrderDetails.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { IFormInputs, inputFields } from "../../models/IInputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/helpers";
import { IMessage, setMessage } from "../../store/slices/message";
import { sendForm } from "../../api/sendForm";
import { SERVER_URL } from "../../constants";
import { ICart } from "../../store/slices/cart";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (isSended) return;
    const messageSet: IMessage = {} as IMessage;
    const orderData: IOrderData = { userInfo: data, order: cart };
    try {
      const sendResult = await sendForm(orderData, SERVER_URL + "/order/send");
      messageSet.type = "S";
      messageSet.title = "Congragulations!";
      messageSet.message = (
        <div>
          <p>Your order has been successfully placed on the website.</p>
          <p>A manager will contact you shortly to confirm your order.</p>
        </div>
      );
      setIsSended(true);
    } catch (error: any) {
      messageSet.type = "E";
      messageSet.title = "Error";
      messageSet.message = <p>{error.message}</p>;
    }
    dispatch(setMessage(messageSet));
  };

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
        {isSended ? (
          <ButtonUI btnClass="btnAdded">The Order is Placed</ButtonUI>
        ) : (
          <ButtonUI btnClass="btnGreen">Order</ButtonUI>
        )}
      </form>
    </section>
  );
};

export default OrderDetails;
