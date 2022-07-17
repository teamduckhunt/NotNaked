import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useGetAllReviewsByProductIdQuery } from '../../../services/reviews.js';
// import Dropdown from './Dropdown.jsx';
import { setSortSelection } from './sortItemsSlice.js';
import styles from './SortItems.module.css';

export default function SortItems({ productId }) {
  // const sortReviewList = useGetAllReviewsByProductIdQuery;
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);

  function handleChange(event) {
    const sortSelection = event.target.value;
    // console.log('here');
    dispatch(setSortSelection(sortSelection));
    // sortReviewList({ productId, sortSelection });
  }
  const curSortSelected = useSelector((state) => state.sortItems.sortSelection);
  useGetAllReviewsByProductIdQuery({ productId, curSortSelected });

  // create component for the form, call the use query in the form.

  return (
    <div className={styles.sortContainer}>
      # reviews, sort by
      <select onChange={handleChange}>
        <option value="relevant" onSelect={() => { setSkip((prev) => !prev); }}>relevant</option>
        <option value="helpful" onSelect={() => { setSkip((prev) => !prev); }}>helpful</option>
        <option value="newest" onSelect={() => { setSkip((prev) => !prev); }}>newest</option>
      </select>
    </div>

  );
}
// value={sortSelection}

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
