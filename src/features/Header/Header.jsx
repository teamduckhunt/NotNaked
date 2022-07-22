import React from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/duckLogo.png';
import name from '../../../assets/nakedLogo.png';

export default function Header() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.brandLogo}>
          <img src={logo} alt="" className={styles.logo} />
          <img src={name} alt="" className={styles.logo} />
        </div>
        {/* <input type="text" className={styles.search} /> */}
      </div>
      {/* <div className={styles.announcement}>
        SITE WIDE ANNOUNCEMENT MESSAGE - SALE! / DISCOUNT OFFER - NEW PRODUCT HIGHLIGHT
      </div> */}
    </>
  );
}
