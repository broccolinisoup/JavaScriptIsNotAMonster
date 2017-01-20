// function greeting(whatToSay){
//
//   return function(name){
//     console.log(whatToSay + ' ' + name);
//   }
//
// }
//
// var greet = greeting('Hello');
// greet('Arm');



/* This is Closure. A feature of JAvascript LAnguage.
Even calling grreting function is finished -is top off from the execution stack-
JS engine makes sure that the variables in that function might be used going down the stack.
So the engine just keep them around.
When the return function is called, a new execution stack is created and with this stack and
with the variables of the other function -outer environment's variables- is another environment
whose name is Closure.
*/



// function buildFunctions(){
//   var arr = [];
//
//   for(var i = 0 ; i <3; i++){
//     console.log(i);
//     arr.push(
//       function(){
//         console.log(i); // when creating the arr, this line is not executed. Here is the point. As
//         // it is not executed, function doesnt gonna be defined console.log(1). It is defined console.log(i)
//       }
//     );
//   }
//   return arr;
// }
//
//
// var fs = buildFunctions();
//
// fs[0]();
// fs[1]();
// fs[2]();

//////////////////////


function buildFunctions2(){
  var arr = [];

  for(var i = 0 ; i <3; i++){
    console.log(i);
    arr.push(
      (function(j){
        return function(){
          console.log(j);
        }
      }(i))
    )
  }
  return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();



//////////////////////////



function makeGreeting(language){
  return function(firstname, lastname){
    if(language == 'en'){ console.log('Hello ' + firstname + ' ' + lastname);}
    if(language == 'es'){console.log('Hola ' + firstname + ' ' + lastname);}
  }
}
var greetingEng = makeGreeting('en'); // Javascript engine know how to create closure and what to put inside
// It knows where the en language variable comes from which functions even this fuction is top off the stack.
// so when you call greetingEng('Armagan', 'Ersoz'); it knows greetingEng function left a variable -language = en- behind in the memory
var greetingEs = makeGreeting('es');

greetingEng('Armagan', 'Ersoz');
greetingEs('Armagan', 'Ersoz');
