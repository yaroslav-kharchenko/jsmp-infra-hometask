import stringsModifier from '../../dist/strings/strings.js';

const assert = require('assert');

const string = 'test';
const modifier = 'mo';
const result = 'mo-test|tset-om';
const defaultResult = 'ko-test|tset-ok';
const errorMessage = 'Error: Unexpected parameter';

export default () => {
  //1. Check if the returned string is correct
  assert.equal(stringsModifier(string, modifier), result, 'Should return modified string concated with it\'s reflection');
  //2. Check default modifier
  assert.equal(stringsModifier(string), defaultResult, 'Should return string changed with default modifier');
  //3. Check method without input parrameters
  try {
    stringsModifier();
  } catch (error) {
    assert.equal(error, errorMessage, 'Should throw an exeption with right message if the argumets are wrong');
  }
}