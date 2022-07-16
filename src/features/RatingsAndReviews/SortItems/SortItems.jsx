import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
import Dropdown from './Dropdown.jsx';
import styles from './SortItems.module.css';

export default function SortItems({ productId }) {
  const sortReviewList = useGetAllReviewsByProductIdQuery;

  const initialState = ('relevant');

  const [sortSelection, setSortSelection] = useState(initialState);

  function handleChange(event) {
    setSortSelection([event.target.value]);
    sortReviewList({ productId, sortSelection });
  }

  return (
    <div className={styles.sortContainer}>
      # reviews, sort by
      <select value={sortSelection} onChange={handleChange}>
        <option value="relevant">relevant</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>

  );
}

//   const sortList = [
//     {
//       id: 1,
//       value: 'newest',
//     }, {
//       id: 2,
//       value: 'helpful',
//     }, {
//       id: 3,
//       value: 'relevant',
//     },
//   ];

//   const sortList1 = ['newest', 'helpful', 'relevant'];

//   return (
//     <div className={styles.container}>
//       # reviews, sort by
//       <Dropdown title="WHY" items={sortList} />
//     </div>
//   );
// }

SortItems.propTypes = {
  productId: PropTypes.number.isRequired,
};

// NOTES :
// sort should persist when star filters are selected,
// meaning the stort value should be passed in rating breakdown as well.
