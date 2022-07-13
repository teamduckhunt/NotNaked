/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import styles from './Overview.module.css';

export default function Overview({ currentViewItemId }) {
  return (
    <div>
      <div className={styles.overviewHeaders}>
        <div className={styles.imagegallery}>
          <ImageGallery />
        </div>
        <div className={styles.productinfo}>
          <ProductInfo />
          <StyleSelector />
          <AddToCart />
        </div>
      </div>
      <div className={styles.productdetails}>
        <ProductDetails />
      </div>
    </div>
  );
}
