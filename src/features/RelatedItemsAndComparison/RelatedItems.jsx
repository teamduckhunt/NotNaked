/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRelatedItems } from './relatedItemsSlice.jsx';
import { useAllProductsQuery, useProductsByPageNCountQuery } from '../../services/products';
import Button from '../UI/Button.jsx';

export default function RelatedItemsAndComparison() {
  const relatedItems = useSelector((state) => state.relatedItems.relatedItems);
  const dispatch = useDispatch();
  const { data: allProductsData, error: productError, isLoading: isProductLoading } = useProductsByPageNCountQuery(1, 10);
  let products = null;
  if (productError) {
    products = <>Oh no, there was an error</>;
  } else if (isProductLoading) {
    products = <>Loading...</>;
  } else if (allProductsData) {
    products = allProductsData.map((product, i) => (
      <li key={i}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </li>
    ));
  }

  // const { data: allProductsData, error: productError, isLoading: isProductLoading } = useAllProductsQuery();
  // let products = null;
  // if (productError) {
  //   products = <>Oh no, there was an error</>;
  // } else if (isProductLoading) {
  //   products = <>Loading...</>;
  // } else if (allProductsData) {
  //   products = allProductsData.map((product) => (
  //     <li>
  //       <h4>{product.name}</h4>
  //       <p>{product.description}</p>
  //     </li>
  //   ));
  // }

  return (
    <div>
      <h1>I am RelatedItemsAndComparison</h1>
      <div>
        <h2>Getting all products via RTK Query</h2>
        <ol>{products}</ol>
      </div>
      <div>
        <p>WorkingWithRedux</p>
        <ul>
          {relatedItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <Button
          onClick={() => dispatch(addRelatedItems('newItem'))}
        >
          Add to the list
        </Button>
      </div>
    </div>
  );
}
