/* eslint-disable camelcase */
/* eslint-disable import/extensions */
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
import CharacteristicsTable from './CharacteristicsTable.jsx';

export default class AddReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      summary: '',
      body: '',
      recommend: false,
      name: '',
      email: '',
      photos: [],
      characteristics: {},
      date: '',
      helpfulness: 0,
      response: null,
      // review_id ??
    };
    this.handleRecommendOptionChange = this.handleRecommendOptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleRecommendOptionChange(e) {
    const recommendOption = e.currentTarget.value === 'true';
    this.setState({ recommend: recommendOption });
  }

  handleSummaryChange(e) {
    this.setState({ summary: e.target.value });
  }

  handleBodyChange(e) {
    this.setState({ body: e.target.value });
  }

  render() {
    const { handleModalToggle, productName } = this.props;
    const {
      body, date, photos, rating, recommend, reviewer_name, summary,
    } = this.state;

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
          <CharacteristicsTable />
          <div>
            <input type='text' value={summary} maxLength="60" onChange={(e) => this.handleSummaryChange(e)} />
          </div>
          <div>
            <input type='text' value={body} minLength="50" maxLength="1000" onChange={(e) => this.handleBodyChange(e)} />
            Add a counter
          </div>
          <div>
            Add an image
          </div>
          <input />
          <input />

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
