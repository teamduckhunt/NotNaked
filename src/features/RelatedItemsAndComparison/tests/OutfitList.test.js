/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../app/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import OutfitList from '../OutfitList/OutfitList.jsx';
import testUseAppSeletor from '../../../app/test-app.selector';

jest.mock('../../../app/redux-hooks')

// import renderWithProviders from '../../../utils/test.utils';

describe('Testing OutfitList', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSeletor);
  })

  test('add button is visible when current detailed product is not in the list', () => {
    // renderWithProviders(<Provider store={store}><OutfitList /></Provider>);
    render(<Provider store={store}><OutfitList /></Provider>);
    // returns an element or an error
    const addToListBtn = screen.getByText('Add to list');
    expect(addToListBtn).toBeInTheDocument();
  });

  test('add button is not visible when current detailed product is in the list', () => {
    render(<OutfitList />);
    // returns an element or an error
    const addToListBtn = screen.getByText('Add to list');
    expect(addToListBtn).toBeInTheDocument();
  });
});

// https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
// https://www.npmjs.com/package/jest-css-modules-transform
// https://www.npmjs.com/package/babel-jest
// https://redux.js.org/usage/writing-tests
// https://medium.com/@johnmcdowell0801/testing-rtk-query-with-jest-cdfa5aaf3dc1
// https://www.npmjs.com/package/whatwg-fetch
// https://github.com/reduxjs/redux-toolkit/issues/2084
// https://github.com/vercel/next.js/issues/8145
