// Object Literals and Json Type and parsing and stringifying
// var objectLiteral = {
//   firstname : "Armagan",
//   isAProgrammer : true
// }
//
// console.log(JSON.stringify(objectLiteral));
//
// var validJsonValue = '{"firstName":"Armagan","isAProgrammer":"true"}';
//
// console.log(JSON.parse(validJsonValue));


// Functions are object in JS, a special type of object.
// Name is a property
// The code that you write is also a property -invocable-
//
// function greet(){
//   console.log('hi');
// }
// greet.language = 'english';
// console.log(greet.language);

// There are 2 types of functions in js. Function statements and function expressions

//Function statement - doesnt return a value, execute the piece of code

var a = 5;

console.log(greet());

function greet(){
  console.log('hi');
}

// Function expression - it doesn't have a name property to reference the function
// because there is a var that already knows where the function is placed.

var anonymousGreet = function(){
  console.log('hi');
}
console.log(anonymousGreet());

/* Here is that is so cool. When you call greet function before the declaration of the greet function expression, it should be fine. Because js engine
in the creation phase, pleaces the functions into the memory and declare them and also places the variables into the menory as well but set them all to the special value "undefined"
The variables in the memory don't have a value different from "undefined" until the they are executed in the execution phase. So if you try to call the
anonymousGreet before setting the variable you have an error that says "undefined" is not a function. */

// Passing a function as a parameter!
function log(a){
  a();
}

log(function(){
  console.log('hi');
}

);
