import React from 'react';
import styles from './OrderConfirmation.module.css';

interface MessageModalProps {
  title: string;
  message: string;
}

const MessageModal: React.FC<MessageModalProps> = ({ title, message }) => {
  return (
    <section className={styles.popup}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
      </div>
      <div className={styles.close}>×</div>
    </section>
  );
};

export default MessageModal;