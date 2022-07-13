import React from 'react';
import '../Overview.module.css'; //

export default function AddToCart() {
  return (
    <div>
      {/* make add to cart button the on submit? */}
      <form onSubmit={this}>
        <label>
          Size:
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </label>
        <label>
          Quantity:
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </label>
        <button>Add To Cart</button>
      </form>
    </div>
  );
}
