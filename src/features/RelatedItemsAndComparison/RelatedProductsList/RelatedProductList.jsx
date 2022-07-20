/* eslint-disable import/extensions */
import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import RelatedProductItem from './RelatedProductItem.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useRelatedProductsIdQuery } from '../../../services/products';
import { relatedReducer, relatedState } from './relatedProductReducer';
import styles from '../OutfitList/OutfitList.module.css';

export default function RelatedProductList({ currentViewItemId }) {
  const { data, error, isLoading } = useRelatedProductsIdQuery(currentViewItemId);
  const [localState, dispatchLocalState] = useReducer(relatedReducer, relatedState);
  const { start, end } = localState;
  useEffect(() => {
    dispatchLocalState({ type: 'RESET' });
  }, [currentViewItemId]);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleCarouselControl = (control) => {
    if (control === 'PREV' && start !== 0 && start > 0) {
      dispatchLocalState({ type: control });
    }
    if (control === 'NEXT' && end !== data.length && end < data.length) {
      dispatchLocalState({ type: control });
    }
  };

  if (data) {
    const filteredData = Object.keys(data.reduce((keys, id) => {
      if (id === currentViewItemId) {
        return keys;
      }
      return { ...keys, [id]: true };
    }, {}));

    return (
      <div className={styles.list_container}>
        <h3 className={styles.list_title}>Related Products</h3>
        {data.length === 0 && <p>There are no related Products...</p>}
        {data.length > 0 && (
          <ListContainer
            start={start}
            end={end}
            length={filteredData.length}
            handleCarouselControl={handleCarouselControl}
          >
            {filteredData
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
        )}
      </div>
    );
  }
}

RelatedProductList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
