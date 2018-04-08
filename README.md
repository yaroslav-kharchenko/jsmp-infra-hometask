# jsmp-infra-es6-strings-arrays-reverser

This package will help you to do some fun stuff.

## Instalation

`npm i jsmp-infra-es6-strings-arrays-reverser`

## Usage

```js
const jsmpInfraEs6StringsArraysReverser = require("jsmp-infra-es6-strings-arrays-reverser");

const reversedArray = jsmpInfraEs6StringsArraysReverser.arraysImmutableReverser([1, 2, 3]);
// -> [3, 2, 1]
const reversedModifiedString = jsmpInfraEs6StringsArraysReverser.stringsModifier('test', 'lol');
// -> 'lol-test|tset-lol'
```

## Tests

`npm test`