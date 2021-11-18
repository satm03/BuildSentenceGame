import React from 'react';

import classes from './Form.module.css';

import { Question } from '../../molecules';

export function Form({
  formSubmissionHandler,
  valueWhoHasError,
  whoChangeHandler,
  whoBlurHandler,
  valueWho,
  valueWhatHasError,
  whatChangeHandler,
  whatBlurHandler,
  valueWhat,
  valueWhenHasError,
  whenChangeHandler,
  whenBlurHandler,
  valueWhen,
  valueWhereHasError,
  whereChangeHandler,
  whereBlurHandler,
  valueWhere,
  formIsValid,
}) {
  return (
    <form className={classes.form} onSubmit={formSubmissionHandler}>
      <Question
        questionLabel="Who"
        valueWhoHasError={valueWhoHasError}
        changeHandler={whoChangeHandler}
        blurHandler={whoBlurHandler}
        value={valueWho}
      />
      <Question
        questionLabel="What"
        valueWhoHasError={valueWhatHasError}
        changeHandler={whatChangeHandler}
        blurHandler={whatBlurHandler}
        value={valueWhat}
      />
      <Question
        questionLabel="When"
        valueWhoHasError={valueWhenHasError}
        changeHandler={whenChangeHandler}
        blurHandler={whenBlurHandler}
        value={valueWhen}
      />
      <Question
        questionLabel="Where"
        valueWhoHasError={valueWhereHasError}
        changeHandler={whereChangeHandler}
        blurHandler={whereBlurHandler}
        value={valueWhere}
      />
      <div className={classes.buttnoDiv}>
        <button disabled={!formIsValid}>Create a new sentence!</button>
      </div>
    </form>
  );
}
