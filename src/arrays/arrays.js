export default array => {
  if(!Array.isArray(array)) {
    throw new Error('Unexpected parameter');
  }

  let myArray = array.slice();

  return myArray.reverse()
}