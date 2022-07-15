/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../../../UI/Card.jsx';
import styles from './ListItemCard.module.css';

export default function ListItemCard({
  product,
  productId,
  productImage,
  handleOnClick,
  averageRating,
  children,
}) {
  return (
    <div className={styles.product_card_ctn}>
      <Card className={styles.product_card}>
        <header className={styles.product_card_header}>
          <Link to={`/product/${productId}`}>
            <img className={styles.product_img} src={productImage} alt={product.name} />
          </Link>
          <button
            type="button"
            className={styles.product_action_button}
            onClick={() => handleOnClick()}
          >
            {children}
          </button>
        </header>
        <footer className={styles.product_card_body}>
          <p>{product.category}</p>
          <p>{product.name}</p>
          <p>${product.default_price}</p>
          <p>{averageRating.toFixed(2)}</p>
        </footer>
      </Card>
    </div>
  );
}
