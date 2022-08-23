
// Every JS file has a Execution Context for it --> It is a wrapper in which a JS file is 
// executed from top to bottom, left to right

// Every Execution Context has 2 things even when no code is present in it -
// 1. Global Object
// 2. "this"

// Global Object - 
// Global object is the object on which all objects are based upon and hence it is provided
// automatically by node JS.
// For Browser, this global object is called as Window Object

// This - 
// This keyword refers to any object which is being refered here, so at the beginning
// this refers to an empty object in Node JS.
// But in browser, this refers to window object itself.

// When code is written in file - 
// When code is written in file, along with Global and this, another thing ( code ) is created 
// for memory allocation of the variables and functions.
// So variables are allocated memory even before JS file starts executing the file but it's
// value is undefined. var is available but let and const are present in Temporal Dead Zone, so
// it is undefined but unavailable before their declaration.

// For functions --> Functions statements are allocated memory in heap and their reference is
// stored, so they are not undefined. So when they are called before their declaration, they 
// will execute the correct function itself

// For function expressions --> But in function expressions, they are same as variables that too 
// as let and const, so if they are called before their declaration, it will throw an error.

///////////////////////////////////////////////

// How execution happens - We will understand it using below example

console.log(varName);
var varName = 10;
console.log(varName);
function fn(){
    console.log(varName);
    var varName = 20;
    console.log(varName);
}
fn();
console.log(varName);

// 1. When we run the file having above code, firstly Execution Context is made for the file, in that
// Global object and this is created along with allocation of some memory for variables and 
// functions (Hoisting). These variables and function expressions are undefined while function statements
// store the reference for the memory where function definition is stored.

// 2. Then, it reads first line --> console.log(varName);
// Since, varName is not defined yet but it has been hoisted during initial phase and 
// given value undefined, "undefined" would be printed.

// 3. In second line --> var varName = 10;
// Value is assigned to variable, so it no longer stores undefined but starts storing 
// 10 as a value.

// 4. In 3rd line --> console.log(varName);
// Here, since value is now 10, 10 will be printed

// 5. This function definition is there, which is already stored so nothing would happen

// 6. fn() --> When function is called, something different will happen
// In Javascript, just like initially there would be an Execution Context,  similarly for
// each and every function itself, there is execution context created.
// In this EC, similar to first one, global and "this" is created for that function and along
// with that memory is allocated for variables or functions inside that function.
// varName in this context is a new variable and hence given "undefined".

// 7. console.log(varName); --> This will hence result is undefined being printed because
// for this EC, varName is undefined right now.

// 8. varName is now given a value of 20, so now console.log(varName) will result in 20
// being printed.

// Atlast console.log(varName) will again print 10, as now it is outside of function, and in this
// EC, the varName is 10.

// Lets see another variation of above code - 
console.log(varName);
var varName = 10;
console.log(varName);
function fn(){
    console.log(varName);
    var varName = 20;
    function fa(){
        console.log(varName)
    }
    fa();
    console.log(varName);
}
fn();
console.log(varName);

// In this, inside fn(), there is another function fa(), inside it there is again
// print out of varName. So, which varName would be printed.
// The answer is that it will print the varName that just outside its definition, i.e 20.
// This is lexical scope of a function, it means that if a variable is not found inside
// the function body, JS will look for it just outside of the function, and if it still
// didn't found it, it will look outside of that too. So, its starts from innermost and 
// goes to outermost.

// Another variation - 
console.log(varName);
var varName = 10;
console.log(varName);
fa();
function fn(){
    console.log(varName);
    var varName = 20;
    function fa(){
        console.log(varName);
    }
    console.log(varName);
}
fn();
console.log(varName);

// Here, fa() is defined inside the fn() function but it is called outside of it.
// So, which varName would be printed.
// When this situation occurs, JS has a rule that it will look in scope where
// the function is defined rather than from where it is being called.
// Hence, lexical scope of function says that outside of a function is where the 
// function is defined and not where it is called.
// So, function is defined inside fn(), hence varName fa() function would 
// refer to is varName = 20, as it is just outside it function definition.

console.log(varName);
var varName = 10;
console.log(varName);
function fb(){
    console.log(varName);
}
function fn(){
    console.log(varName);
    var varName = 20;
    console.log(varName);
    fb();
}
fn();
console.log(varName);

// In above example also, the lexical scope would be where fb() is defined, so it would be 
// printed as 10 even though it is being called inside fn() where varName is 20. 