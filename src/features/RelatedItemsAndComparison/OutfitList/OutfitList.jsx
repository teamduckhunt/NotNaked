/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import PropTypes from 'prop-types';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { addOutfit, deleteOutfit } from './outfitListSlice.jsx';
import Button from '../../UI/Button.jsx';
import OutfitListItem from './OutfitListItem.jsx';
// import styles from './OutfitList.module.css';

export default function OutfitList({ currentViewItemId }) {
  useEffect(() => {
    // if currentviewItemId is in the list already, button should not be visible
    // else button should be visible
  })
  const [isCurrentItemAdded, setIsCurrentItemAdded] = useState(false);
  const userOutfitList = useAppSelector((state) => state.outfitList.outfitList);
  const dispatch = useAppDispatch();

  const handleAddOutfit = () => {
    setIsCurrentItemAdded(true);
    dispatch(addOutfit(currentViewItemId));
  };

  const handleDeleteOutfit = (productId) => {
    if (productId === currentViewItemId) {
      setIsCurrentItemAdded(false);
    }
    dispatch(deleteOutfit(productId));
  };

  return (
    <>
      <p>My Outfit List!!!</p>
      <ListContainer>
        {<Button onClick={() => handleAddOutfit()}>Add to List</Button>}
        {userOutfitList?.map((outfitId) =>
          <OutfitListItem
            key={outfitId}
            productId={outfitId}
            handleDeleteOutfit={handleDeleteOutfit.bind(null, outfitId)}
          />)}
      </ListContainer>
    </>
  );
}

OutfitList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
