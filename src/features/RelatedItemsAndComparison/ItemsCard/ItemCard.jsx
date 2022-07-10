/* eslint-disable import/extensions */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../UI/Card.jsx';
import styles from './ItemCard.module.css';

export default function ItemsCard({ product }) {
  return (
    <Card className={styles.product_card} onClick={() => console.log(`${product.name} clicked!!!`)}>
      <div className={styles.product_card_header}>
        <img className={styles.product_img} src="https://picsum.photos/200" alt="nothing" />
        <div className={styles.product_star}> x </div>
      </div>
      <div className={styles.product_card_body}>
        <p>{product.category}</p>
        <p>{product.name}</p>
        {/* TODO: default price needs to change with sales and also styles */}
        <p>${product.default_price}</p>
        <p>**** duck rating here</p>
      </div>
    </Card>
  );
}
// shape === object
ItemsCard.propTypes = {
  product: PropTypes.shape.isRequired,
};
