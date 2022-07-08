import React from 'react';
import { render } from 'react-dom';

const root = document.createElement('div');
root.setAttribute('id', 'root');
document.body.appendChild(root);

render(<h1>Hello World</h1>, root);
