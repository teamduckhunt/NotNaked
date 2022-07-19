/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
// import { act } from 'react-dom/test-utils';
import { reducer, screen, waitForElementToBeRemoved } from '../../../app/test-utils.jsx';
import RatingsAndReviews from '../RatingsAndReviews.jsx';
import ReviewList from '../Reviews/ReviewList.jsx';

describe('Testing Q&A', () => {
  beforeEach(() => {
    reducer(<RatingsAndReviews currentViewItemId={40344} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders QA Header', () => {
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });

  test('Renders QA Search', () => {
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS…')).toBeInTheDocument();
  });
});

// describe('Testing OutfitList', () => {
//   let addToListBtn;
//   beforeEach(() => {
//     reducer(<ReviewList currentViewItemId={40344} />);
//     addToListBtn = screen.getByTestId('addReview');
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('add button is visible when current detailed product is not in the list', () => {
//     expect(addToListBtn).toBeInTheDocument();
//   });

//   test('add button is not visible when current detailed product is in the list', () => {
//     act(() => {
//       addToListBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
//     });

//     expect(addToListBtn).not.toBeInTheDocument();
//     // .toBeVisible() ?
//   });
// });


 // Create a mock store (Separate file)
 // Create a mock query file
 // this test file that referes to those two.