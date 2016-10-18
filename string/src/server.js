"use strict";
// ****************************************************************
// STRING MODULE
// ****************************************************************
const String = require('./module');

var s1 = 'abcde';
console.log(String.charAt(s1, 3));
// OUTPUT: d

var s2 = 'ABC-';
console.log(String.repeat(s2, 3));
// OUTPUT: ABC-ABC-ABC-
