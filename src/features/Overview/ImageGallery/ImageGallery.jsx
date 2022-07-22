/* eslint-disable max-len */
import React, { useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FaChevronRight, FaChevronLeft, FaChevronUp, FaChevronDown,
} from 'react-icons/fa';
import { useProductStylesQuery } from '../../../services/products.js';
import styles from './ImageGallery.module.css';
import expand from '../pics/expand.png';

export default function ImageGallery({ currentViewItemId }) {
  const { data, error, isLoading } = useProductStylesQuery(currentViewItemId);
  const curStyle = useSelector((state) => state.productStyles.selectedStyle);
  const [current, setCurrent] = useState(0);
  const [picExpanded, setPicExpanded] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  let upArrow = null;
  let downArrow = null;

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
      setCurrent((cur) => (cur === length - 1 ? 0 : cur + 1));
      if (current >= end - 1) {
        setStart(current + 1);
        setEnd(current + 4);
      }
    };

    const prevSlide = () => {
      setCurrent((cur) => (cur === 0 ? length - 1 : cur - 1));
      if (current <= start) {
        setStart(0);
        setEnd(4);
      }
    };

    const nextSlideMini = () => {
      setStart(start + 4);
      setEnd((en) => en + 4);
    };

    const prevSlideMini = () => {
      setStart(start - 4);
      setEnd((en) => en - 4);
    };

    const toggleClass = () => {
      setPicExpanded(!picExpanded);
    };

    const miniPicWasClicked = (index) => {
      setCurrent(index);
    };

    const bigPicClass = picExpanded ? styles.expanded : styles.normal;

    if (start !== 0) {
      upArrow = <FaChevronUp onClick={prevSlideMini} className={styles.upArrow} />;
    }

    if (end < length) {
      downArrow = <FaChevronDown onClick={nextSlideMini} className={styles.downArrow} />;
    }

    return (
      <div className={bigPicClass}>
        <button onClick={() => { toggleClass(); }} className={styles.expandButton} type="button">
          <img src={expand} alt="expanded version of style picture" className={styles.expandPic} />
        </button>
        <div className={styles.miniCarousel}>
          {upArrow}
          {console.log(currentImage)}
          {currentImage.map((photo, index) => {
            if (index < start || index >= end) {
              return '';
            }

            if (current === index) {
              return (
                <div key={index}>
                  <img src={photo.thumbnail_url.replace(/(?<=w=)(.*)(?=&)/, '60')} className={styles.miniCarouselPic} alt="picture of style" />
                  <div className={styles.currentPhotoMarker} />
                </div>
              );
            }
            return (
              <img src={photo.thumbnail_url} className={styles.miniCarouselPic} onClick={() => { miniPicWasClicked(index); }} alt="picture of style" key={index} />
            );
          })}
          {downArrow}
        </div>
        <div>
          <FaChevronLeft className={styles.leftArrow} onClick={prevSlide} />
        </div>
        <div className={styles.actualPic}>
          {currentImage.map((photo, index) => (
            index === current && <img src={photo.url.replace(/(?<=w=)(.*)(?=&)/, '400')} className={styles.actualPicInside} onClick={() => { miniPicWasClicked(index); }} alt="" key={index} />
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
