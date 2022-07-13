/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from 'react';
import StyleList from './StyleList.jsx';

export default function StyleSelector({ currentViewItemId }) {
  return (
    <div>
      Style selector goes here
      <StyleList currentViewItemId={currentViewItemId} />
    </div>
  );
}
