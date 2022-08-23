
// Apart from Procedural and OOPS paradigm, functional programming is also 
// a new way of writing code

// Functional programming has 2 ways of writing - Imperative and Declarative

// Imperative 
const x = 5;
const xsqr = x * x;
let isEven;
if(xsqr % 2 === 0){
    isEven = true;
}else{
    isEven = false;
}
console.log(isEven);

// Declarative
const isXSqr = num => {
    if((num * num) % 2 === 0){
        return true;
    }else{
        return false;
    }
}
let res = isXSqr(5);
console.log(res);

// We use Declarative style of coding in JS

// Pure and Impure Functions - 
// In JS, we want to maximize pure functions.

let a = 3;
function impure(x){
    console.log(x+a);
}
impure(2);

// In this above function, we see our function is dependent on an external factor
// Due to this, for same argument (2), we get different results cause if we change a to 5,
// then output for impure(2) would be 7 which is different than current output 5.
// So, it is an impure function, hence undesirable.

function pure1(a,b){
    console.log(a+b);
}

// Now, this pure1 function will give same output for same arguments 

// Side-Effects - 
// But it is still not a pure function, as it still has side-effects
// Another requirement here is that a function must not alter, mutate or change the state of 
// any other function/state.
// Here,  console.log() changes the state of external screen, hence this
// function is still not pure.

function pure2(a,b){
    return a+b;
}
let res1 = pure2(2,4);
console.log(res1);
// Now, the above function does not have a side-effect

// Mutability and Immutability
// In JS, we prefer immutable functions.
// Mutable - Anything that can be changed or manipulated after their declaration, are mutable
// Immutable - Opposite to mutable

const person1 = {
    name:'Adam',
    age:24
}

//const person2 = person1;    // This will be bad as if person2 properties are changed
// then person1 will also be changed. Hence to counter this, we can implement it in below way

// Method 1 - 
const person2 = Object.assign({}, person1);
// Object.assign - Takes an empty object in which it will paste the object provided in the
// second argument

// In this way, a new object is created and its reference is stored in person2.
// This way we can provide immutability as it didn't mutate first object.

// Method 2 -
const person3 = {...person1};
// Spread operator also makes a new copy of object mentioned.