import React, {FC, MouseEvent, ReactNode} from "react";
import styles from "./ButtonUI.module.css";

interface buttonProps {
  btnClass?: string;
  children?: ReactNode,
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const GardenPromotion: FC<buttonProps> = ({ btnClass, children, onClick }) => {
  return (
    <button className={[styles.btnUI, btnClass && styles[btnClass]].join(' ')} onClick={onClick}>
      {children}
    </button>
  );
};

export default GardenPromotion;
