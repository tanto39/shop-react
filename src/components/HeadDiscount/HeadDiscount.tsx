import React, { FC, MouseEvent } from "react";
import styles from "./HeadDiscount.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

const HeadDiscount: FC = () => {
  const getDiscount = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.discountSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.discountTitle}>Amazing Discounts on Garden Products!</h1>
        <ButtonUI btnClass="btnGreen" onClick={(event) => getDiscount(event)}>Check out</ButtonUI>
      </div>
    </section>
  );
};

export default HeadDiscount;
