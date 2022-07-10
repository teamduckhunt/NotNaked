/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable import/extensions */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addRelatedItems } from './relatedItemsSlice.jsx';
import { useAllProductsQuery, useProductsByPageNCountQuery } from '../../services/products';
import RelatedProductList from './RelatedProductsList/RelatedProductList.jsx';
import Button from '../UI/Button.jsx';
import Card from '../UI/Card.jsx';
import styles from './RelatedItems.module.css';

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
    products = <RelatedProductList productList={allProductsData} />;
  }

  return (
    <div>
      <h1>I am RelatedItemsAndComparison</h1>
      <div>
        <h2>Getting all products via RTK Query</h2>
        <ul className={styles.product_list}>{products}</ul>
      </div>
      <div>
        <p>WorkingWithRedux</p>
        <ul>
          {relatedItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <Button onClick={() => dispatch(addRelatedItems('newItem'))}>
          Add to the list
        </Button>
      </div>
    </div>
  );
}
