import React from 'react';
import styles from './InfoContact.module.css';

export interface InfoContactProps {
  label: string;
  content: React.ReactNode;
}

export const InfoContact: React.FC<InfoContactProps> = ({ label, content }) => (
  <section className={styles.infoContact}>
    <h3 className={styles.contactLabel}>{label}</h3>
    <div className={styles.contactContent}>{content}</div>
  </section>
);