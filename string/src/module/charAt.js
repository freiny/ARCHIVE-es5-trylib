"use strict";
/* ****************************************************************
Reverse String:
	Take an input string and return a sting with its characters reversed.

fn('abcdefg') -> 'gfedcba'
******************************************************************* */
function charAt(s, n){
	if (n < 0 || n >= s.length) return null;
	return s[n];
}

// ****************************************************************
module.exports = charAt;
