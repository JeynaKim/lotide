function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } for (let i = 0; i < arr1.length; i++) {
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
};

const flatten = function(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let num of arr[i]) {
        newArray.push(num);
      }
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]