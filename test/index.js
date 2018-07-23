'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const detectTrailingWhitespace = require('..');

function getFixture(fixture) {
	return fs.readFileSync(path.join(__dirname, 'fixtures', fixture), 'utf8');
}

it('should detect trailing whitespace in a file containing a trailing space', () => {
	assert.equal(detectTrailingWhitespace(getFixture('space.txt')), true);
});

it('should detect trailing whitespace in a file containing a trailing tab', () => {
	assert.equal(detectTrailingWhitespace(getFixture('tab.txt')), true);
});

it('should detect no trailing whitespace in a file containing no trailing whitespace', () => {
	assert.equal(detectTrailingWhitespace(getFixture('none.txt')), false);
});

it('should throw a TypeError if argument is not a string', () => {
	assert.throws(() => {
		detectTrailingWhitespace({});
	}, TypeError);
});
