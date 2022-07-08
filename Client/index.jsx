/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './store/index';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(<Provider store={store}><App /></Provider>, root);
