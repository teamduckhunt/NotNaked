/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ProductComparison.module.css';
// import PropTypes from 'prop-types';

function ProductComparison({ feature, relatedItemFeature, currentItemFeature }) {
  return (
    <div className={styles.feature_list}>
      <div className={styles.current}>{currentItemFeature || ''}</div>
      <div className={styles.feature}>{feature}</div>
      <div className={styles.related_feature}>{relatedItemFeature || ''}</div>
    </div>
  );
}
export default ProductComparison;
