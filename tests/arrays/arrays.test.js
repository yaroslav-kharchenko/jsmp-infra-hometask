import arraysImmutableReverser from '../../dist/arrays/arrays.js';

const assert = require('assert');

const array1 = [1, 2, 3];
const result1 = [3, 2, 1];
const errorMessage = 'Error: Unexpected parameter';

export default () => {
  //1. Check if the returned array is correct
  assert.deepEqual(arraysImmutableReverser(array1), result1, 'Should return an array with elements in reverse order');
  //2. Check if the returned array is a new array
  let newArray = arraysImmutableReverser(array1);
  assert(newArray !== array1, 'Should return new array instead mutating input');

  //3. Check method without input parrameters
  try {
    arraysImmutableReverser();
  } catch (error) {
    assert.equal(error, errorMessage, 'Should throw an exeption with right message if the argumets are wrong');
  }
}