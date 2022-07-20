/* eslint-disable import/extensions */
import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import RelatedProductItem from './RelatedProductItem.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useRelatedProductsIdQuery } from '../../../services/products';
import { relatedReducer, relatedState } from './relatedProductReducer';
import styles from '../OutfitList/OutfitList.module.css';
import LoadingSpinner from '../../UI/LoadingSpinner.jsx';

export default function RelatedProductList({ currentViewItemId }) {
  const { data, error, isLoading } = useRelatedProductsIdQuery(currentViewItemId);
  const [localState, dispatchLocalState] = useReducer(relatedReducer, relatedState);
  const { start, end } = localState;
  useEffect(() => {
    dispatchLocalState({ type: 'RESET' });
  }, [currentViewItemId]);

  const handleCarouselControl = (control) => {
    if (control === 'PREV' && start !== 0 && start > 0) {
      dispatchLocalState({ type: control });
    }
    if (control === 'NEXT' && end !== data.length && end < data.length) {
      dispatchLocalState({ type: control });
    }
  };

  const filteredData = data !== undefined ? Object.keys(data.reduce((keys, id) => {
    if (id === currentViewItemId) {
      return keys;
    }
    return { ...keys, [id]: true };
  }, {})) : null;

  return (
    <div className={styles.list_container}>
      <h3 className={styles.list_title}>Related Products</h3>
      <ListContainer
        start={start}
        end={end}
        length={(filteredData && filteredData.length) || 0}
        handleCarouselControl={handleCarouselControl}
      >
        {error && <div className={styles.no_product}>Oh no, there was an error</div>}
        {isLoading && <div className={styles.no_product}><LoadingSpinner /></div>}
        {data !== undefined && data.length === 0
        && <p className={styles.no_product}>There are no related products...</p>}
        {data !== undefined && data.length > 0
        && filteredData
          .slice(start, end)
          .map((productId) => (
            <RelatedProductItem
              id={productId}
              key={productId}
              productId={+productId}
              currentViewItemId={currentViewItemId}
            />
          ))}
      </ListContainer>
    </div>
  );
  }


RelatedProductList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
