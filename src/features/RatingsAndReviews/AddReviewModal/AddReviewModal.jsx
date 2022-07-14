/* eslint-disable jsx-quotes */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UI/Button.jsx';
import Modal from '../../UI/Modal.jsx';
import { useAddAReviewMutation } from '../../../services/reviews.js';
import styles from './AddReviewModal.module.css';
import StarRating from './StarRating.jsx';

export default class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
      date: '',
      helpfulness: 0,
      photos: [],
      rating: 0,
      recommend: false,
      response: null,
      // review_id ??
      reviewer_name: '',
      summary: '',
    };
    this.handleRecommendOptionChange = this.handleRecommendOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleRecommendOptionChange(e) {
    const recommendOption = e.currentTarget.value === 'true';
    this.setState({ recommend: recommendOption });
  }

  render() {
    const { handleModalToggle, productName } = this.props;
    const { recommend } = this.state;

    return (
      <Modal>
        <form onSubmit={this.handleSubmit}>
          <h1>Write Your Review</h1>
          <h3>
            About the
            {' '}
            {productName}
          </h3>
          <div className={styles.add_review_box}>
            {/* <StarRating /> */}
          </div>

          <div>
            Do you recommend this product ?
            <label>
              <input
                type='radio'
                name='recommendOption'
                value='true'
                checked={recommend === true}
                onChange={this.handleRecommendOptionChange}
                className='recommend_input'
              />
              Yes
            </label>
            <label>
              <input
                type='radio'
                name='recommendOption'
                value='false'
                checked={recommend === false}
                onChange={this.handleRecommendOptionChange}
                className='recommend_input'
              />
              No
            </label>
          </div>
          <Button type="submit">
            Submit
          </Button>
        </form>
        <Button type="button" onClick={() => handleModalToggle()}>
          X
        </Button>
      </Modal>
    );
  }
}

AddReviewModal.propTypes = {
  handleModalToggle: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
};
