'use strict';
var assert = require('assert');
var f = require('./repeat.js');
describe('************************************************\n', function() {

describe('repeat', function() {
	it('should return a string', function() {
		assert.equal('string', typeof f('ab', 3));
  });
	it('should return string repeated correct number of times', function() {
		assert.equal('ababab', f('ab', 3));
  });
	it('should return empty string for n of zero', function() {
		assert.equal('', f('ab', 0));
  });
	it('should return null for n less than zero', function() {
		assert.equal(null, f('ab', -1));
  });
});

}); // ************************************************
