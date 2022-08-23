
const a = [1,2,3,4,5];
// a = 4;      // This will give error
a.push(10);     // [1,2,3,4,5,10] --> This works fine

a.shift()       // This also works fine. Why ?
// As we know, In 'a', the address of array is stored, which is the first elements
// address, but here we are able to delete the first element and still it will work fine

// Strange behavior of arrays - 
a.someKey = 'someVal';
a.someFn = function(){
    console.log("Function in array");
}
console.log(a);

// So, we can add new properties as well as functions to an array
for(let key in a){
    console.log(key, a[key]);
}

// We can see that every element has a key and itself is value, the numbers [2,3,4,5,10]
// have their index as their key
// So, arrays are simply objects only.

// This will explain why line 6 doesn't throw an error.
// const a is not storing the first elements address but it is storing 
// a constant reference address which has address of all the keys stored in that
// object.
// So, when we remove or add another value at front of an array, then the reference address
// goes and see the first key and changes it. But this doesn't changes the reference stored
// in 'a', so thats why it doesn't throw error.

// Functions - 
function fn(){
    console.log("Function");
}
fn.props = "Property added";
fn.func = function(){
    console.log("Inner function");
}

console.log(fn);
// This shows that functions are also simply an object only.
// Along with that, functions have a special property called "code"
// that can be executed when invoked.

// Number, String, Boolean, Undefined, Null, Symbol except these everything is object in JS.