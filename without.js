const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${ actual } === ${ expected }`);
  } else console.log(`Assertion failed: ${ actual }!== ${ expected }`);
};

function without(source, itemsToRemove) {

  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    let equal = false;
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        equal = true
      }
    }
    if (!equal) {
      // console.log('should be added:' + source[i])
      newArray.push(source[i])
    }
  }
  console.log(newArray)
  return newArray
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]