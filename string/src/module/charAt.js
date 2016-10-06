"use strict";

function charAt(s, n){
	if (n < 0 || n >= s.length) return null;
	return s[n];
}

// ****************************************************************
module.exports = charAt;
