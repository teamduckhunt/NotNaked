import React from 'react';
import Card from './Card.jsx';
import Button from './Button.jsx'
import styles from './Modal.module.css';

export default function Modal({ header, main, footer, onClick }) {
  return (
    <Card>
      <header>{header}</header>
      <main>
        <div>{main}</div>
      </main>
      <footer>
        {footer}
        <Button type="button" onClick={onClick}>Ok</Button>
      </footer>
    </Card>
  );
}
