import React from 'react';
import '../Overview.module.css';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './AddToCart.module.css';

export default function AddToCart() {
  return (
    <div>
      <form onSubmit={this}>
        <label>
          <select className={styles.size}>
            <option selected="selected">SELECT SIZE</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </label>
        <label>
          <select className={styles.quantity}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <button type="button" className={styles.addToBag}>ADD TO BAG</button>
        <button type="button" className={styles.star}>
          <AiOutlineStar />
        </button>
      </form>
    </div>
  );
}
