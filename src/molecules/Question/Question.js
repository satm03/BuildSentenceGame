import React from 'react';
import classes from './Question.module.css';

import { Input } from '../../atoms';

export function Question({
  questionLabel,
  valueWhoHasError,
  changeHandler,
  blurHandler,
  value,
}) {
  return (
    <div className={valueWhoHasError ? classes.invalid : classes.formControl}>
      <div className={classes.question}>
        <div className={classes.questionLabel}>
          <label>{questionLabel}?</label>
        </div>
        <div className={classes.questionInput}>
          <Input
            type="text"
            changeHandler={changeHandler}
            blurHandler={blurHandler}
            value={value}
          />
        </div>
      </div>
      {valueWhoHasError && (
        <p className={classes.errorText}>{questionLabel} must not be empty!</p>
      )}
    </div>
  );
}
