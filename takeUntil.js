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

const takeUntil = function (array, callback) {
  let newArray = [];
  for (let data of array) {
    if (callback(data) === true) {
      return newArray;
    } else {
      newArray.push(data);
    }
  }
return newArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);