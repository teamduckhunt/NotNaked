import 'whatwg-fetch';
import '@testing-library/jest-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../../../app/store';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import Overview from '../Overview.jsx';
import AddToCart from '../AddToCart/AddToCart.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import testUseAppSeletor from '../../../app/test-app.selector';

// mock store, seperate file
// mock query

jest.mock('../../../app/redux-hooks');

describe('Testing Overview', () => {
  beforeEach(() => {
    useAppSelector.mockImplementation(testUseAppSeletor);
    useAppDispatch.mockImplementation(() => jest.fn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Overview />);
  });

  //------------------------------------------

  test('Overview Renders', async () => {
    render(
      <Provider store={store}>
        <Overview currentViewItemId={40344} />
      </Provider>,
    );

    screen.getByText('Loading...');

    await screen.getByTestId('overview');

    const category = screen.getByText('category');
    expect(category).toBeInTheDocument();
  });

  test('AddToCart Renders', async () => {
    render(
      <Provider store={store}>
        <AddToCart />
      </Provider>,
    );

    screen.getByText('Loading...');

    await screen.getByTestId('addtocart');

    const addtobag = screen.getByText('add to bag');
    expect(addtobag).toBeInTheDocument();
  });
});
