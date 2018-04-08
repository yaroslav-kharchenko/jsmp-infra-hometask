'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _ = _interopRequireWildcard(_lodash);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (string, modifier = 'ko') => {
  if (!_.isString(string)) {
    throw new Error('Unexpected parameter');
  }
  const reversedString = string.split('').reverse().join('');
  const reversedModifier = modifier.split('').reverse().join('');

  return `${modifier}-${string}|${reversedString}-${reversedModifier}`;
};