console.log("Counter as a Function");

function counterFactory() {
  var count = 1;

  return function() {
    return count++;
  }
}

var counter = counterFactory();

console.log(counter());
console.log(counter());
console.log(counter());
console.log();

console.log("Counter as an Object");
function counterObjFactory() {
  var count = 1;

  return {
    getNext: function() {
      return count++;
    },

    reset: function() {
      count = 1;
    }
  }
}

var counterObj = counterObjFactory();

console.log(counterObj.getNext());
console.log(counterObj.getNext());
counterObj.reset();
console.log(counterObj.getNext());
console.log();

console.log("Counter as a Function with Props");

function counterAdvFactory() {
  var count = 1;

  function counter() {
      return count++;
  }

  counter.set = function(val) {
    count = val;
  }

  counter.reset = function() {
    count = 1;
  }

  return counter;
}

var counterAdv = counterAdvFactory();

console.log(counterAdv());
console.log(counterAdv());
counterAdv.reset();
console.log(counterAdv());
counterAdv.set(5);
console.log(counterAdv());
console.log();
