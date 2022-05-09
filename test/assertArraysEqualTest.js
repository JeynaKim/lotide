const eqArrays = require('../eqArrays');

assertArraysEqual(["hello", "jeyna", "howareyou"], [1, "jeyna", "howareyou"]);
// => should not PASS
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
