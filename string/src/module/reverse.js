"use strict";
/* ****************************************************************
Reverse String:
	Take an input string and return a sting with its characters reversed.

fn('abcdefg') -> 'gfedcba'
******************************************************************* */
function reverse(s){
	var ret = '';
	for (var i=s.length-1; i>-1; i--) {
		ret += s[i];
	}
	return ret;
}

// ****************************************************************
module.exports = reverse;
