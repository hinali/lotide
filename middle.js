const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    let even = [arr[mid - 1], arr[mid]];
    return even;

  } else {
    let odd = [arr[mid]];
    return odd;
  }

};

module.exports = middle;