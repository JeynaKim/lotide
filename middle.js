function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1,arr2);
  if (result === true) {
    console.log(`Yes! ${arr1} and ${arr2} are equal!`);
    return result;
  } else {
    console.log(`Unfortunately, ${arr1} and ${arr2} are not equal!`);
    return result;
  }
}

const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2) {
    return []
  } else if (arr.length % 2 === 0)
    return [arr[arr.length / 2 - 1], arr[arr.length / 2]]
  else
    return [arr[Math.floor(arr.length / 2)]] 
  }
  
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
assertArraysEqual(middle(test5),test5);