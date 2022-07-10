/* eslint-disable import/extensions */
import React from 'react';
import ItemsCard from '../helpers/ItemsCard/ItemCard.jsx';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { useProductsByPageNCountQuery } from '../../../services/products';

export default function RelatedProductList() {
  const { data, error, isLoading } = useProductsByPageNCountQuery(1, 10);

  if (error) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    return (
      <ListContainer>
        {data.map((product) => <ItemsCard key={product.id} product={product} />)}
      </ListContainer>
    );
  };
}
