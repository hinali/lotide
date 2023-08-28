const assertEqual = require("../assertEqual");
const head = require("../head");
const assert = require ('chai').assert;

describe("#head", () => {
  it("return 5 for [5, 6, 7]", () =>{
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("return '1' for ['1']", () =>{
    assert.strictEqual(head(['1']), '1');
  })
});

