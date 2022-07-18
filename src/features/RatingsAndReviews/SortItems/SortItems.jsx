import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews';
import { setSortSelection } from './sortItemsSlice';
import styles from './SortItems.module.css';

export default function SortItems({ productId, reviewCount }) {
  const dispatch = useDispatch();

  function handleChange(event) {
    const sortSelection = event.target.value;
    dispatch(setSortSelection(sortSelection));
  }
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  useGetAllReviewsByProductIdQuery({ reviewCount, productId, curSortSelected });

  return (
    <div className={styles.sortContainer}>
      # reviews, sort by
      <select className={styles.dd_wrapper} onChange={handleChange}>
        <option value="relevant">relevant</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>

  );
}

SortItems.propTypes = {
  productId: PropTypes.number.isRequired,
};

// NOTES :
// sort should persist when star filters are selected,
// meaning the stort value should be passed in rating breakdown as well.
