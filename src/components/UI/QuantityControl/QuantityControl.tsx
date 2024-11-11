import React, { ChangeEvent, useState } from "react";
import styles from "./QuantityControl.module.css";

const QuantityControl: React.FC = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={handleDecrement} className={styles.buttonMinus}>-</button>
      <input type="number" value={quantity} onChange={handleChange} className={styles.input} />
      <button onClick={handleIncrement} className={styles.buttonPlus}>+</button>
    </div>
  );
};

export default QuantityControl;
