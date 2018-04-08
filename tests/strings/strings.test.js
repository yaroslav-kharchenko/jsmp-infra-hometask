import stringsModifier from '../../dist/strings/strings.js';

const assert = require('assert');

const string = 'test';
const modifier = 'mo';
const result = 'mo-test|tset-om';
const defaultResult = 'ko-test|tset-ok';
const errorMessage = 'Error: Unexpected parameter';

export default () => {
  //1. Check if the returned string is correct
  assert.equal(stringsModifier(string, modifier), result, 'Result string is not correct');
  //2. Check default modifier
  assert.equal(stringsModifier(string), defaultResult, 'Result string with default modifier is not correct');
  //3. Check method without input parrameters
  try {
    stringsModifier();
  } catch (error) {
    assert.equal(error, errorMessage, 'Wrong error message');
  }
}