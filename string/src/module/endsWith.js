"use strict";

function endsWith(s, ending){
	if (typeof s === 'undefined' || typeof ending === 'undefined') return null;
	if (typeof s !== 'string' || typeof ending !== 'string') return null;
	if (ending.length > s.length) return false;

	var is = s.length-1;
	for (var i=ending.length-1; i>-1; i--,is--) {
		if (s[is] !== ending[i]) return false;
	}
	return true;
}

// ****************************************************************
module.exports = endsWith;
