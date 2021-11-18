import React from 'react';

export function Input({ type, changeHandler, blurHandler, value }) {
  return (
    <input
      type={type}
      onChange={changeHandler}
      onBlur={blurHandler}
      value={value}
    />
  );
}
