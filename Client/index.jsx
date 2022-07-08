/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import App from './App.jsx';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

// render(<App />, root);
render(<App />, root);
