var a = 3;
console.log(typeof a);

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird
console.log(Object.prototype.toString.call(d)); // better. The way to tell that this is an array

function Person(name){
  this.name = name;
}

var e = new Person("Armagan");
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // it's a bug for a long time. They don't fix it cause many library rely on it.
var z = function(){};
console.log(typeof z);
