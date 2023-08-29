const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj, value) {
  const result = Object.keys(obj);
  for (let item of result) {
    if (obj[item] === value) {

      return item;
    }
  }
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;