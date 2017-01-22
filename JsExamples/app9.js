// When we say new an empty object is created like so john = {}
// this variable pointing the empty object and assigns the properties
// john.firstname and john.lastName to the empty object.and returns this
// object automatically


var Person = function(firstname,lastName){

  this.firstName = firstname;
  this.lastName = lastName;
}

var john = new Person("John","Doe");
console.log(john);
var jane = new Person("Jane","Doe");
console.log(jane);

Person.prototype.getFormalFullName = function(){
  return this.lastName + ", " + this.firstName;
}
// We could also add this getFormalFullName method inside of the function.
// However,if we do so, when we create an object every time, the method also will
// be created which means takes more space in the memory but if we add this method to the prototype
// itt means created only once for all the objects that you created.


console.log(john);

// Boxing is similar to Java

String.prototype.isGreaterThanTheLimit = function(limit){
  return this.length > limit;
}

console.log("Armagan".isGreaterThanTheLimit(13));

// Js automatocally box the primitive values into the objects. Here i a usage.
