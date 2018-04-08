'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = array => {
  if (!Array.isArray(array)) {
    throw new Error('Unexpected parameter');
  }

  let myArray = array.slice();

  return myArray.reverse();
};