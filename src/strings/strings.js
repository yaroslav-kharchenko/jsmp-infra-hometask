import * as _ from 'lodash';

export default (string, modifier = 'ko') => {
  if(!_.isString(string)) {
    throw new Error('Unexpected parameter');
  }
  const reversedString = string.split('').reverse().join('');
  const reversedModifier = modifier.split('').reverse().join('');

  return `${modifier}-${string}|${reversedString}-${reversedModifier}`;
}