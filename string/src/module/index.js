"use strict";
// ****************************************************************
var String = function(){
	this.charAt = require('./charAt');
	this.concat = require('./concat');
	this.endsWith = require('./endsWith');
	
};
// ****************************************************************
module.exports = new String();
