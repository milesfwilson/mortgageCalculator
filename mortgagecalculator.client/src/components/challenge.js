// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

// empty endArray push old/key value pair into

// iterate through object
//  keyValueArray for old key/value pair
// push key value into keyValueArray
// push into the endArray

// return filled endArray with keyValueArray

function toArray(array) {
  const endArray = []

  for (const key in array) {
    endArray.push([key, array[key]])
  }

  return endArray
}
