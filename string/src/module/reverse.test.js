'use strict';
var assert = require('assert');
var fn = require('./reverse.js');
describe('************************************************\n', function() {

describe('Reverse String', function() {
	var expected = '$#@-321_cba';
	var actual = fn('abc_123-@#$');
	it('should be a string', function() {
		assert.equal('string', typeof actual);
  });
	it('should reverse characters in string', function() {
		assert.equal(expected, actual);
  });
});

}); // ************************************************
