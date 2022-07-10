/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { addOutfit, deleteOutfit }  from './outfitListSlice.jsx';
import Button from '../../UI/Button.jsx';

export default function OutfitList({ currentViewItemId }) {
  const [isCurrentItemAdded, setIsCurrentItemAdded] = useState(false);
  const userOutfitList = useSelector((state) => state.outfitList.outfitList);
  const dispatch = useDispatch();

  const handleAddOutfit = () => {
    setIsCurrentItemAdded(true);
    dispatch(addOutfit(currentViewItemId));
  };

  // const handleDeleteOutfit = (productId) => {
  //   if (productId === currentViewItemId) {
  //     setIsCurrentItemAdded(false);
  //   }
  //   dispatch(deleteOutfit(productId));
  // };

  console.log(userOutfitList);

  return (
    <>
      <p>My Outfit List!!!</p>
      <ListContainer>
        {!isCurrentItemAdded && <Button onClick={() => handleAddOutfit()}>Add to List</Button>}
        {/* {userOutfitList.length > 0
        && userOutfitList.map((outfitId) => <div handleDeleteOutfit={() => handleDeleteOutfit(outfitId)}>{outfitId}</div>)} */}
      </ListContainer>
    </>
  );
}

OutfitList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
