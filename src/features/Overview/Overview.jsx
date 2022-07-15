/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/extensions
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import StyleList from './StyleSelector/StyleList.jsx';
import AddToCart from './AddToCart/AddToCart.jsx';
import styles from './Overview.module.css';

export default function Overview({ currentViewItemId }) {
  return (
    <div>
      <div className={styles.overviewHeaders}>
        <div className={styles.imagegallery}>
          <ImageGallery currentViewItemId={currentViewItemId} />
        </div>
        <div className={styles.productinfo}>
          <ProductInfo currentViewItemId={currentViewItemId} />
          <StyleList currentViewItemId={currentViewItemId} />
          <AddToCart currentViewItemId={currentViewItemId} />
        </div>
      </div>
      <div className={styles.productdetails}>
        <ProductDetails currentViewItemId={currentViewItemId} />
      </div>
    </div>
  );
}
