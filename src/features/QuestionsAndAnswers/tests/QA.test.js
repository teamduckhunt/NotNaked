/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
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
import QuestionsAndAnswers from '../QuestionsAndAnswers.jsx';
// import App from '../../../App.jsx';
import AddQA from '../QAModals/AddQA.jsx';

jest.mock('../../../app/redux-hooks');

describe('Testing Q&A', () => {
  beforeEach(async () => {
    reducer(<QuestionsAndAnswers currentViewItemId={40344} />);
    await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i), { timeout: 3000 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Renders QA Header', () => {
    expect(screen.getByText(/QUESTIONS & ANSWERS/i)).toBeInTheDocument();
  });

  test('Renders QA Search', () => {
    expect(screen.getByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS…')).toBeInTheDocument();
  });

  test('Renders Question List', async () => {
    expect(screen.getByText(/Q: Do you know the muffin man?/i)).toBeInTheDocument();
  });

  test('Renders More Questions Button', async () => {
    expect(screen.getByText(/MORE ANSWERED QUESTIONS/i)).toBeInTheDocument();
  });

  test('Renders Add A Question Button', async () => {
    expect(screen.getByText(/ADD A QUESTION/i)).toBeInTheDocument();
  });
});

// describe('Testing Modal', () => {
//   beforeEach(async () => {
//     reducer(
//       <AddQA ID={40344} handleModalToggle={() => {}} product="Test" />,
//     );
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('Renders Title', () => {
//     expect(screen.getByText(/Ask Your Question/i)).toBeInTheDocument();
//   });

//   test('Renders Subtitle', () => {
//     expect(screen.getByText(/About the product/i)).toBeInTheDocument();
//   });

//   test('Renders Username Input', () => {
//     expect(screen.getByText(/Username:/i)).toBeInTheDocument();
//   });

//   test('Renders Email Input', () => {
//     expect(screen.getByText(/Email:/i)).toBeInTheDocument();
//   });

//   test('Renders Submit Button', () => {
//     expect(screen.getByText(/Submit/i)).toBeInTheDocument();
//   });
// });
