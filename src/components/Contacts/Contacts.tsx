import React from "react";
import { InfoContact } from "../UI/InfoContact/InfoContact";
import styles from "./Contacts.module.css";
import HeadBlock from "../UI/HeadBlock/HeadBlock";

export const Contacts: React.FC = () => {
  return (
    <footer className={['section',styles.contactSection].join(' ')}>
      <HeadBlock title="Contact"/>

      <div className={styles.contactsContainer}>
        <div className={styles.infoGrid}>
          <InfoContact label="Phone" content="+7 (499) 350-66-04" />
          <InfoContact
            label="Socials"
            content={
              <div className={styles.socialIcons}>
                <a href="https://www.instagram.com/" className={styles.socialIcon} target="blank">
                  <img src="/images/insta.svg" alt="Social media icon" className={styles.socialIcon} />
                </a>
                <a href="https://www.whatsapp.com/?l=ru" className={styles.socialIcon} target="blank">
                  <img src="/images/whatsapp.svg" alt="Social media icon" className={styles.socialIcon} />
                </a>
              </div>
            }
          />
        </div>

        <div className={styles.infoGrid}>
          <InfoContact label="Address" content="Dubininskaya Ulitsa, 96, Moscow, Russia, 115093" />
          <InfoContact label="Working Hours" content="24 hours a day" />
        </div>
      </div>

      <div className={styles.map}>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4ca63db100fac6f336951bc28d40fba957b2a157156b17f8093a2b604d83382f&amp;source=constructor" width="100%" height="350"></iframe>
      </div>
    </footer>
  );
};
