# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeynakim/lotide`

**Require it:**

`const _ = require('@jeynakim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1,array2)`: Assertion between two arrays to see if they are equal or not
* `assertEqual(actual,expected)`: Assertion between two values to see if they are equal or not 
* `assertObjectsEqual(object1, object2)`: Assertion between two objects to see if they are equal or not 
* `head(array)`: returns every element except the first element of the array
* `tail(array)`: returns the first element in the array
* `middle(array)`: returns the middle-most element(s) of the given array
* `countLetters(string)`: returns a count of each of the letters in that sentence
* `countOnly(allItems, itemsToCount)`: take in a collection of items, return counts for a specific subset of those items
* `eqArrays(array1,array2)`: takes in two arrays, returns true or false
* `eqObjects(object1,object2)`: returns true if both objects have identical keys with identical values
* `findKey(object,callback)`:  return the first key for which the callback returns a truthy value
* `findKeyByValue(object,value)`: return the first key which contains the given value
* `flatten(array)`: take in an array, returns a "flattened" version of the array
* `letterPositions(string)`: returns all the indices in the string where each character is found
* `map(array,callback)`: returns a new array based on the results of the callback function
* `takeUntil(array,callback)`: collecting items from a provided array until the callback provided returns a truthy value
* `without`: returns a subset of a given array, removing unwanted elements