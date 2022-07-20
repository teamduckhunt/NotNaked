/* eslint-disable import/extensions */
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
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';

describe('Testing Related Products\' Carousel Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('next button is visible when the list length is greater than 5', () => {
    reducer(<ListContainer
      handleCarouselControl={() => {}}
      start={0}
      end={5}
      length={7}
    />);
    const nextBtn = screen.getByTestId('next');
    expect(nextBtn).toBeInTheDocument();
  });

  test('next button is not visible when the list length is less than 5', () => {
    reducer(<ListContainer
      handleCarouselControl={() => {}}
      start={0}
      end={5}
      length={2}
    />);
    const nextBtn = screen.queryByTestId('next');
    expect(nextBtn).toBeNull();
  });
  test('previous button is not visible when first rendered', () => {
    reducer(<ListContainer
      handleCarouselControl={() => {}}
      start={0}
      end={5}
      length={8}
    />);
    const prevBtn = screen.queryByTestId('prev');
    expect(prevBtn).toBeNull();
  });
  test('previous button is visible when list is longer than five and when carousel is showing the next 5 in the list', () => {
    reducer(<ListContainer
      handleCarouselControl={() => {}}
      start={4}
      end={9}
      length={8}
    />);
    const prevBtn = screen.queryByTestId('prev');
    expect(prevBtn).toBeInTheDocument();
  });
});
