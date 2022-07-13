/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React from 'react';
import PropTypes from 'prop-types';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../services/products';
import ListItemCard from '../helpers/ListItemCard/ListItemCard.jsx';
import { useGetReviewMetadataQuery } from '../../../services/reviews';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';

export default function OutfitListItem({ productId, handleDeleteOutfit }) {
  const { data, error, isLoading } = useProductInformationByIdQuery(productId);
  const {data: metaData, isLoading: metaLoading} = useGetReviewMetadataQuery(productId);
  const { data: styles, isLoading: stylesLoading } = useProductStylesQuery(productId);
  const image = styles?.results[0].photos[0].thumbnail_url || 'https://picsum.photos/200';

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading || stylesLoading || metaLoading) {
    return <>Loading...</>;
  }
  console.log(metaData);
  const averageRating = getAverageRating(metaData);


  return (
    <ListItemCard
      product={data}
      productId={productId}
      averageRating={averageRating}
      productImage={image}
      actionButtonIcon="❌"
      handleOnClick={handleDeleteOutfit}
    />
  );
}

OutfitListItem.propTypes = {
  productId: PropTypes.number.isRequired,
  handleDeleteOutfit: PropTypes.func.isRequired,
};
