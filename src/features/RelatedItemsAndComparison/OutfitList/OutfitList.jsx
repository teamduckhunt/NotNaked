/* eslint-disable import/extensions */
import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../app/redux-hooks';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import { addOutfit, deleteOutfit } from './outfitListSlice.jsx';
import { outfitReducer, outfitState } from './outfitListReducer';
import OutfitListItem from './OutfitListItem.jsx';
import styles from './OutfitList.module.css';

export default function OutfitList({ currentViewItemId }) {
  const [isCurrentItemAdded, setIsCurrentItemAdded] = useState(true);
  const [localState, dispatchLocalState] = useReducer(outfitReducer, outfitState);
  const { start, end } = localState;
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

  const handleCarouselControl = (control) => {
    if (control === 'PREV' && start !== 0 && start > 0) {
      dispatchLocalState({ type: control });
    }
    if (control === 'NEXT' && end !== userOutfitList.length && end < userOutfitList.length) {
      dispatchLocalState({ type: control });
    }
  };

  return (
    <div className={styles.list_container}>
      <h3 className={styles.list_title}>My Outfit</h3>
      <ListContainer
        start={start}
        end={end}
        length={userOutfitList.length}
        handleCarouselControl={handleCarouselControl}
      >
        {!isCurrentItemAdded && (
          <div className={styles.button_ctn}>
            <IoIosAddCircleOutline
              data-testid="addOutfit"
              value="action"
              className={styles.button}
              onClick={() => handleAddOutfit()}
            />
          </div>
        )}
        {userOutfitList.length > 0 &&
          userOutfitList
            .slice(start, end)
            .map((outfitId) => (
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
