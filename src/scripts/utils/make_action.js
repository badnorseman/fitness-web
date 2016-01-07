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

export { makeAction };
