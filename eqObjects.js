const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

module.exports = eqObjects;