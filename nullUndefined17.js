
// Not defined
// console.log(a)  
// Above line will give error with reason being that 'a' is not defined.
// This means that variable hasn't even been declared. This is the meaning of 
// "not defined". We neither have variable nor its value

/////////////////////////////////////////////////////////////////////////

// Undefined
let a;
console.log(a);
// Above lines will give o/p as "undefined" as this means that variable is 
// declared but it is not assigned any value.
// Whenever any variable is declared but it is not assigned any value, JS assigns
// it a default value that signifies that it has not been assigned any value yet.
// We have variable but not its value.

//////////////////////////////////////////////////////////////////////////

// Null
let b = null;
console.log(b);
// Above lines will print "null" in o/p.
// 'null' and 'undefined' are similar in the sense that they both signify that 
// no value has been assigned to the declared variable.
// But, the difference is that "null" is assigned by us and "undefined" assigned by JS itself

// When JS does hoisting and during execution sees a variable being used( or printed ) 
// without any value being assigned to it, then JS will automatically assign it with 
// value of "undefined"
// Whereas, if we want to specifically declare a variable without assigning it any 
// value, we use 'null'. Null also means that no value is assigned but
// it also means that this variable has been not assigned any value by the 
// programmer themselves ( explicitly given by us )