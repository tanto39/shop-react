import React from "react";
import styles from "./Page404.module.css";
import { useNavigate } from "react-router-dom";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";

const Page404: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.notFoundContainer}>
      <section className={styles.imageContainer}>
        <img src="/images/nf1.svg" alt="" className={styles.sideImage} />
        <img src="/images/nf2.png" alt="404 Not Found" className={styles.centerImage} />
        <img src="/images/nf1.svg" alt="" className={styles.sideImage} />
      </section>
      <section className={styles.textContainer}>
        <div className={styles.textWrapper}>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            We're sorry, the page you requested could not be found.
            <br />
            Please go back to the homepage.
          </p>
        </div>
        <ButtonUI btnClass="btnGreen" onClick={() => navigate("/")}>Go home</ButtonUI>
      </section>
    </main>
  );
};

export default Page404;
