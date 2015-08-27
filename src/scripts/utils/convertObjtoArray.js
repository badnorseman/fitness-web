"use strict";
export function convertObjtoArray(obj) {
  let array = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      array.push(obj[key]);
    }
  }
  return array;
}
