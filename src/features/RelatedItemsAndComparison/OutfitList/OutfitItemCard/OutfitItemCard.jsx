/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
// /* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';
import { useProductStylesQuery, useProductInformationByIdQuery } from '../../../../services/products';
import ListCard from '../../helpers/ListContainer/ListCard.jsx';
import Card from '../../../UI/Card.jsx';
import styles from './OutfitItemCard.module.css';

export default function OutfitItemCard({ productId, handleDeleteOutfit }) {
  const { data, error, isLoading } = useProductInformationByIdQuery(productId);

  const image = 'https://picsum.photos/200';

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  // TODO: prevent event bubbling when x is clicked to delete from outfit list
  return (
    <ListCard
      product={data}
      productId={productId}
      productImage={image}
      actionButtonIcon="❌"
      handleOnClick={handleDeleteOutfit}
    />
  );
}

OutfitItemCard.propTypes = {
  productId: PropTypes.number.isRequired,
  handleDeleteOutfit: PropTypes.func.isRequired,
};
