function eqArrays(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (let key in obj1) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

  const assertObjectsEqual = function (actual, expected) {
    const inspect = require('util').inspect;
    let result = eqObjects(actual, expected);
    if (result === true) {
      console.log(`✅✅✅ Yes! ${inspect(actual)} and ${inspect(expected)} are equal!`)
      return result;
    } else {
      console.log(`🛑🛑🛑 Unfortunately, ${inspect(actual)} and ${inspect(expected)} are not equal!`);
      return result;
    }
  }

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); 
