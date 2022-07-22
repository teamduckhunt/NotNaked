/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../services/products';
import ListItemCard from '../helpers/ListItemCard/ListItemCard.jsx';
import { useGetReviewMetadataQuery } from '../../../services/reviews';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';
import classes from './OutfitList.module.css';
import LoadingSpinner from '../../UI/LoadingSpinner.jsx';
import ErrorMessage from '../../UI/ErrorMessage.jsx';

export default function OutfitListItem({ productId, handleDeleteOutfit }) {
  const { data, error, isLoading } = useProductInformationByIdQuery(productId);
  const { data: metaData, isLoading: metaLoading } = useGetReviewMetadataQuery(productId);
  const { data: styles, isLoading: stylesLoading } = useProductStylesQuery(productId);
  const image = styles && (styles.results[0].photos[0].thumbnail_url || 'https://picsum.photos/200');
  const imageAvailable = image === 'https://picsum.photos/200';
  const rating = metaData ? getAverageRating(metaData) : 0;
  if (error) {
    return <div className={classes.no_product}><ErrorMessage /></div>;
  }

  if (isLoading || stylesLoading || metaLoading) {
    return <div className={classes.no_product}><LoadingSpinner /></div>;
  }

  return (
    <ListItemCard
      product={data}
      productId={productId}
      averageRating={rating}
      productImage={image.replace(/(?<=w=)(.*)(?=&)/, '243')}
      imageAvailable={imageAvailable}
      handleOnClick={handleDeleteOutfit}
    >
      <AiFillCloseCircle />
    </ListItemCard>
  );
}

OutfitListItem.propTypes = {
  productId: PropTypes.number.isRequired,
  handleDeleteOutfit: PropTypes.func.isRequired,
};
