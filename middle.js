const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }

    }
    return true;
  }
};
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    let even = [arr[mid - 1], arr[mid]];
    return even;

  } else {
    let odd = [arr[mid]];
    return odd;
  }

};
assertArraysEqual(middle([1,2,3 ,4]), [2,3]);