
// We have ways to find if a variable or returned value is number, string
// boolean etc. But for array, since it is an object, it returns object 

let a = 1;
console.log(typeof a);  // number

a = "abc";
console.log(typeof a);  // string

a = true;
console.log(typeof a);  // boolean

a = {name:'abc'}
console.log(typeof a);  // object

a = [1,2,4];
console.log(typeof a);  // object

// So, to know if a value is array or not, we use isArray method

console.log(Array.isArray(a));      // returns true - meaning that a is an array
