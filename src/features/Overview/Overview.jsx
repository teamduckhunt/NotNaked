import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import ProductDetails from './ProductDetails/ProductDetails.jsx';
import StyleSelector from './StyleSelector/StyleSelector.jsx';
import AddToCart from '/AddToCart/AddToCart.jsx';

export default function Overview() {
  return (
    <div>
      <ImageGallery />
      <ProductInfo />
      <StyleSelector />
      <AddToCart />
      <ProductDetails />
    </div>
  );
}
