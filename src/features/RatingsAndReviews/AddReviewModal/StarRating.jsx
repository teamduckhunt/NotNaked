/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-else-return */
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AddReviewModal.module.css';


function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className={styles.star_rating}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        const starColor = (index <= (hover || rating) ? 'on' : 'off');
        return (
          <styles.button
            type="button"
            key={index}
            className={styles.starColor}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={styles.star}>&#9733;</span>
          </styles.button>
        );
      })}
    </div>
  );
}

export default StarRating;



// USE REACT ICONS






// function StarIcon(props) {
//   const { fill = 'none' } = props;
//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" className={[styles.h_6, styles.w_6]} fill={fill} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//       <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//     </svg>
//   );
// }

// function RatingIcon(props) {
//   const {
//     index,
//     rating,
//     hoverRating,
//     onMouseEnter,
//     onMouseLeave,
//     onSaveRating,
//   } = props;
//   const fill = useMemo(() => {
//     if (hoverRating >= index) {
//       return 'pink';
//     } else if (!hoverRating && rating >= index) {
//       return 'pink';
//     }
//     return 'none';
//   }, [rating, hoverRating, index]);
//   return (
//     <div
//       className={styles.cursor_pointer}
//       onMouseEnter={() => onMouseEnter(index)}
//       onMouseLeave={() => onMouseLeave()}
//       onClick={() => { onSaveRating(index); }}
//     >
//       <StarIcon fill={fill} />
//     </div>
//   );
// }

// export default function StarRating() {
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const onMouseEnter = (index) => {
//     setHoverRating(index);
//   };
//   const onMouseLeave = () => {
//     setHoverRating(0);
//   };
//   const onSaveRating = (index) => {
//     setRating(index);
//   };
//   return (
//     <div className={[styles.add_review_box, styles.flex]}>
//       {[1, 2, 3, 4, 5].map((index) => (
//         <RatingIcon
//           index={index}
//           rating={rating}
//           hoverRating={hoverRating}
//           onMouseEnter={() => { onMouseEnter(); }}
//           onMouseLeave={() => { onMouseLeave(); }}
//           onSaveRating={() => { onSaveRating(); }}
//         />
//       ))}
//     </div>
//   );
// }

// StarRating.propTypes = {
//   onMouseEnter: PropTypes.func.isRequired,
//   onMouseLeave: PropTypes.func.isRequired,

// };
