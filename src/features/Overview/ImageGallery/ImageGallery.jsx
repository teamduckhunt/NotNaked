import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useProductStylesQuery } from '../../../services/products.js';
import styles from './ImageGallery.module.css';

export default function ImageGallery({ currentViewItemId }) {
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.currentStyle);

  if (error) {
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const currentImage = curStyle.photos
      ? curStyle.photos[0].thumbnail_url
      : data.results[0].photos[0].thumbnail_url;
    return (
      <div>
        {/* <div>{curStyle}</div> */}
        <div className={styles.picDiv}>
          <img src={currentImage} alt="" className={styles.bigPic} />
        </div>
      </div>
    );
  }
}
