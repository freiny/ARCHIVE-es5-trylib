"use strict";

function includes(s, pattern, n){
	var n = typeof n === 'undefined' ? 0 : n;
	if (typeof s === 'undefined' || typeof pattern === 'undefined') return null;
	if (typeof s !== 'string' || typeof pattern !== 'string') return null;
	if (pattern.length > s.length) return false;

	for (var i=n; i<(s.length-pattern.length); i++) {
		var ret = true;
		for (var ch=0; ch<pattern.length; ch++) {
			
			if (s[i+ch] !== pattern[i+ch]) {
				ret = false;
				break;
			}
		}
		if (ret === true) return true;
	}
	return ret;
}

// ****************************************************************
module.exports = includes;
