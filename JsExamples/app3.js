// // ARRAYS
// var arr = [
//   1,
//   false,
//   {
//     name : 'Tony',
//     address : '111 Main St'
//   },
//   function(name){
//     var greeting = 'Hello ';
//     console.log(greeting + name);
//   },
//   "hello"
// ];
//
// console.log(arr);
// arr[3](arr[2].name); // This is just sooo strange! :)
//
//
// ////////////////////////////////////////////////////////
//
// //// ARGUMENTS
//
// function greet(firstname, lastname, language){
//   // function greet(firstname, lastname, language, ...other){ next version of Js you can add more parameter
// // function greet(firstname, lastname, language = 'en'){ next version of Js you can give this default parameter
//   language = language || 'en'; // setting default value
//
//   if(arguments.length === 0){
//     console.log('Missing args!');
//     console.log('--------------');
//   }
//
//   console.log("Name :" + firstname);
//   console.log("Surname :" + lastname);
//   console.log("Language :" + language);
//   // console.log("Address : " + other[0]);
//   console.log("Arg 0 : " + arguments[0]);
//   console.log('-------');
//
// }
//
// greet();
// greet('Arm');
// greet('Arm','Ersoz');
// greet('Arm', 'Ersoz', 'en');
// greet('Arm', 'Ersoz', 'en','Brisbane');

////////////////////////////////////////////////////////


// IIFE (Immidiately invoked function expressions)
//
// var greeting = function(name){
//   console.log("Hello " + name);
// }
//
// // greeting("John");
//
// var greeting = function(name){
//   return "Hello " + name;
// }('Armagan');
//
// console.log(greeting);



// IIFE
// Valid function expression
// (function(name){
//   console.log("Hello " + name);
// })('Armagan');

// InValid function expression
// function(name){
//   return "Hello " + name;
// }

var greeting = 'Hola';
(function(global, name){
  var greeting = 'Hello';
  global.greeting = "Merhaba"; // mutating the global greeting var intentionally
  console.log(greeting +' '+ name);
})(window,'Armagan');

console.log(greeting);
