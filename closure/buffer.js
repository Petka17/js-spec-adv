_str = "";

function makeBuffer() {
  var _str = "";

  function buffer(val) {
    if (arguments.length === 0) return _str
    _str += String(val);
  }

  buffer.clear = function() {
    _str = "";
  }

  return buffer;
}

var buffer = makeBuffer();

buffer(1);
buffer(2);
buffer(0);
console.log(buffer());

buffer.clear();
buffer(0);
buffer(2);
buffer(1);
console.log(buffer());
