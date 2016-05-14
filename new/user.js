function User(name) {
  this.sayHi = function() {
    console.log("My name is " + name);
  }
}

var vasya = new User("Vasya");

vasya.sayHi();
