// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference (all objects (including functions))
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

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c);
console.log(d);


// If the value is primitive, it is property
//if the value if function is called method

function a() {
    console.log(this);
    this.newvariable = 'hello';
}

var b = function() {
    console.log(this);
}

a();

console.log(newvariable); // not good!

b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;

        self.name = 'Updated c object';
        console.log(self);

        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
