'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _strings = require('./strings/strings.js');

var _strings2 = _interopRequireDefault(_strings);

var _arrays = require('./arrays/arrays.js');

var _arrays2 = _interopRequireDefault(_arrays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  stringsModifier: _strings2.default,
  arraysImmutableReverser: _arrays2.default
};