'use strict';
var assert = require('assert');
var f = require('./includes.js');
describe('************************************************\n', function() {

describe('includes \n', function() {
	it('should return null for undefined input', function() {
		assert.equal(null, f());
  });
	it('should return a boolean', function() {
		assert.equal('boolean', typeof f('abcde', 'cd'));
		assert.equal('boolean', typeof f('abcde', 'xy'));
  });
	it('should return true for matched pattern', function() {
		// assert.equal(true, f('abcde', 'ab'));
		assert.equal(true, f('abcde', 'cd'));
		// assert.equal(true, f('abcde', 'de'));
  });
	it('should return false for unmatched pattern', function() {
		assert.equal(false, f('abcde', 'xy'));
  });
});

}); // ************************************************
