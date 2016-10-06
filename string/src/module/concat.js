"use strict";

function concat(s1, s2){
	if (typeof s1 === 'undefined' || typeof s2 === 'undefined') return null;
	return s1+s2;
}

// ****************************************************************
module.exports = concat;
