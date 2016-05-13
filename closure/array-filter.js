
function filter(arr, func) {
  return arr.filter(function(item, i) {
      return func(item);
  });
}

function inBetween(a, b) {
  return function(item) {
    return item >= a && item <= b;
  }
}

function inArray(arr) {
    return function(item) {
      return arr.indexOf(item) > -1;
    }
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6

console.log(filter(arr, inBetween(3, 6))); // 3,4,5,6

console.log(filter(arr, inArray([1, 2, 10]))); // 1,2
