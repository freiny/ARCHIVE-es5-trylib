"use strict";
// ****************************************************************
var String = function(){
	this.charAt = require('./charAt');
	this.concat = require('./concat');
	this.endsWith = require('./endsWith');
	this.repeat = require('./repeat');	
};
// ****************************************************************
module.exports = new String();
