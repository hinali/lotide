const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

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

module.exports = assertObjectsEqual;