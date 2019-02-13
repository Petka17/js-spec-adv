function print(text) {
  console.log("Hi", text);
}

var t = setTimeout(print, 1000, "1");
setTimeout(print, 500, "2");

// clearTimeout(t);
