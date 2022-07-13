/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import RelatedProductList from './RelatedProductsList/RelatedProductList.jsx';
import OutfitList from './OutfitList/OutfitList.jsx';

export default function RelatedItemsAndComparison({ currentViewItemId }) {
  return (
    <>
      <RelatedProductList currentViewItemId={currentViewItemId} />
      <OutfitList currentViewItemId={currentViewItemId} />
    </>
  );
}

RelatedItemsAndComparison.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
