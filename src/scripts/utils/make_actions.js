"use strict";

const makeAction = (type, ...argNames) => {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, key) => {
      action[argNames[key]] = args[key]
    })
    return action
  }
};

const makeErrorAction = (type, error) => {
  return function(...args) {
    const errors = JSON.parse(error.responseText).errors;
    return {
      type,
      errors
    };
  }
};

export {
  makeAction,
  makeErrorAction
};
