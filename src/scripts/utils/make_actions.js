"use strict";

const makeErrorAction = (type, error) => {
  return function(...args) {
    const errors = JSON.parse(error.responseText).errors;
    return {
      type,
      errors
    };
  }
};

const makeRequestAction = (type, ...argNames) => {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, key) => {
      action[argNames[key]] = args[key]
    })
    return action
  }
};

export { makeErrorAction };
export { makeRequestAction };
