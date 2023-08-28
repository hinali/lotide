const assert = require('chai').assert;
const tail = require("../tail");

describe("#tail", () => {
  it("check length is 2 for given array", () =>{
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2);
  });

  it("check first element is 'Lighthouse' in resulting array'", () =>{
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse");
  });
});



