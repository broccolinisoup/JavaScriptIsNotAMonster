"use strict"; // global affect.
var person;
persom = {};
console.log(persom);
// without using "use strict" JS doesnt complain the syntax error of person- persom
// It just creates both which this behaviour sometimes cause a big trouble. So if you wanna
// get avoid of it, use "use strict"

function logNewPerson(){
  "use strict"; // function affect
  var person2;
  persom2 ={};
  console.log(persom2);
}
