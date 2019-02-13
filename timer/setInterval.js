var i = setInterval(function() {
  console.log("Hi");
}, 1000);

setTimeout(function() {
  clearInterval(i);
  console.log("Stop");
}, 5500);
