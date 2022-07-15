import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useProductStylesQuery } from '../../../services/products.js';
import styles from './ImageGallery.module.css';
// import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

export default function ImageGallery({ currentViewItemId }) {
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.selectedStyle);
  const [current, setCurrent] = useState(0);

  if (error) {
    console.log(error);
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log('curstyle ', curStyle);
    const currentImage = curStyle.photos
      ? curStyle.photos
      : data.results[0].photos;
    const length = curStyle.photos ? curStyle.photos.length : undefined;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
    console.log('data ', data);

    return (
      <div className={styles.picDiv}>
        <div>
          <button className={styles.leftArrow} onClick={prevSlide} type="button">{'<'}</button>
          <button className={styles.rightArrow} onClick={nextSlide} type="button">{'>'}</button>
          {currentImage.map((photo, index) => (
            <div key={index}>
              {index === current && <img src={photo.thumbnail_url} />}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

// console.log('data ', data);
// console.log('curstyle', curStyle);
// const currentImage = curStyle.photos
//   ? curStyle.photos[0].thumbnail_url
//   : data.results[0].photos[0].thumbnail_url;
// return (
//   <div className={styles.picDiv}>
//     <img src={currentImage} alt="" className={styles.bigPic} />
//   </div>
// );

{ /* <div className={styles.picDiv}>
<StyledSlider>
  <button className={styles.leftArrow} onClick={prevSlide} type="button">{'<'}</button>
  <button className={styles.rightArrow} onClick={nextSlide} type="button">{'>'}</button>
  {curStyle.photos && curStyle.photos.map((photo, index) => (
    <div key={index}>
      {index === current && <img src={photo.thumbnail_url} />}
    </div>
  ))}
</StyledSlider>
</div> */ }
