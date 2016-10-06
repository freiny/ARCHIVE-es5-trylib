'use strict';
var assert = require('assert');
var f = require('./endsWith.js');
describe('************************************************\n', function() {

describe('endsWith', function() {
	it('should return null for undefined input', function() {
		assert.equal(null, f());
		assert.equal(null, f('abc'));
  });
	it('should return a boolean', function() {
		assert.equal('boolean', typeof f('abcde', 'de'));
		assert.equal('boolean', typeof f('abcde', 'xy'));
  });
	it('should return true for matched ending', function() {
		assert.equal(true, f('abcde', 'de'));
  });
	it('should return false for unmatched ending', function() {
		assert.equal(false, f('abcde', 'xy'));
  });
});

}); // ************************************************
