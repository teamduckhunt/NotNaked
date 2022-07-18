import React from 'react';
import styles from './Header.module.css';
import logo from './4.png';
import name from './5.png';

export default function Header() {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <img src={logo} alt="" className={styles.logo} />
          <img src={name} alt="" className={styles.name} />
        </div>
        <input type="text" className={styles.search} />
      </div>
      <div className={styles.announcement}>
        SITE WIDE ANNOUNCEMENT MESSAGE - SALE! / DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </div>
    </div>
  );
}
