var person = {
  firstName : "Armagan",
  lastName : "Ersoz",
  // If the function is a method attach to an object like above, "this" refer to the function's execution context not the global execution context's this
  getFullName: function(){
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}
/*All functions have access to these functions
call(), apply(), bind()*/

console.log(person.getFullName());

var logName = function(lang1, lang2){
  console.log("Logged : " + this.getFullName());
  console.log("Arguments : " + lang1 + " " + lang2);
}

var logPersonName = logName.bind(person); // whatever object I want to be the this variable when the function runs.
// bind basicly creates a copy of logName function and bind with person object. after binding this.getFullName() will be equal to person.getFullName()
//unlike bind creates a copy of the function, call executes it and control ehat this will be
logPersonName("en","es");

logName.call(person, "en", "es");
logName.apply(person, ["en", "es"]); // only different is accepting the params way


var person2 = {
  firstName : "Arm",
  lastName : "Ers",
}

console.log(person.getFullName.call(person2)); // barrowing as long as similar property names

function multiply(a,b){
  return a * b;
}

// Permanent copy with the certain parameters
var multiplyByTwo = multiply.bind(this,2); // If the bind is not used for executiong the fucntion what is the point of second parameter 2?
// I don't wanna bind any object so put the first param as this. Here is what happened when you put second parameter to bind
function multiplyByTwo2(b){
  var a  = 2;
  return a * b;
}
console.log(multiplyByTwo(6));
var multiplyByThree = multiply.bind(this,3); // creating a copy of function but with some pre-set parameteres is called function currying (useful matematical situations)
