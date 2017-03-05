// Is JS pass by value or pass by reference or both?
// Pass by value (primitives)

// Example 1
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

/*Console output :
2
3*/

// When you have a primitive type value and then you set this value into another variable like as above. b = a. What happenes is JS engine copy the promitive value and put b variable into another
// location in the memory. So a and b points different addresses but they have the same value. Then, when you change the value of a, what you expect to see value of b? B is still same. 2. Because
// they are different variables in the memory. This approach calls by value.

// by reference (all objects (including functions))
// Example 2
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate
}

changeGreeting(d);
console.log(c);
console.log(d);

// When you set a variable to an object value, JS engine points the object location for value of this variable. So when you
// do d = c, JS engine creates another variable d and points exactly the same location of the object in the memory. So if you change
// an attribute of c, this means that you also change the attribute of d. Passing by reference.

// So basically, Js supports both passing by value (for primitive values) and passing by reference (for object values).

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);

// Example 3
/* If the value is primitive, it is property, if the value if function is called method */

function a() {
    console.log(this); // this points to the global object
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);
}

a();
console.log(newvariable); // not good!
b();

// Example 4
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        console.log(self);

        self.name = 'Updated c object'; // If you use this keyword in a method -method means a function attached to an object- this keyword points to the object.c.
        console.log(self);

        var setname = function(newname) {
            self.name = newname; // people believe that this is a bug in js. If you declare a function in a method. This keyword points global object which is ridiculous.
            // self is a dealing with this bug. var self = this. I am sure that my self object is always will be my c obj.
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
