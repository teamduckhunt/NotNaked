/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../../../UI/Card.jsx';
import RatingToDuckFeet from '../../../../helpers/RatingToDuckFeet.jsx';
import styles from './ListItemCard.module.css';

export default function ListItemCard({
  product,
  productId,
  productImage,
  handleOnClick,
  averageRating,
  children,
}) {
  const handleProductClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === 'product') {
      handleOnClick();
      e.stopPropagation();
    }
  };

  return (
    <div className={styles.product_card_ctn}>
      <Card className={styles.product_card} style={{ backgroundImage: `url(${productImage})` }}>
        <Link to={`/product/${productId}`}>
          <header className={styles.product_card_header}>
            <button
              type="button"
              id="product"
              className={styles.product_action_button}
              onClick={handleProductClick}
            >
              {children}
            </button>
          </header>
        </Link>
        <footer className={styles.product_card_body}>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>${product.default_price}</p>
          {/* <p>{averageRating.toFixed(2)}</p> */}
          <RatingToDuckFeet rating={averageRating} />
        </footer>
      </Card>
    </div>
  );
}
