/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */

import React, { useState } from "react";
// import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from "../../../UI/Card.jsx";
import RatingToDuckFeet from "../../../../helpers/RatingToDuckFeet.jsx";
import styles from "./ListItemCard.module.css";
import SalePrice from "../SalePrice/SalePrice.jsx";
import IronMan from "../../../../../assets/iron-man.svg";

export default function ListItemCard({
  product,
  productId,
  productImage,
  imageAvailable,
  handleOnClick,
  averageRating,
  children,
  productSalesPrice,
}) {
  const [isOnHover, setIsOnHover] = useState(false);
  const handleProductClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.id === 'product') {
      handleOnClick();
      e.stopPropagation();
    }
  };
  const price = (
    <SalePrice
      originalPrice={product.default_price}
      salePrice={productSalesPrice}
    />
  );
  const InfinityStone = (
    <img className={styles.ironMan} src={IronMan} alt="Iron Man" />
  );
  return (
    <div key={productId} className={styles.product_card_ctn}>
      <Card
        className={styles.product_card}
        style={{ backgroundImage: `url(${productImage})` }}
      >
        <Link
          to={`/product/${productId}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
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
          {imageAvailable && (
            <div className={styles.noImage}>No Product Image...</div>
          )}
        </Link>
        <footer
          className={styles.product_card_body}
          onMouseEnter={() => setIsOnHover(true)}
          onMouseLeave={() => setIsOnHover(false)}
        >
          <p data-testid="category" className={styles.category}>
            {product.category}
          </p>
          <p data-testid="name" className={styles.name}>
            {product.name}
          </p>
          <div data-testid="price" className={styles.price}>
            {price}
          </div>
          {/* Iron Man by Adhi Satrio from NounProject.com */}
          {Number.isNaN(averageRating) ? (
            <div data-testid="ironman" className={styles.ironContainer}>
              {Array(5).fill(InfinityStone)}
            </div>
          ) : (
            <RatingToDuckFeet rating={averageRating} />
          )}
          {isOnHover && <div className={styles.slogan}>"{product.slogan}"</div>}
        </footer>
      </Card>
    </div>
  );
}
