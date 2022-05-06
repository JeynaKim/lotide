function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function (arr1, arr2) {
  let result = eqArrays(arr1,arr2);
  if (result === true) {
    console.log(`Yes! ${arr1} and ${arr2} are equal!`);
    return result;
  } else {
    console.log(`Unfortunately, ${arr1} and ${arr2} are not equal!`);
    return result;
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["jeyna", "is", "korean"]
const words2 = ["what", "day", "is", "today"];

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]);
const results3 = map(words2, word => word[0]);

assertArraysEqual(results1, ["g", 'c', "t", "m", "t"]);
assertArraysEqual(results2, ["j", 'i', "k"]);
assertArraysEqual(results3, ["w", 'd', "i", "t"]);
