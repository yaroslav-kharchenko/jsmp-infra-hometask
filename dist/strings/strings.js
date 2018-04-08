'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (string, modifier = 'ko') => {
  if (typeof string !== 'string') {
    throw new Error('Unexpected parameter');
  }
  const reversedString = string.split('').reverse().join('');
  const reversedModifier = modifier.split('').reverse().join('');

  return `${modifier}-${string}|${reversedString}-${reversedModifier}`;
};