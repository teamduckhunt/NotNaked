/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import { useProductInformationByIdQuery } from '../../../services/products';
import ProductComparison from './ProductComparison.jsx';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';
import styles from './ComparisonModal.module.css';

export default function ComparisonModal({ handleModalToggle, currentViewItemId, relatedItemId }) {
  const {
    data: currentViewItemData,
    isLoading: isCurrentLoading,
  } = useProductInformationByIdQuery(currentViewItemId);
  const {
    data: relatedItemData,
    isLoading: isRelatedLoading,
  } = useProductInformationByIdQuery(relatedItemId);

  if (isCurrentLoading && isRelatedLoading) {
    return <div>Loading...</div>;
  }

  const currentFeatures = currentViewItemData.features.reduce((obj, feat) => ({
    ...obj, [feat.feature]: feat.value,
  }), {});

  const relatedFeatures = relatedItemData.features.reduce((obj, feat) => ({
    ...obj, [feat.feature]: feat.value,
  }), {});

  return (
    <Modal className={styles.modal}>
      <h4 className={styles.modalTitle}>COMPARING</h4>
      <div className={styles.products}>
        <div className={styles.col}>{currentViewItemData.name}</div>
        <div className={styles.col}>Feature</div>
        <div className={styles.col}>{relatedItemData.name}</div>
      </div>
      <div>
        {Object.keys({ ...relatedFeatures, ...currentFeatures }).map((feature) => (
          <ProductComparison
            key={feature}
            feature={feature}
            relatedItemFeature={relatedFeatures[feature]}
            currentItemFeature={currentFeatures[feature]}
          />
        ))}
      </div>
      <div className={styles.btn_ctn}>
        <Button type="button" className={styles.btn} onClick={() => handleModalToggle()}>
          Close
        </Button>
      </div>
    </Modal>
  );
}

ComparisonModal.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
};
