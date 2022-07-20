/* eslint-disable max-len */
import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaChevronRight, FaChevronLeft, FaChevronUp, FaChevronDown,
} from 'react-icons/fa';
import { useProductStylesQuery } from '../../../services/products.js';
import styles from './ImageGallery.module.css';
import expand from '../pics/expand.png';

// export const imageState = {
//   start: 0,
//   end: 4,
// };

export default function ImageGallery({ currentViewItemId }) {
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.selectedStyle);
  const [current, setCurrent] = useState(0);
  const [picExpanded, setPicExpanded] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  // const { start, end } = state;

  if (error) {
    return <div>There is an error!</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    const currentImage = curStyle.photos
      ? curStyle.photos
      : data.results[0].photos;
    const length = curStyle.photos ? curStyle.photos.length : data.results[0].photos.length;

    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const nextSlideMini = (length) => {
      if (current > 5 && current < length) {
        dispatch({ type: 'INCREMENT' });
      }
      index = length - 1;
    };

    const prevSlideMini = () => {
      index = 0;
    };

    const toggleClass = () => {
      setPicExpanded(!picExpanded);
      // console.log(picExpanded);
    };

    const miniPicWasClicked = (index) => {
      setCurrent(index);
    };

    const bigPicClass = picExpanded ? styles.expanded : styles.normal;

    const sliceFunction = (start, end) => {
      if (start < 0 && end > 0) {
        return currentImage.slice(start).concat(currentImage.slice(0, end));
      }
      if (start < 0 && end < 0) {
        setEnd(length - 1);
        setStart(length - 6);
      }
      return currentImage.slice(start, end);
    };

    return (
      <div className={bigPicClass}>
        <button onClick={() => { toggleClass(); }} className={styles.expandButton} type="button">
          <img src={expand} alt="" className={styles.expandPic} />
        </button>
        <div className={styles.miniCarousel}>
          <FaChevronUp onClick={prevSlideMini} className={styles.upArrow} />
          {sliceFunction(start, end).map((photo, index) => {
            if (current === index) {
              return (
                <div>
                  <img src={currentImage[current].thumbnail_url} className={styles.miniCarouselPic} alt="" />
                  <div className={styles.currentPhotoMarker} />
                </div>
              );
            }
            if (index < 5) {
              return (
                <img src={photo.thumbnail_url} className={styles.miniCarouselPic} onClick={() => { miniPicWasClicked(index); }} alt="" />
              );
            }
          })}
          <FaChevronDown onClick={nextSlideMini} className={styles.downArrow} />
        </div>
        <div>
          <FaChevronLeft className={styles.leftArrow} onClick={prevSlide} />
        </div>
        <div className={styles.actualPic}>
          {currentImage.map((photo, index) => (
            index === current && <img src={photo.url} className={styles.actualPicInside} onClick={() => { miniPicWasClicked(index); }} alt="" />
          ))}
        </div>
        <div>
          <FaChevronRight className={styles.rightArrow} onClick={nextSlide} />
        </div>
        <div />
      </div>
    );
  }
}
