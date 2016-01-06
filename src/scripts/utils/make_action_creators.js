"use strict";

const makeErrorActionCreator = (type, error) => {
  return function(...args) {
    const errors = JSON.parse(error.responseText).errors;
    return {
      type,
      errors
    };
  }
};

const makeRequestActionCreator = (type, ...argNames) => {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, key) => {
      action[argNames[key]] = args[key]
    })
    return action
  }
};

export { makeErrorActionCreator };
export { makeRequestActionCreator };
