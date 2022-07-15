/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { addOutfit, deleteOutfit } from './outfitListSlice.jsx';
// import ListContainer from '../../UI/Card.jsx';
import Button from '../../UI/Button.jsx';
import OutfitListItem from './OutfitListItem.jsx';
import styles from './OutfitList.module.css';

export default function OutfitList({ currentViewItemId }) {
  const [isCurrentItemAdded, setIsCurrentItemAdded] = useState(true);
  const userOutfitList = useAppSelector((state) => state.outfitList.outfitList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userOutfitList.indexOf(currentViewItemId) === -1) {
      setIsCurrentItemAdded(false);
    }
  }, [currentViewItemId, userOutfitList]);
  const handleAddOutfit = () => {
    setIsCurrentItemAdded(true);
    dispatch(addOutfit(currentViewItemId));
  };

  const handleDeleteOutfit = (productId) => {
    dispatch(deleteOutfit(userOutfitList.indexOf(productId)));
  };

  return (
    <div>
      <h3>Outfit List</h3>
      <ListContainer>
        {!isCurrentItemAdded && (
          <div className={styles.button_ctn} >
            <IoIosAddCircleOutline value="action" className={styles.button} onClick={() => handleAddOutfit()} />
          </div>
        )}
        {userOutfitList
          && userOutfitList.map((outfitId) => (
            <OutfitListItem
              id={outfitId}
              key={outfitId}
              productId={outfitId}
              handleDeleteOutfit={() => handleDeleteOutfit(outfitId)}
            />
          ))}
      </ListContainer>
    </div>
  );
}

OutfitList.propTypes = {
  currentViewItemId: PropTypes.number.isRequired,
};
