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
import SalePrice from '../SalePrice/SalePrice.jsx';
import IronMan from '../../../../../assets/iron-man.svg';

export default function ListItemCard({
  product,
  productId,
  productImage,
  handleOnClick,
  averageRating,
  children,
  productSalesPrice,
}) {
  console.log(product);
  console.log(productImage);
  console.log(productSalesPrice);
  const handleProductClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === 'product') {
      handleOnClick();
      e.stopPropagation();
    }
  };
  const price = <SalePrice originalPrice={product.default_price} salePrice={productSalesPrice} />;
  const InfinityStone = <img className={styles.ironMan} src={IronMan} alt="Iron Man" />;
  return (
    <div key={productId} className={styles.product_card_ctn}>
      <Card
        className={styles.product_card}
        style={{ backgroundImage: `url(${productImage})` }}
      >
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
          <p data-testid="category" className={styles.category}>{product.category}</p>
          <p data-testid="name" className={styles.name}>{product.name}</p>
          <p data-testid="price" className={styles.price}>{price}</p>
          {/* Iron Man by Adhi Satrio from NounProject.com */}
          {Number.isNaN(averageRating) ? (
            <div data-testid="ironman" className={styles.ironContainer}>
              {Array(5).fill(InfinityStone)}
            </div>
          ) : (
            <RatingToDuckFeet rating={averageRating} />
          )}

        </footer>
      </Card>
    </div>
  );
}
