// Js follows ECMA-262 standard

// Variables
var x = 10;
var y = 20;
var z = x + y;
console.log(z);

// Data types
// Number
var num = 10;
console.log(num);
// String
var str = "Hello World";
console.log(str);
// Boolean
var bool = true;
console.log(bool);
// Array
var arr = [1, 2, 3, 4, 5];
console.log(arr);
// Object
var obj = {name: "John", age: 25};
console.log(obj);

// Operators
// Arithmetic
var sum = 10 + 20;
console.log(sum);
var sub = 20 - 10;
console.log(sub);
var mul = 10 * 20;
console.log(mul);
var div = 20 / 10;
console.log(div);
var mod = 20 % 10;
console.log(mod);
// Assignment
var a = 10;
a += 20;
console.log(a);
a -= 10;
console.log(a);
a *= 20;
console.log(a);
a /= 10;
console.log(a);
a %= 10;
console.log(a);
// Comparison
var b = 10;
var c = 20;
console.log(b == c);
console.log(b != c);
console.log(b > c);
console.log(b < c);
console.log(b >= c);
console.log(b <= c);
// Logical
var d = true;
var e = false;
console.log(d && e);
console.log(d || e);
console.log(!d);
// Increment/Decrement
var f = 10;
f++;
console.log(f);
f--;
console.log(f);
// String
var g = "Hello ";
var h = "World";
console.log(g + h);
// Conditional
var i = 10;
var j = 20;
console.log(i > j ? "i is greater" : "j is greater");


// Control Structures
// If
var k = 10;
if(k > 5) {
    console.log("k is greater than 5");
}
// If-else
var l = 10;
if(l > 20) {
    console.log("l is greater than 20");
}
else {
    console.log("l is less than 20");
}
// If-else if
var m = 10;
if(m > 20) {
    console.log("m is greater than 20");
}
else if(m < 20) {
    console.log("m is less than 20");
}
else {
    console.log("m is equal to 20");
}
// Switch
var n = 10;
switch(n) {
    case 10:
        console.log("n is 10");
        break;
    case 20:
        console.log("n is 20");
        break;
    default:
        console.log("n is neither 10 nor 20");
}
// For
for(var o = 0; o < 5; o++) {
    console.log(o);
}
// While
var p = 0;
while(p < 5) {
    console.log(p);
    p++;
}
// Do-while
var q = 0;
do {
    console.log(q);
    q++;
}
while(q < 5);
// Break
for(var r = 0; r < 5; r++) {
    if(r == 3) {
        break;
    }
    console.log(r);
}
// Continue
for(var s = 0; s < 5; s++) {
    if(s == 3) {
        continue;
    }
    console.log(s);
}
// Function
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

// Function with default parameter
function subs(a, b = 10) {
    return a - b;
}
console.log(subs(20));

// Function with rest parameter
function muls(...args) {
    var result = 1;
    for(var i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}
console.log(muls(1, 2, 3, 4, 5));
// Function with spread operator
function spread(a, b, c, d, e) {
    return a + b + c + d + e;
}
var arr = [1, 2, 3, 4, 5];
console.log(spread(...arr));

// Function with arrow
var div = (a, b) => a / b;
console.log(div(20, 10));

// Function with callback
function greet(name, callback) {
    return "Hello " + callback(name);
}
function sayName(name) {
    return name;
}
console.log(greet("John", sayName));

// Function with promise
function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved");
        }, 2000);
    });
}
promise().then((res) => {
    console.log(res);
});

// Function with async-await
async function async() {
    var result = await promise();
    console.log(result);
}
async();

// Function with generator
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}
var g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

// Function with closure
function counter() {
    var count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}
var increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());

// Function with recursion
function factorial(n) {
    if(n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));














