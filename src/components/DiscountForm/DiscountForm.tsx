import React, { useState } from "react";
import styles from "./DiscountForm.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { IFormInputs, inputFields } from "../../models/IInputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { SERVER_URL } from "../../constants";
import { sendForm } from "../../api/sendForm";
import { useAppDispatch } from "../../store/helpers";
import { IMessage, setMessage } from "../../store/slices/message";

const DiscountForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const dispatch = useAppDispatch();
  const [isSended, setIsSended] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const messageSet: IMessage = {} as IMessage;
    if (isSended) return;
    try {
      const sendResult = await sendForm(data, SERVER_URL + "/sale/send");
      messageSet.type = "S";
      messageSet.title = "Congragulations!";
      messageSet.message = (
        <div>
          <p>Your discount request has been successfull.</p>
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
            {isSended ? (
              <ButtonUI btnClass="btnSubmitted">Request Submitted</ButtonUI>
            ) : (
              <ButtonUI btnClass="btnWhite">Get a discount</ButtonUI>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscountForm;
