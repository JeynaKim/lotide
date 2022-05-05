const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${ actual } === ${ expected }`);
  } else console.log(`Assertion failed: ${ actual }!== ${ expected }`);
};


// Consider using the Object.keys function to help you easily search through all the object keys.

// Consider using for...of to loop over the keys returned by Object.keys.

const findKeyByValue =function(object,value) {
for (let key of Objectkeys(object)) {
  // object["scifi" === value], the expense기때문에 skip됨 다음걸로
  // drama ---> value가 나옴 (the wire)
  if (object[key] === value) {
    return key;
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);