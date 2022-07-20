/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */
import getAverageRating from '../../../helpers/getAverageRating/getAverageRating';

describe('Testing Average Rating Function', () => {
  test('add button is visible when current detailed product is not in the list', () => {
    const ratings = {
      1: '9',
      2: '38',
      3: '25',
      4: '14',
      5: '37',
    };
    expect(+getAverageRating({ ratings }).toFixed(2)).toBe(3.26);
  });
});
