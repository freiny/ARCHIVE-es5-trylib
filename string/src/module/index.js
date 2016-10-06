"use strict";
// ****************************************************************
var String = function(){
	this.charAt = require('./charAt');
	this.concat = require('./concat');
};
// ****************************************************************
module.exports = new String();
