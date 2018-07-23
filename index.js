'use strict';

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Argument to detect-trailing-whitespace must be a string');
	}

	return /[ \t]+$/m.test(str);
};
