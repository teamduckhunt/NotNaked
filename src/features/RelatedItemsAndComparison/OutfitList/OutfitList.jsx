/* eslint-disable import/extensions */
import React, { useState, useEffect, useReducer } from "react";
import PropTypes from "prop-types";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useAppDispatch, useAppSelector } from "../../../app/redux-hooks";
import ListContainer from "../helpers/ListContainer/ListContainer.jsx";
import { addOutfit, deleteOutfit } from "./outfitListSlice.jsx";
// import ListContainer from '../../UI/Card.jsx';

import OutfitListItem from "./OutfitListItem.jsx";
import styles from "./OutfitList.module.css";

export const outfitState = {
  start: 0,
  end: 4,
};

export const outfitReducer = ({ start, end }, action) => {
  switch (action.type) {
    case 'NEXT':
      return {
        start: start + 4,
        end: end + 4,
      };
    case 'PREV':
      return {
        start: start > 0 ? start - 4 : start,
        end: end > 4 ? end - 4 : end,
      };
    case 'RESET':
      return outfitState;
    default:
      throw new Error('Invalid request for carousel');
  }
};
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
    console.log(control);
    if (control === 'PREV' && start !== 0 && start > 0) {
      dispatchLocalState({ type: control });
    }
    if (control === 'NEXT' && end !== userOutfitList.length && end < userOutfitList.length) {
      dispatchLocalState({ type: control });
    }
  };

  return (
    <div>
      <h3>Outfit List</h3>
      <ListContainer
        start={start}
        end={end}
        length={userOutfitList.length}
        handleCarouselControl={handleCarouselControl}
      >
        {!isCurrentItemAdded && (
          <div className={styles.button_ctn}>
            <IoIosAddCircleOutline
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
