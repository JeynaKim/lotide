const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1,arr2);
  if (result === true) {
    console.log(`Yes! ${arr1} and ${arr2} are equal!`);
    return result;
  } else {
    console.log(`Unfortunately, ${arr1} and ${arr2} are not equal!`);
    return result;
  }
};

function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const letterPositions = function (string) {
  const result = {};
  let index = 0;

  for (let letter of string) {
    if (result[letter]) {
      result[letter].push(index);
    } else {
      result[letter] = [index];
    }
    index++;
  }
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);


