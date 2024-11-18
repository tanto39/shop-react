import React from "react";
import styles from "./DiscountForm.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { IFormInputs, inputFields } from "../../models/IInputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { SERVER_URL } from "../../constants";
import { sendForm } from "../../api/sendForm";

const DiscountForm: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    const sendResult = await sendForm(data, SERVER_URL + '/sale/send');
  };

  return (
    <section className={styles.discountForm}>
      <h1 className={styles.discountTitle}>5% off on the first order</h1>
      <div className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputs}>
            {inputFields.map((field) => (
              <InputUI key={field.id} field={field} register={register}/>
            ))}
          </div>
          <div className={styles.btnWrap}>
            <ButtonUI btnClass="btnWhite">
              Get a discount
            </ButtonUI>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscountForm;
