import React, { FC, MouseEvent } from "react";
import styles from "./HeadDiscount.module.css";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { useNavigate } from "react-router-dom";

const HeadDiscount: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.discountSection}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.discountTitle}>Amazing Discounts on Garden Products!</h1>
        <ButtonUI btnClass="btnGreen" onClick={() => navigate("/sales")}>Check out</ButtonUI>
      </div>
    </section>
  );
};

export default HeadDiscount;
