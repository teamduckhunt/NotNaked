/* eslint-disable max-len */
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
  let curStyle = useSelector((state) => state.productStyles.selectedStyle);
  const [size, setSize] = useState(null);
  const [addedToBagDiv, setAddedToBagDiv] = useState(null);
  const [sizeWasSelected, setSizeWasSelected] = useState(false);
  const [defaultQuant, setDefaultQuant] = useState('-');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!!</div>;
  }

  const sizeSelected = (event) => {
    setDefaultQuant(1);
    setSizeWasSelected(true);
    setSize(event.target.value);
  };

  const addedToBag = () => {
    if (sizeWasSelected) {
      setAddedToBagDiv(<div className={styles.addedToCart}>Item was added to cart!</div>);
    } else {
      setAddedToBagDiv(<div className={styles.pleaseSelectSize}>Please select a size.</div>);
    }
    setTimeout(() => { setAddedToBagDiv(null); }, 3000);
  };

  if (data) {
    if (curStyle.style_id === undefined) {
      curStyle = data.results[0];
    }

    let quantList;

    return (
      <div data-testid="addtocart">
        <div>{addedToBagDiv}</div>
        <form onSubmit={this}>
          <label>
            <select className={styles.size} defaultValue="SELECT SIZE" onChange={(event) => { sizeSelected(event); }}>
              <option>SELECT SIZE</option>
              {curStyle.skus && Object.keys(curStyle.skus).map((item, index) => {
                if (curStyle.skus[item].quantity > 0) {
                  return <option value={curStyle.skus[item].size} key={index}>{curStyle.skus[item].size}</option>;
                }
              })}
            </select>
          </label>
          <label>
            <select className={styles.quantity}>
              <option defaultValue="">{defaultQuant}</option>
              {size ? Object.keys(curStyle.skus).map((item) => {
                if (curStyle.skus[item].size === size) {
                  const amount = curStyle.skus[item].quantity;
                  const quant = amount > 15 ? [...Array(15).keys()] : [...Array(amount).keys()];
                  quantList = quant.map((item, index) => <option value={item + 1} key={index}>{item + 1}</option>);
                }
              }) : null}
              {quantList}
            </select>
          </label>
          <button type="button" className={styles.addToBag} onClick={() => { addedToBag(); }}>ADD TO BAG</button>
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
