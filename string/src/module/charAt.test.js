'use strict';
var assert = require('assert');
var f = require('./charAt.js');
describe('************************************************\n', function() {

describe('charAt \n', function() {
	it('should return a string', function() {
		assert.equal('string', typeof f('abcde', 3));
  });
	it('should return correct character', function() {
		assert.equal('d', f('abcde', 3));
  });
	it('should return null if over bounds', function() {
		assert.equal(null, f('abcde', 7));
  });
	it('should return null if under bounds', function() {
		assert.equal(null, f('abcde', -1));
  });
});

}); // ************************************************
