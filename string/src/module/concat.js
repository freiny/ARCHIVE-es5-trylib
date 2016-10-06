"use strict";
/* ****************************************************************
Reverse String:
	Take an input string and return a sting with its characters reversed.

fn('abcdefg') -> 'gfedcba'
******************************************************************* */
function concat(s1, s2){
	if (typeof s1 === 'undefined' || typeof s2 === 'undefined') return null;
	return s1+s2;
}

// ****************************************************************
module.exports = concat;
