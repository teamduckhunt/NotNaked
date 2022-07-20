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
// import ReviewList from '../Reviews/ReviewList.jsx';

jest.mock('../../../app/redux-hooks');

describe('Testing R&R', () => {
  beforeEach(async () => {
    reducer(<RatingsAndReviews currentViewItemId={40344} />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), { timeout: 3000 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders RR Header', () => {
    expect(screen.getByText('RATINGS & REVIEWS')).toBeInTheDocument();
  });
});

// describe('Testing Review List component', () => {
//   beforeEach(async () => {
//     reducer(<ReviewList currentViewItemId={40344} />);
//     await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), { timeout: 3000 });
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('Review List renders only two reviews to start', () => {
//     expect(screen.getByPlaceholderText('')).toBeInTheDocument();
//   });

//   test('When there are more than 2 reviews, the \'More Reviews\' button should render.', () => {
//     expect(screen.getByPlaceholderText('')).toBeInTheDocument();
//   });

//   test('Add a Question button should render.', () => {
//     expect(screen.getByPlaceholderText('')).toBeInTheDocument();
//   });
// });