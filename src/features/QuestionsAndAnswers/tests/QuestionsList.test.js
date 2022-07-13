/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import 'whatwg-fetch';
import '@testing-library/jest-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../app/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import QuestionsList from '../QuestionsList/QuestionsList.jsx';
import testUseAppSeletor from '../../../app/test-app.selector';

jest.mock('../../../app/redux-hooks');

describe('Testing QuestionsList', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSeletor);
    useAppDispatch.mockImplementation(() => jest.fn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Question List Renders', async () => {
    render(
      <Provider store={store}>
        <QuestionsList currentViewItemId={40344} />
      </Provider>,
    );

    screen.getByText('Loading...');

    await screen.getByTestId('QA');

    const question = screen.getByText('Q: does this body have to have a question mark?');
    expect(question).toBeInTheDocument();
  });

  test('Answer List Renders', () => {
    render(
      <Provider store={store}>
        <QuestionsList currentViewItemId={40344} />
      </Provider>,
    );

    const answers = screen.getByText("A: who doesn't like a cute cat");
    expect(answers).toBeInTheDocument();
  });
});
