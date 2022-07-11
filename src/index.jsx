/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './app/store';

const backdrop = document.createElement('div');
backdrop.setAttribute('id', 'backdrop');
document.body.appendChild(backdrop);

const modal = document.createElement('div');
modal.setAttribute('id', 'modal');
document.body.appendChild(modal);

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
