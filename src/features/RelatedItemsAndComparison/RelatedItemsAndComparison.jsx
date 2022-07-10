// && should I be creating a state with this data?
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductList from './RelatedProductsList/RelatedProductList.jsx';
import OutfitList from './OutfitList/OutfitList.jsx';
// import styles from './RelatedItemsAndComparison.module.css';

export default function RelatedItemsAndComparison({ currentViewItemId }) {
  return (
    <>
      <RelatedProductList currentViewItemId={currentViewItemId} />
      <OutfitList />
    </>
  );
}

RelatedItemsAndComparison.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};

// TODO: Set up to get related products of a product
// && should I be creating a state with this data?40344
