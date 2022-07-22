/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../services/products';
import ListItemCard from '../helpers/ListItemCard/ListItemCard.jsx';
import ComparisonModal from '../ComparisonModal/ComparisonModal.jsx';
import { useGetReviewMetadataQuery } from '../../../services/reviews';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';
import IronMan from '../../../../assets/iron-man.svg';
import classes from '../helpers/ListItemCard/ListItemCard.module.css';
import LoadingSpinner from '../../UI/LoadingSpinner.jsx';

export default function RelatedProductItem({ productId, currentViewItemId }) {
  const [toggleModal, setToggleModal] = useState(false);
  const { data, error, isLoading } = useProductInformationByIdQuery(productId);
  const { data: metaData, isLoading: metaLoading } = useGetReviewMetadataQuery(productId);
  const { data: styles, isLoading: stylesLoading } = useProductStylesQuery(productId);
  const image = styles && (styles.results[0].photos[0].thumbnail_url || 'https://picsum.photos/200');
  const imageAvailable = image === 'https://picsum.photos/200';
  const handleModalToggle = () => {
    setToggleModal(!toggleModal);
  };

  if (error) {
    return <div className={classes.no_product}>Oh no, there was an error</div>;
  }

  if (isLoading || stylesLoading || metaLoading) {
    return <div className={classes.no_product}><LoadingSpinner /></div>;
  }
  const averageRating = metaData ? getAverageRating(metaData) : 0;
  const InfinityStone = <img className={classes.ironMan2} src={IronMan} alt="Iron Man" />;
  return (
    <>
      {toggleModal && (
        <ComparisonModal
          handleModalToggle={handleModalToggle}
          currentViewItemId={currentViewItemId}
          relatedItemId={productId}
        />
      )}
      <ListItemCard
        product={data}
        averageRating={averageRating}
        productId={productId}
        productImage={image.replace(/(?<=w=)(.*)(?=&)/, '243')}
        imageAvailable={imageAvailable}
        productSalesPrice={styles.results[0].sale_price}
        handleOnClick={handleModalToggle}
      >
       {Number.isNaN(averageRating) ? InfinityStone : <AiFillStar />}
      </ListItemCard>
    </>
  );
}

RelatedProductItem.propTypes = {
  productId: PropTypes.number.isRequired,
  currentViewItemId: PropTypes.number.isRequired,
};
