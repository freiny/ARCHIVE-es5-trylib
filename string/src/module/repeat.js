"use strict";

function repeat(s, n){
	if (n < 0) return null;
	if (n === 0) return '';
	var ret = '';
	for (var i=0; i<n; i++) {
		ret += s;
	}
	return ret;
}

// ****************************************************************
module.exports = repeat;
