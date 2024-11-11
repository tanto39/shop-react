import React, { useState } from 'react';
import styles from './CheckboxUI.module.css';

interface ICheckboxUIProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxUI: React.FC<ICheckboxUIProps> = ({ checked = false, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <div
      className={`${styles.checkbox} ${isChecked ? styles.checked : ''}`}
      onClick={handleClick}
    >
      {isChecked && <div className={styles.checkmark} />}
    </div>
  );
};

export default CheckboxUI;
