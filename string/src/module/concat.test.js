'use strict';
var assert = require('assert');
var f = require('./concat.js');
describe('************************************************\n', function() {

describe('concat \n', function() {
	it('should return a string', function() {
		assert.equal('string', typeof f('abc', 'def'));
  });
	it('should return concated string', function() {
		assert.equal('abcdef', f('abc', 'def'));
  });
	it('should return null for undefined input', function() {
		assert.equal(null, f());
		assert.equal(null, f('abc'));
  });
});

}); // ************************************************
