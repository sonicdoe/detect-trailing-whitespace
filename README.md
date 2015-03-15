# detect-trailing-whitespace

[![Node.js package](http://img.shields.io/npm/v/detect-trailing-whitespace.svg)](https://www.npmjs.com/package/detect-trailing-whitespace)
[![Linux Build Status](http://img.shields.io/travis/SonicHedgehog/detect-trailing-whitespace/develop.svg)](https://travis-ci.org/SonicHedgehog/detect-trailing-whitespace)
[![Windows Build Status](http://img.shields.io/appveyor/ci/SonicHedgehog/detect-trailing-whitespace.svg)](https://ci.appveyor.com/project/SonicHedgehog/detect-trailing-whitespace)

Detect trailing whitespace.

## Getting started

Install using:

```shell
$ npm install detect-trailing-whitespace --save
```

Use it like this:

```js
var fs = require('fs');
var detectTrailingWhitespace = require('detect-trailing-whitespace');

var fileContents = fs.readFileSync('file.txt', 'utf8');
var containsTrailingWhitespace = detectTrailingWhitespace(fileContents);

// true if file contains trailing whitespace, otherwise false.
console.log(containsTrailingWhitespace);
```

## Release History

This project follows [Semantic Versioning 2](http://semver.org/).

- v0.1.0 (2015-01-24): Initial release.

## License

detect-trailing-whitespace is licensed under the BSD 2-clause license, subject to additional terms. See [LICENSE](./LICENSE) for the full license text.
