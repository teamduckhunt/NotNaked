/* eslint-disable import/extensions */
import React from 'react';
import Button from './UI/Button.jsx';
import styles from './App.module.css';

import { useSelector, useDispatch } from 'react-redux';
//useStore is for the whole state whereas useSelector is just a slice of state that you need
// ex) import { useStore } from 'react-redux';
// ex) import { connect } from 'react-redux'; this is for class component

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.isLoading);
  const setLoadingHandler = () => {
    dispatch({type: 'toggleLoading'})
  }

  return (
    <div>
     { isLoading ? <div> Loading...</div> : <h1 className={styles.app}>Hello World</h1> }
      <Button type='button' onClick={setLoadingHandler}>toggleLoading</Button>
    </div>
  );
}

export default App;
