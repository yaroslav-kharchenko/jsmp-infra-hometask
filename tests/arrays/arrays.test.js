import arraysImmutableReverser from '../../dist/arrays/arrays.js';

const assert = require('assert');

const array1 = [1, 2, 3];
const result1 = [3, 2, 1];
const errorMessage = 'Error: Unexpected parameter';

export default () => {
  //1. Check if the returned array is correct
  assert.deepEqual(arraysImmutableReverser(array1), result1, 'Result array isn\'t correct');
  //2. Check if the returned array is a new array
  let newArray = arraysImmutableReverser(array1);
  assert(newArray !== array1, 'Input array was mutated');

  //3. Check method without input parrameters
  try {
    arraysImmutableReverser();
  } catch (error) {
    assert.equal(error, errorMessage, 'Wrong error message');
  }
}