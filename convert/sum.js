var sum = function(a) {
  var s = a;

  var f = function(x) {
    s += x;
    return f;
  }

  f.valueOf = function() { return s; }

  return f;
}


console.log(sum(5)(2)(3).valueOf());
