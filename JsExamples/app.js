// Article : https://medium.com/@broccolinisoup/do-we-really-know-how-javascript-works-329c800778ac#.wodb2ce5u

/*
Global execution context is created by the js engine and it decides the value of "this" depends on where your js code is executed.
For example if you run your code on browser, your global object is window.
Each window has an execution context which means each window has a global object. At this case; "window" equals "this"
If you define a global variable which means not inside a function, it belongs to global object.

Hoisting :
Because variable declarations (and declarations in general) are processed before any code is executed,
declaring a variable anywhere in the code is equivalent to declaring it at the top.
This also means that a variable can appear to be used before it's declared.
This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code.
*/

// Example 1
function b(){
  var myVar;
  console.log(myVar);
}

function a(){
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
//When the creation phase is finished, We are in the global execution context, so var is 1. Then a is called and another execution context is created.
//In this execution context there is another myVar variable which equals to 2.  Inside in the a function, b is called and another execution context
//is created. In this execution context, there is another myVar variable which is undefined. So there are variable environments. When the function is done, its execution stach is top off.


// Example 2

myVar = 5;
console.log(myVar);
var myVar;

greetThem();
function greetThem(){
  console.log("Hello there!");
}

var a; // var a is placed in the memory during the execution context creation phase! and js engine sets the var's value to "undefined" - the special value.
console.log(a);

if(a === undefined){
  console.log("a is undefined");
}
else {
  console.log("a is defined");
}

/* Console log :
undefined
a is undefined! */

// Example 3

console.log(a);

if(a === undefined){
  console.log("a is undefined");
}
else {
  console.log("a is defined");
}

/* Console log :
Uncought error : a is not defined

** Because js machine in the browser says "hey I don't have any var a in my memory"
*/

/* So execution context is created in 2 phases.
  1 ) Creation phases
    Gloabal obj, this and if exist outer env are created and "hoisting" is done. Hoisting means setting all the variables undefined and the functions up.
*/

// Example 4

b();
function b(){
  console.log("Called b!");
}
console.log(a);
var a = "Hello World!";
console.log(a);

/*
Console log :
Called b!
undefined
Hello World!
*/

/*
Second phase of the execution context is code execution.
 If js execute the code line by line, we expect to see the error which is a is not defined,
but when the first phase of execution context, there is hoisting which settings all the variables undefined and setting all the functions up
*/

/*
Anytime you invoke a function, a new execution context will be created and put on the execution stack. (the new execution context has a creation and an execution phase)
Stack :
b execution
a execution
global execution
*/

function a(){
  b();
  var c;
}

function b(){
  var d;
}
a();
var d;

// Example 5
function b(){
  console.log(myVar);
}

function a(){
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// Console output :1
// If the b function's execution context cant find the defined a, will look for the outer environment. At this case the outer env is global e.c.
// Not in a. In a, it is just called. But the function b is defined in the global e.c. just like var myvar=1. **where the function sets lexically. the same level as myvar=1**
