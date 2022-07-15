/* eslint-disable import/extensions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Search.module.css';
import { setSearch } from '../questionsAndAnswersSlice.jsx';

export default function Search() {
  // const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const select = useSelector((state) => state.questionsAndAnswers.search);

  return (
    <form onSubmit={(e) => e.preventDefault()} id="search" className={styles.form}>
      <input onChange={(e) => dispatch(setSearch(e.target.value))} value={select} className={styles.input} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS…" />
      <button className={styles.button} type="button">✅</button>
    </form>
  );
}
