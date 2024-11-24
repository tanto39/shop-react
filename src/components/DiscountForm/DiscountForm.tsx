import React from "react";
import styles from "./DiscountForm.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { IFormInputs, inputFields } from "../../models/IInputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/helpers";
import { IMessage, setMessage } from "../../store/slices/message";
import { clearSend, sendDiscount, setSend } from "../../store/slices/discount";
import Loader from "../UI/Loader/Loader";

const DiscountForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const dispatch = useAppDispatch();
  const messageSet: IMessage = {} as IMessage;
  const { loadingSend, errorSend, successSend, onceSend } = useAppSelector((state) => state.discount);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    if (successSend) return;
    dispatch(sendDiscount(data));
  };

  if (successSend && !onceSend) {
    messageSet.type = "S";
    messageSet.title = "Success!";
    messageSet.message = (
      <div>
        <p>{successSend}</p>
        <p>Your order has been successfully placed on the website.</p>
        <p>A manager will contact you shortly to confirm your order.</p>
      </div>
    );
    dispatch(setSend());
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
    <section className={styles.discountForm}>
      <h1 className={styles.discountTitle}>5% off on the first order</h1>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            {inputFields.map((field) => (
              <InputUI key={field.id} field={field} register={register} />
            ))}
          </div>
          <div className={styles.btnWrap}>
            {successSend ? (
              <ButtonUI btnClass="btnSubmitted">Request Submitted</ButtonUI>
            ) : (
              <ButtonUI btnClass="btnWhite">Get a discount</ButtonUI>
            )}
            {loadingSend && <Loader />}
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscountForm;
