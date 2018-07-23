# detect-trailing-whitespace

[![npm](http://img.shields.io/npm/v/detect-trailing-whitespace.svg)](https://www.npmjs.com/package/detect-trailing-whitespace)
[![Linux Build Status](http://img.shields.io/travis/sonicdoe/detect-trailing-whitespace.svg)](https://travis-ci.org/sonicdoe/detect-trailing-whitespace)
[![Windows Build Status](http://img.shields.io/appveyor/ci/sonicdoe/detect-trailing-whitespace.svg)](https://ci.appveyor.com/project/sonicdoe/detect-trailing-whitespace)

> Detect trailing whitespace

## Installation

```console
$ npm install detect-trailing-whitespace
```

## Usage

```js
const fs = require('fs');
const detectTrailingWhitespace = require('detect-trailing-whitespace');

const fileContents = fs.readFileSync('file.txt', 'utf8');
const containsTrailingWhitespace = detectTrailingWhitespace(fileContents);

console.log(containsTrailingWhitespace);
// => `true` if file contains trailing whitespace, otherwise `false`
```

## Changelog

This project follows [Semantic Versioning 2](https://semver.org).

- v0.1.0 (2015-01-24): Initial release.
