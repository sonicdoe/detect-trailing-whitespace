'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var detectTrailingWhitespace = require('..');

function getFixture(fixture) {
	return fs.readFileSync(path.join(__dirname, 'fixtures', fixture), 'utf8');
}

it('should detect trailing whitespace in a file containing a trailing space', function() {
	assert.equal(detectTrailingWhitespace(getFixture('space.txt')), true);
});

it('should detect trailing whitespace in a file containing a trailing tab', function() {
	assert.equal(detectTrailingWhitespace(getFixture('tab.txt')), true);
});

it('should detect no trailing whitespace in a file containing no trailing whitespace', function() {
	assert.equal(detectTrailingWhitespace(getFixture('none.txt')), false);
});

it('should throw a TypeError if argument is not a string', function() {
	assert.throws(function() {
		detectTrailingWhitespace({});
	}, TypeError);
});
