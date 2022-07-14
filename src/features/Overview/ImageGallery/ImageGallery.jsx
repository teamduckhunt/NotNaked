import React from 'react';
import { useProductStylesQuery } from '../../../services/products.js';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ currentViewItemId }) {
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);

  if (error) {
    console.log(error);
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const currentImage = data.results[0].photos[0].thumbnail_url;
    return (
      <div className={styles.picDiv}>
        <img src={currentImage} alt="" className={styles.bigPic} />
      </div>
    );
  }
}
