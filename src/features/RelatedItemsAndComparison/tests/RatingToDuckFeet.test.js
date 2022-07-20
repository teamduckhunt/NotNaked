/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import 'whatwg-fetch';
import { act } from 'react-dom/test-utils';
import { reducer, screen } from '../../../app/test-utils.jsx';
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';
import RatingToDuckFeet from '../../../helpers/RatingToDuckFeet.jsx';

describe('Convert average rating to duck feet logos', () => {
  beforeEach(() => {
    const ratings = {
      1: '9',
      2: '38',
      3: '25',
      4: '14',
      5: '37',
    };
    // expect(getAverageRating({ ratings }).toFixed(2)).toBe('3.26');
    const average = getAverageRating({ ratings });

    reducer(<RatingToDuckFeet rating={+average} />);
  });
  test('Get average rating and change it to logo image ', () => {
    expect(screen.getAllByRole('img')[0]).toBeInTheDocument();
  });
  test('The image array length is equal to 5', () => {
    expect(screen.getAllByRole('img').length).toBe(5);
  });
  test('The last image should be empty', () => {
    expect(screen.getAllByRole('img').at(-1).alt).toBe('empty duck');
  });
});
