const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

let test1 = [1]; // => [0]
let test2 = [1,2,3]; // => [2]
let test3 = [1,2,3,4,5]; // => [3]
let test4 = [1,2,3,4]; // => [2,3]
let test5 = [1,2,3,4,5,6]; // => [3,4]

console.log(middle(test1));
console.log(middle(test2));
console.log(middle(test3));
console.log(middle(test4));
console.log(middle(test5));

assertArraysEqual(middle(test1),test1);
assertArraysEqual(middle(test2),test2);
assertArraysEqual(middle(test3),test3);
assertArraysEqual(middle(test4),test4);
assertArraysEqual(middle(test5), test5);