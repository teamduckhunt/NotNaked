/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addHelpfulCount, subtractHelpfulCount } from './reviewCardSlice.jsx';
import Button from '../../../UI/Button.jsx';

export default function ReviewCard({ review }) {
  const dispatch = useDispatch();

  const handleAddHelpfulness = () => {
    dispatch(addHelpfulCount(review));
  };

  const handleSubtractHelpfulness = () => {
    dispatch(subtractHelpfulCount(review));
  };

  const image = 'https://picsum.photos/200';
  console.log('Next Review', review);

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <>
      {/* ***** Duck rating here */}
      <p>{review.rating}</p>
      <div>
        {`${review.reviewer_name}, ${new Date(review.date).toLocaleDateString([], dateOptions)}`}
      </div>
      <div>
        <p>{review.summary}</p>
        <p>{review.body}</p>
      </div>
      <div>
        <img src={image} alt={review.reviwer_name} height={100} />
      </div>
      {/* conditional check for if prop is recommended */}
      {review.recommend && <div> Check Mark I Recommend this Product</div>}
      {review.response === null && (
        <div>
          Response:
          <p>{review.response}</p>
        </div>
      )}
      <div>
        Helpful?
        <Button onClick={() => handleAddHelpfulness}>Yes</Button>
        {`(${review.helpfulness})`}
        <Button onClick={() => handleSubtractHelpfulness}>No</Button>
      </div>
    </>
  );
}

ReviewCard.propTypes = {
  review: PropTypes.shape.isRequired,
};

// Will need to useState for the Show More button
// Also useState for the thumbnail images

// ReviewCard will need a slice file for the Yes / No regarding the review being helpful.

// create a UI component that can render each image thumbnail
// function Image({ fileName }) {
//   return (
//     <img  src={fileName}/>
//   )
// }

// function App() {
//   const array = ["1.jpg", "2.jpg", "3.jpg"]
//   render(
//     <>
//       {
//         array.map( image => {
//           return (
//             <Image fileName = { image }/>
//           )
//         })
//       }
//     </>
//   );
// }