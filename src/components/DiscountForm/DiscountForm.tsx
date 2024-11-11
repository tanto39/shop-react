import React, { FC, MouseEvent } from "react";
import styles from "./DiscountForm.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import InputUI from "../UI/InputUI/InputUI";
import { inputFields } from "../../models/IInputField";

const DiscountForm: FC = () => {
  const sendForm = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.discountForm}>
      <h1 className={styles.discountTitle}>5% off on the first order</h1>
      <div className={styles.content}>
        <form className={styles.form}>
          <div className={styles.inputs}>
            {inputFields.map((field) => (
              <InputUI field={field}/>
            ))}
          </div>
          <div className={styles.btnWrap}>
            <ButtonUI btnClass="btnWhite" onClick={(event) => sendForm(event)}>
              Get a discount
            </ButtonUI>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DiscountForm;
