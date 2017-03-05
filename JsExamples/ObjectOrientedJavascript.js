var person = {

  firstName : "Default",
  lastName : "Default",
  getFullName : function(){
    return this.firstName + " " + this.lastName;
  }
}


var john = {
  firstName : "John",
  lastName : "Doe"
}


john.__proto__ = person; // Not a suggested way, We are using it here just for understanding
console.log(john.getFullName());

for (var prop in john) {
  if (john.hasOwnProperty(prop)) {
    console.log(prop + " : " + john[prop] );

  }
}

var jane = {
  address : "111 Main Street",
  getFormalFullName : function(){
    return this.lastName + ", " + this.firstName
  }
}

var jim = {
  getFirstName : function(){
    return this.firstName;
  }
}


console.log(john);
jane.__proto__ = person;
console.log(jane.getFullName());
