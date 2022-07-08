/* eslint-disable default-param-last */
import { createStore } from 'redux';

const mainReducer = (state = { isLoading: false }, action) => {
  if (action.type === 'toggleLoading') {
    return {
      isLoading: !state.isLoading,
    };
  }

  return state;
};

const store = createStore(mainReducer);

export default store;
