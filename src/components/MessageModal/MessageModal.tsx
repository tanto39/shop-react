import React from "react";
import styles from "./MessageModal.module.css";
import { IMessage } from "../../store/slices/message";

interface IMessageModalProps {
  type: string,
  title: string,
  children: React.ReactNode;
}

const MessageModal: React.FC<IMessageModalProps> = ({ type, title, children }) => {
  return (
    <div>
      <section className={styles.popup}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.message}>
            {children}
          </div>
        </div>
        <div className={styles.close}></div>
      </section>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default MessageModal;
