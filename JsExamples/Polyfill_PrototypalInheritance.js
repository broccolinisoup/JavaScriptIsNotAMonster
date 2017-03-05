// Polyfill (if the browser doesn't support object.create)
if (!Object.create) {
  Object.create = function(o){
    if (arguments.length > 1) {
      throw new Error("Create function accepts only 1 argument!");
    }
    function F(){};
    F.prototype = o;
    return new F();
  };

}

// IT's like class. Not class but like class. Schema of the objects that you wanna create.
var person = {
  firstName : 'Default',
  lastName : 'Default',
  greeting : function(){
    return 'Hi' + this.firstName;
  }

}

var john = Object.create(person); // Pure prototypel inheritance.

john.firstName = "John";
john.lastName = "Doe";

console.log(john);
