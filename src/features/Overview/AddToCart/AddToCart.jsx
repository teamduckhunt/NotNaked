/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useSelector, getState } from 'react-redux';
import { PinterestShareButton, TwitterShareButton, FacebookShareButton } from 'react-share';
import { useProductStylesQuery } from '../../../services/products.js';
import '../Overview.module.css';
import { AiOutlineStar } from 'react-icons/ai';
import styles from './AddToCart.module.css';
import twitter from '../pics/twitter.png';
import facebook from '../pics/facebook.png';
import pinterest from '../pics/pinterest.png';

export default function AddToCart({ currentViewItemId }) {
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.selectedStyle);
  // const curStyle = getState(selectedStyle);
  const [size, setSize] = useState(0);

  // skus:
  //  1394769: {quantity: 8, size: 'XS'}
  //  1394770: {quantity: 16, size: 'S'}
  //  1394771: {quantity: 17, size: 'M'}
  //  1394772: {quantity: 10, size: 'L'}
  //  1394773: {quantity: 15, size: 'XL'}
  //  1394774: {quantity: 4, size: 'XL'}

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!!</div>;
  }

  const sizeSelected = (event) => {
    setSize(event.target.value);
  };

  if (data) {
    return (
      <div data-testid="addtocart">
        <form onSubmit={this}>
          <label>
            <select className={styles.size} onChange={(event) => { sizeSelected(event); }}>
              <option selected="selected">SELECT SIZE</option>
              {curStyle.skus && Object.keys(curStyle.skus).map((item, index) => {
                if (curStyle.skus[item].quantity > 0) {
                  return <option value={curStyle.skus[item].size} key={index}>{curStyle.skus[item].size}</option>;
                }
              })}
            </select>
          </label>
          <label>
            <select className={styles.quantity}>
              <option defaultValue="-">-</option>
              {size ? Object.keys(curStyle.skus).map((item) => {
                if (curStyle.skus[item].size === size) {
                  const amount = curStyle.skus[item].quantity;
                  const quant = amount > 15 ? [...Array(15).keys()] : [...Array(amount).keys()];
                  quant.map((item, index) => <option value={item + 1} key={index}>{item + 1}</option>);
                }
              }) : null}
            </select>
          </label>
          <button type="button" className={styles.addToBag}>ADD TO BAG</button>
          <button type="button" className={styles.star}>
            <AiOutlineStar />
          </button>
        </form>
        <div className={styles.share}>
          <TwitterShareButton url="" quote="Hey, check out this item from !Naked!" hashtag="#codingrox">
            <img src={twitter} className={styles.twitter} alt="twitter logo" />
          </TwitterShareButton>
          <FacebookShareButton url="" quote="Hey, check out this item from !Naked!">
            <img src={facebook} className={styles.facebook} alt="facebook logo" />
          </FacebookShareButton>
          <PinterestShareButton url="" quote="Hey, check out this item from !Naked!">
            <img src={pinterest} className={styles.pinterest} alt="pinterest logo" />
          </PinterestShareButton>
        </div>
      </div>
    );
  }
}
