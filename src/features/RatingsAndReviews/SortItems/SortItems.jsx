import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSortSelection } from './sortItemsSlice';
import styles from './SortItems.module.css';

export default function SortItems({ reviewCount }) {
  const dispatch = useDispatch();

  function handleChange(event) {
    const sortSelection = event.target.value;
    dispatch(setSortSelection(sortSelection));
  }
  return (
    <div className={styles.sortContainer}>
      {` ${reviewCount} reviews, sort by `}
      <select className={styles.dd_wrapper} onChange={handleChange}>
        <option value="relevant">relevant</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>

  );
}

SortItems.propTypes = {
  reviewCount: PropTypes.number.isRequired,
};