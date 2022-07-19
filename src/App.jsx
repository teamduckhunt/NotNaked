/* eslint-disable max-len */
/* eslint-disable import/extensions */
import React, { useRef } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useParams,
} from 'react-router-dom';
import Header from './features/Header/Header.jsx';
import Overview from './features/Overview/Overview.jsx';
import RatingsAndReviews from './features/RatingsAndReviews/RatingsAndReviews.jsx';
import QuestionsAndAnswers from './features/QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import RelatedItemsAndComparison from './features/RelatedItemsAndComparison/RelatedItemsAndComparison.jsx';
import styles from './App.module.css';

function ProductDetailPage() {
  const { productId } = useParams();
  const reviewSection = useRef();
  // const reviewSection = createRef();
  const scrollToElement = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: reviewSection.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div id="app" className={styles.app}>
      <Header />
      <Overview currentViewItemId={+productId} reviewSection={reviewSection} scrollToElement={scrollToElement} />
      <RelatedItemsAndComparison currentViewItemId={+productId} />
      <QuestionsAndAnswers currentViewItemId={+productId} />
      <RatingsAndReviews currentViewItemId={+productId} reviewSection={reviewSection} />
    </div>
  );
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/product/40344" />
        </Route>
        <Route path="/product/:productId">
          <ProductDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}
