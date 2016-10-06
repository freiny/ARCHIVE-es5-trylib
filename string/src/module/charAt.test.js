'use strict';
var assert = require('assert');
var f = require('./charAt.js');
describe('************************************************\n', function() {

describe('charAt', function() {
	it('should return a string', function() {
		assert.equal('string', typeof f(3, 'abcde'));
  });
	it('should return correct character', function() {
		assert.equal('d', f(3, 'abcde'));
  });
	it('should return null if over bounds', function() {
		assert.equal(null, f(7, 'abcde'));
  });
	it('should return null if under bounds', function() {
		assert.equal(null, f(-1, 'abcde'));
  });
});

}); // ************************************************
