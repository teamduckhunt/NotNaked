/* eslint-disable import/extensions */
import React from 'react';
import ListContainer from '../helpers/ListContainer/ListContainer.jsx';
import Button from '../../UI/Button.jsx';
// import PropTypes from 'prop-types';

export default function OutfitList() {
  return (
    <>
      <p>My Outfit List!!!</p>
      <ListContainer>
        <Button>Add to List</Button>
      </ListContainer>
    </>
  );
}
// TODO:Outfit slice
// Add button if the list is empty
