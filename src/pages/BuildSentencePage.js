import React from 'react';
import { useState } from 'react';
import classes from './BuildSentencePage.module.css';

import useInput from '../CustomHooks/use-input';

import { Form } from '../organisms';

export function BuildSentencePage() {
  const [result, setResult] = useState('No sentence has been created yet.');

  const {
    value: valueWho,
    isValid: valueWhoIsValid,
    hasError: valueWhoHasError,
    valueChangeHadler: whoChangeHandler,
    valueBlurHandler: whoBlurHandler,
    reset: resetWhoInput,
  } = useInput();

  const {
    value: valueWhat,
    isValid: valueWhatIsValid,
    hasError: valueWhatHasError,
    valueChangeHadler: whatChangeHandler,
    valueBlurHandler: whatBlurHandler,
    reset: resetWhatInput,
  } = useInput();

  const {
    value: valueWhen,
    isValid: valueWhenIsValid,
    hasError: valueWhenHasError,
    valueChangeHadler: whenChangeHandler,
    valueBlurHandler: whenBlurHandler,
    reset: resetWhenInput,
  } = useInput();

  const {
    value: valueWhere,
    isValid: valueWhereIsValid,
    hasError: valueWhereHasError,
    valueChangeHadler: whereChangeHandler,
    valueBlurHandler: whereBlurHandler,
    reset: resetWhereInput,
  } = useInput();

  let formIsValid = false;

  if (
    valueWhoIsValid &&
    valueWhatIsValid &&
    valueWhenIsValid &&
    valueWhereIsValid
  ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !valueWhoIsValid ||
      !valueWhatIsValid ||
      !valueWhenIsValid ||
      !valueWhereIsValid
    ) {
      return;
    }

    setResult(
      valueWho + ' ' + valueWhat + ' ' + valueWhen + ' ' + valueWhere + '.'
    );

    resetWhoInput();
    resetWhatInput();
    resetWhenInput();
    resetWhereInput();
  };

  return (
    <div className={classes.mainContent}>
      <h1 className={classes.title}>Build your sentence</h1>
      <Form
        formSubmissionHandler={formSubmissionHandler}
        valueWhoHasError={valueWhoHasError}
        whoChangeHandler={whoChangeHandler}
        whoBlurHandler={whoBlurHandler}
        valueWho={valueWho}
        valueWhatHasError={valueWhatHasError}
        whatChangeHandler={whatChangeHandler}
        whatBlurHandler={whatBlurHandler}
        valueWhat={valueWhat}
        valueWhenHasError={valueWhenHasError}
        whenChangeHandler={whenChangeHandler}
        whenBlurHandler={whenBlurHandler}
        valueWhen={valueWhen}
        valueWhereHasError={valueWhereHasError}
        whereChangeHandler={whereChangeHandler}
        whereBlurHandler={whereBlurHandler}
        valueWhere={valueWhere}
        formIsValid={formIsValid}
      />
      <div className={classes.result}>
        <h4 className={classes.resultTitle}>Result</h4>
        <div>{result}</div>
      </div>
    </div>
  );
}
