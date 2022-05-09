const eqArrays = require('../eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1,arr2);
  if (result === true) {
    console.log(`✅✅✅ Yes! ${arr1} and ${arr2} are equal!`);
    return result;
  } else {
    console.log(`🛑🛑🛑 Unfortunately, ${arr1} and ${arr2} are not equal!`);
    return result;
  }
};

module.exports = assertArraysEqual;
