/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import RelatedItemsAndComparison from '../RelatedItemsAndComparison.jsx';
// import RelatedProductList from '../RelatedProductsList/RelatedProductList.jsx';
// import OutfitList from '../OutfitList/OutfitList.jsx';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// TODO: Build a test here
// it('test test', () => {
//   act(() => {
//     render(<RelatedItemsAndComparison />, container);
//   });
//   expect(container.textContent).toBe('Hey, stranger');
// });
