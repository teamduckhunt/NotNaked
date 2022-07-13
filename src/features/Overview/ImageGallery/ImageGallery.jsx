import React from 'react';
import { useProductStylesQuery } from '../../../services/products.js';
// import '../Overview.module.css'; //

export default function ImageGallery() {
  const image = 'https://picsum.photos/200';
  return (
    <div>
      Image carousel goes here
      <img src={image} alt="random" />
    </div>
  );
}
