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

const eqObjects = function(object1, object2) {
  const actual = Object.keys(object1);
  const expected = Object.keys(object2);
  if (actual.length === expected.length) {
    for (let item of actual) {
      if (object1[item] === object2[item]) {
        return true;
      } else if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        eqArrays(object1[item], object2[item]);
      } else {
        return false;
      }
    }
  }
  return false;

};
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected))
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);

};
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const a1 = { a: "1", b: "2" };
const b1 = { b: "2", a: "1" };
assertObjectsEqual(a1, b1);
