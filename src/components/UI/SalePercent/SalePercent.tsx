import React from "react";
import styles from "./SalePercent.module.css";

interface SalePercentProps {
  price: number;
  discont_price: number;
}

const SalePercent: React.FC<SalePercentProps> = ({ price, discont_price }) => {

  const salePercent = Math.round((1 - discont_price / price) * 100);

  return ( 
    <div>
      {salePercent > 0 && salePercent < 100 && <div className={styles.saleTag}>-{salePercent}%</div>}
    </div> 
  );
};

export default SalePercent;
