/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */

import React from 'react';
import PropTypes from 'prop-types';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../services/products';
import ListItemCard from '../helpers/ListItemCard/ListItemCard.jsx';

export default function OutfitListItem({ productId, handleDeleteOutfit }) {
  const { data, error, isLoading } = useProductInformationByIdQuery(productId);
  const { data: styles } = useProductStylesQuery(productId);
  const image = styles?.results[0].photos[0].thumbnail_url || 'https://picsum.photos/200';

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <ListItemCard
      product={data}
      productId={productId}
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
