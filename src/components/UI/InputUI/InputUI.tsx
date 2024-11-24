import React from "react";
import styles from "./InputUI.module.css";
import { IInputField } from "../../../models/IInputField";
import { UseFormRegister } from "react-hook-form";

interface IInputProps {
  field: IInputField;
  register?: UseFormRegister<any>;
}

const InputUI: React.FC<IInputProps> = ({ field, register }) => {
  return (
    <div>
      <label htmlFor={field.id} className={styles["visually-hidden"]}>
        {field.placeholder}
      </label>
      <input
        id={field.id}
        type={field.type}
        placeholder={field.placeholder}
        className={styles.inputField}
        aria-label={field.placeholder}
        required
        {...(register ? register(field.id) : {})}
      />
    </div>
  );
};

export default InputUI;
