const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const eqObjects = require("./eqObjects");
const findKeyByValue = require("./findKeyByValue");
const map = require("./map");


const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countOnly = require("./countOnly");
const countLetters = require("./countLetters");
const letterPositions = require("./letterPositions");
const eqArrays = require("./eqArrays");
const without = require("./without");

module.exports = {
  head,
  tail,
  middle,
  countOnly,
  countLetters,
  letterPositions,
  eqArrays,
  without,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  eqObjects,
  findKeyByValue,
  map
};