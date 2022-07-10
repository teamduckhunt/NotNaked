/* eslint-disable import/extensions */
import React from 'react';
// import Overview from './features/Overview/Overview.jsx';
// import QuestionsAndAnswers from './features/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
// import RatingsAndReviews from './features/RatingsAndReviews/RatingsAndReviews.jsx';
import RelatedItemsAndComparison from './features/RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';
import styles from './App.module.css';

export default function App() {
  return (
    <div id="app" className={styles.app}>
      {/* <Overview /> */}
      {/* <QuestionsAndAnswers /> */}
      {/* <RatingsAndReviews /> */}
      <RelatedItemsAndComparison currentViewItemId={40344} />
    </div>
  );
}
