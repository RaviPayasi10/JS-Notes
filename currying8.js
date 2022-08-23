
// Currying - 
// Method 1 - Using Bind

function add(a,b){
    console.log(a+b);
}

// Below line is binding add function with itself as an object and binding its first argument also
// so, the function and its first argument 2 is binded with addWith2 function.
let addWith2 = add.bind(this, 2);
addWith2(7);


// Method 2 - Using Currying
function currA(x){
    return function currB(y){
        console.log(x+y);
    }
}
let first = currA(2);
// The outer function returns the inner function and it gets stored in first variable.
// Also, as we know that a function maintains a closure of the variables so it still has
// access to its parents variables
first(5);
// The same function then takes another argument and adds it with previous argument.
