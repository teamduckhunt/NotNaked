/* eslint-disable import/extensions */
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import RelatedProductItem from './RelatedProductItem.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useRelatedProductsIdQuery } from '../../../services/products';

const initialState = {
  start: 0,
  end: 4,
};

const reducer = ({ start, end }, action) => {
  switch (action.type) {
    case 'next':
      return {
        start: start + 4,
        end: end + 4,
      };
    case 'prev':
      return {
        start: start > 0 ? start - 4 : start,
        end: end > 4 ? end - 4 : end,
      };
    default:
      throw new Error('Invalid request for carousel');
  }
};
export default function RelatedProductList({ currentViewItemId }) {
  const { data, error, isLoading } = useRelatedProductsIdQuery(currentViewItemId);
  const [localState, dispatchLocalState] = useReducer(reducer, initialState);
  const { start, end } = localState;

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  const handleCarouselControl = (control) => {
    if (control === 'prev' && start !== 0 && start > 0) {
      dispatchLocalState({ type: control });
    }
    if (control === 'next' && end !== data.length && end < data.length) {
      dispatchLocalState({ type: control });
    }
  };

  if (data) {
    const filteredData = data.reduce((keys, id) => ({ ...keys, [id]: true }), {});
    return (
      <div>
        <h3>My Related Products</h3>
        {data.length === 0 && <p>There are no related Products...</p>}
        {data.length > 0 && (
          <ListContainer
            start={start}
            end={end}
            length={data.length}
            handleCarouselControl={handleCarouselControl}
          >
            {Object.keys(filteredData)
              .slice(start, end)
              .map((productId) => (
                <RelatedProductItem
                  id={productId}
                  key={productId}
                  productId={productId}
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
