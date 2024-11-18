import React, { ChangeEvent, useState } from "react";
import styles from "./QuantityControl.module.css";

interface IQuantityControlProps {
  disabled?: boolean,
  onChange: (quantity: number) => void
}

const QuantityControl: React.FC<IQuantityControlProps> = ({disabled, onChange}) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1 && !disabled) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity); 
      onChange(newQuantity);
    }
  };

  const handleIncrement = () => {
    if (disabled) return
    const newQuantity = quantity + 1; 
    setQuantity(newQuantity); 
    onChange(newQuantity);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
      onChange(value);
    }
  };

  return (
    <div className={`${styles.quantity} ${disabled && styles.disabled}`}>
      <button onClick={handleDecrement} className={styles.buttonMinus}></button>
      <input type="number" value={quantity} onChange={handleChange} className={styles.input} />
      <button onClick={handleIncrement} className={styles.buttonPlus}></button>
    </div>
  );
};

export default QuantityControl;
