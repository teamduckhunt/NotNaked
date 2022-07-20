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
