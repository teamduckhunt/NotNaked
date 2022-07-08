/* eslint-disable import/extensions */
import React from 'react';
import Button from './components/UI/Button.jsx';
import styles from './App.module.css';

function App() {
  return (
    <>
    <h1 className={styles.app}>Hello World</h1>
    <Button>REUSABLE BUTTON</Button>
    </>
  );
}

export default App;
