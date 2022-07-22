/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Search.module.css';
import FullDuck from '../../../../assets/duckfeet-rating/full.svg';
import { setSearch } from '../questionsAndAnswersSlice.jsx';

export default function Search() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state.questionsAndAnswers.search);

  return (
    <form onSubmit={(e) => e.preventDefault()} id="search" className={styles.form}>
      <input onChange={(e) => dispatch(setSearch(e.target.value))} value={select} className={styles.input} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…" />
      <img className={styles.feet} src={FullDuck} alt="Full Duck Feet" />
    </form>
  );
}
