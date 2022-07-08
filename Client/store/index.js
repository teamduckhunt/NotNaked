import { createStore } from 'redux';

const mainReducer = (state, action) => {
  if (action.type === '') {
    return {};
  }

  return state;
};

const store = createStore(mainReducer);

export default store;
