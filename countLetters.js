const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(arr) {
  let result = {};
  for (let item of arr) {
    if (item === " ") {
      continue;
    }
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }

  console.log(result);
  return result;
};

const expectedResult = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const result1 = countLetters("lighthouse in the house");
assertEqual(JSON.stringify(result1), JSON.stringify(expectedResult));