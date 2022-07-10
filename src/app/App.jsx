/* eslint-disable import/extensions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from "../features/UI/Button.jsx";
import styles from '../App.module.css';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);
  const setLoadingHandler = () => {
    dispatch({ type: 'toggleLoading' });
  };

  return (
    <div>
      { isLoading
        ? <div> Loading...</div>
        : <h1 className={styles.app}>Hello World</h1> }
      <Button type="button" onClick={setLoadingHandler}>toggleLoading</Button>
    </div>
  );
}

export default App;
