const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  console.log("Tail of array: ",arr.slice(1));
  return arr.slice(1);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const result1 = tail([1,2,3,4,5]);
assertEqual(result1.length, 4);
assertEqual(result1[0], 2);
assertEqual(result1[1], 3);
assertEqual(result1[2], 4);
assertEqual(result1[3], 5);