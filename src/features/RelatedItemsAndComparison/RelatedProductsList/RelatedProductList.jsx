/* eslint-disable import/extensions */
import React from 'react';
import ItemCard from '../helpers/ItemCard/ItemCard.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useRelatedProductsIdQuery } from '../../../services/products';

export default function RelatedProductList() {
  // TODO: get current page's product id and use that as input to useRelatedProducts
  const currentDetailPageId = 40344;
  const { data, error, isLoading } = useRelatedProductsIdQuery(currentDetailPageId);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    // This data is just id so need to loop through to
    console.log(data);
    return (
      <ListContainer>
        {data.map((productId) => <ItemCard key={productId} productId={productId} />)}
      </ListContainer>
    );
  }
}
