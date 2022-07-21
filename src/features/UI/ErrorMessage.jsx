import React from 'react';
import { BiError } from 'react-icons/bi';
import classes from './ErrorMessage.module.css';

export default function LoadingSpinner() {
  return (
    <div className={classes.errorCtn}>
      <BiError className={classes.errorIcon} />
      <p className={classes.errorMsg}>There was an error!</p>
    </div>
  );
}
