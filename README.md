# redux-promise-middleware-define-constants [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Helper for defining constants for use with the redux-promise-middleware package.

## Installation

```sh
$ npm install --save redux-promise-middleware-define-constants
```

## Usage

```js
const defineRPMConstants = require('redux-promise-middleware-define-constants');

const GET_USERS = defineRPMConstants('GET_USERS');
console.log(GET_USERS.ACTION_TYPE); // GET_USERS
console.log(GET_USERS.PENDING); // GET_USERS_PENDING
console.log(GET_USERS.FULFILLED); // GET_USERS_FULFILLED
console.log(GET_USERS.REJECTED); // GET_USERS_REJECTED

//extra aliases

console.log(GET_USERS.TYPE); // GET_USERS
console.log(GET_USERS.ACTION); // GET_USERS

```
## License

MIT © [PC Thomatos](https://github.com/pcthomatos)


[npm-image]: https://badge.fury.io/js/redux-promise-middleware-define-constants.svg
[npm-url]: https://npmjs.org/package/redux-promise-middleware-define-constants
[travis-image]: https://travis-ci.org/pcthomatos/redux-promise-middleware-define-constants.svg?branch=master
[travis-url]: https://travis-ci.org/pcthomatos/redux-promise-middleware-define-constants
[daviddm-image]: https://david-dm.org/pcthomatos/redux-promise-middleware-define-constants.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/pcthomatos/redux-promise-middleware-define-constants
[coveralls-image]: https://coveralls.io/repos/github/pcthomatos/redux-promise-middleware-define-constants/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/pcthomatos/redux-promise-middleware-define-constants

