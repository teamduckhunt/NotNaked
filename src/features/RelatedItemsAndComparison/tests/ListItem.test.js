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
import ListItemCard from '../helpers/ListItemCard/ListItemCard.jsx';

describe('Testing ListItemCard to render correct data from props', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('next button is visible when the list length is greater than 5', () => {
    reducer(<ListItemCard
      product={{
        category: 'Dress Shoes',
        default_price: '120.00',
        description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
        features: [{ feature: 'Sole', value: 'Rubber' }, { feature: 'Material', value: 'FullControlSkin' }, { feature: 'Stitching', value: 'Double Stitch' }],
        id: 40350,
        name: 'Blues Suede Shoes',
      }}
      productId={40350}
      productImage={`https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80`}
      handleOnClick={() => {}}
      averageRating={3.26}
      productSalesPrice={null}
    />);

    const category = screen.getByTestId('category');
    const name = screen.getByTestId('name');
    const ironMan = screen.queryByTestId('ironman');

    expect(category.textContent).toBe('Dress Shoes');
    expect(name.textContent).toBe('Blues Suede Shoes');
    expect(ironMan).toBeNull();
  });
  test('If there is no rating, it must be INFINITY STONE!', () => {
    reducer(<ListItemCard
      product={{
        category: 'Accessories',
        default_price: '150000000.00',
        description: 'The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.',
        features: [],
        id: 40353,
        name: 'Infinity Stone',
      }}
      productId={40353}
      productImage={`https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609`}
      handleOnClick={() => {}}
      averageRating={NaN}
      productSalesPrice={null}
    />);

    const ironMan = screen.queryByTestId('ironman');
    expect(ironMan).toBeInTheDocument();
  });
});
