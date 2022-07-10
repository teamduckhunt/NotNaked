import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../UI/Button.jsx';
import { addRelatedItems } from './relatedItemsSlice.jsx';

export default function RelatedItemsAndComparison() {
  const relatedItems = useSelector((state) => state.relatedItems.relatedItems);
  const dispatch = useDispatch();
  return (
    <div>
      <p>I am RelatedItemsAndComparison</p>
      <ul>
        {relatedItems.map((item) => <li>{item}</li>)}
      </ul>
      <Button onClick={dispatch(addRelatedItems())}>Add to the list</Button>
    </div>
  );
}
