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
import OutfitList from '../OutfitList/OutfitList.jsx';

describe('Testing OutfitList', () => {
  let addToListBtn;
  beforeEach(() => {
    reducer(<OutfitList currentViewItemId={40344} />);
    addToListBtn = screen.getByTestId('addOutfit');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('add button is visible when current detailed product is not in the list', () => {
    expect(addToListBtn).toBeInTheDocument();
  });

  test('add button is not visible when current detailed product is in the list', () => {
    act(() => {
      addToListBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(addToListBtn).not.toBeInTheDocument();
  });
});

 // import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
 // import testUseAppSelector from '../../../app/test-app.selector';
 // jest.mock('../../../app/redux-hooks');
 // // import renderWithProviders from '../../../utils/test.utils';

 // describe('Testing OutfitList', () => {
 //   beforeEach(() => {
 //     useAppSelector.mockImplementation(testUseAppSelector);
 //     useAppDispatch.mockImplementation(() => jest.fn);
 //   });

 //   afterEach(() => {
 //     jest.clearAllMocks();
 //   });

 //   test('add button is visible when current detailed product is not in the list', () => {
 //     // renderWithProviders(<Provider store={store}><OutfitList /></Provider>);
 //     render(
 //       <Provider store={store}>
 //         <OutfitList currentViewItemId={40344} />
 //       </Provider>,
 //     );
 //     // returns an element or an error
 //     const addToListBtn = screen.getByText('Add to List');
 //     expect(addToListBtn).toBeInTheDocument();
 //   });

 //   test('add button is not visible when current detailed product is in the list', () => {
 //     render(
 //       <Provider store={store}>
 //         <OutfitList currentViewItemId={40344} />
 //       </Provider>,
 //     );
 //     const addToListBtn = screen.getByText('Add to List');

 //     act(() => {
 //       addToListBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
 //     });

 //     expect(addToListBtn).not.toBeInTheDocument();
 //   });
 // });

 //  // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
 //  // https://www.npmjs.com/package/jest-css-modules-transform
 //  // https://www.npmjs.com/package/babel-jest
 //  // https://redux.js.org/usage/writing-tests
 //  // https://medium.com/@johnmcdowell0801/testing-rtk-query-with-jest-cdfa5aaf3dc1
 //  // https://www.npmjs.com/package/whatwg-fetch
 //  // https://github.com/reduxjs/redux-toolkit/issues/2084
 //  // https://github.com/vercel/next.js/issues/8145
 //  // https://www.npmjs.com/package/jest-environment-jsdom
 //  // https://www.npmjs.com/package/whatwg-fetch