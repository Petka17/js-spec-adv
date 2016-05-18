var numbers = "[1,2,3]";

console.log(JSON.parse(numbers));

var userStr = '{"name": "test", "age": 20}'
var user = JSON.parse(userStr);
console.log(user);
console.log(JSON.stringify(user));
