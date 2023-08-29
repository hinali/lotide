const assertEqual = require("./assertEqual");

const findKey = function(obj, cb) {
  const result = Object.keys(obj);
  for (let item of result) {
    if (cb(obj[item])) {
      return item;
    }
  }

};

let object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

let result1 = findKey(object1, x => x.stars === 2);
assertEqual((result1), 'noma');

let result2 = findKey(object1, x => x.stars === 3);
assertEqual((result2), 'noma');

module.exports = findKey;