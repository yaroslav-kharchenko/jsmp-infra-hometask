import * as _ from 'lodash';

export default (string, modifier = 'ko') => {
  if(!_.isString(string)) {
    throw new Error('Unexpected parameter');
  }

  const modifiedString = `${modifier}-${string}`;
  const reversedString = modifiedString.split('').reverse().join('');

  return `${modifiedString}|${reversedString}`;
}