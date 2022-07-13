/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import PropTypes from 'prop-types';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { addOutfit, deleteOutfit } from './outfitListSlice.jsx';
import Button from '../../UI/Button.jsx';
import OutfitListItem from './OutfitListItem.jsx';
// import styles from './OutfitList.module.css';

export default function OutfitList({ currentViewItemId }) {
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
        {!isCurrentItemAdded && <Button onClick={() => handleAddOutfit()}>Add to List</Button>}
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
