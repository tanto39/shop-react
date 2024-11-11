import React from "react";
import styles from "./InputUI.module.css";
import { IInputField } from "../../../models/IInputField";

interface IInputProps {
  field: IInputField;
}

const InputUI: React.FC<IInputProps> = ({ field }) => {

  return (
    <div>
      <label htmlFor={field.id} className={styles["visually-hidden"]}>
        {field.placeholder}
      </label>
      <input id={field.id} type={field.type} placeholder={field.placeholder} className={styles.inputField} aria-label={field.placeholder} />
    </div>
  );
};

export default InputUI;
