
// var a = 10;
// console.log(a);
// function fn(){
//     console.log(a);
//     var a = 20;
//     a++;
//     console.log(a);
//     if(a){
//         var a = 30;
//         a++;
//         console.log(a);
//     }
//     console.log(a);
// }

// fn();
// console.log(a);

// 3 - 10
// 5 - uf
// 8 - 21
// 12 - 31
// 14 - 31
// 18 - 10

///////////////////////////

// More on var - 
// Can be called before declaration and before assigning any value
// ALso can be re-declared

console.log(b);     // Undefined
var b = 10;
console.log(b);     // 10
b = 20;
console.log(b);     // 20
var b;
console.log(b);     // 20
var b = 50;
console.log(b);     // 50

/////////////////////////////////////

let letFruit = 'apple';
var varFruit = 'orange';
console.log(letFruit , varFruit);   // apple, orange
{
    let letFruit = 'grapes';
    var varFruit = 'banana';
    console.log(letFruit , varFruit);   // grapes, banana
}

console.log(letFruit , varFruit);   // apple, banana

/////////////////////////////////////

// let 
// console.log(a)      // Error - Can't access let variables before initialization (unlike var)
let a;
console.log(a);     // Undefined
a = 10;
console.log(a);     // 10
a = 20;
console.log(a);     // 20
//let a = 100;    // Can't do this - redeclaration can't be done with let

// One important thing to note here is that JS gives error during initial phase only, 
// i.e. during memory allocation only, it sees 2 let variables with same name, it will throw
// error even without executing even a single line of file.

// Temporal Dead Zone - It is safety measure so that let and const variables are not 
// available before initialization

// console.log("Hello World")      // Hello World
// console.log(letVar);            // Throws error as it is in TDZ
// let letVar;
// console.log(letVar);
// letVar = 10;
// console.log(letVar);

// In above code, you will see that unlike other error where JS file gave error even 
// before it began execution of files.
// But here, we can see "Hello World" being printed.
// Here, this happens because the variables defined by let and const are in TDZ, which 
// is nothing but zone of file code above the variable declaration.
// So, this error is not found during initial phase but only when a variable
// is accessed before its initialization. So, TDZ is simply kind of preventive 
// meaure to keep let and const variable unaccessible before their initialization.

// const - Same as let but you can't reassign it
// const a = 10;
// a = 20;      --> Will throw error
// Also, you have to give value during its initialization only, so 
// you can't leave it without any value.
// const a; --> Throws error

// Block Scope - 
// For let and const, it works in block scope.
// So, inside any block, if any variable is defined, they are again allocated
// memory for that block only and this happens only when JS enters
// inside the block.

let fruits = "apple";
console.log(fruits);        // apple
{
    // console.log(fruits);    // Will give error due to TDZ
    let fruits = "orange";  // New let variable as it is inside block
    console.log(fruits);    // orange
    fruits = "banana";      
    console.log(fruits);    // banana
}
console.log(fruits);        // apple

// Also, if a let/const variable is used inside a block but it is not present in it
// so. it will go outside of thaty block and look for it there.

// Variable Shadowing - 
// In above ex:, fruits variable inside block shadows over the same variable from outside the block.
// Also, if outside variable of anytype and inside is of let and const type, then it is 
// Legal Shadowing

// But if the outside variable is of let/const and inner one is of var type, then 
// it is illegal shadowing as var is function scoped, so inside a normal block, it would still
// be available outside of the block which means two variables of let/const and var type having
// same name are present at the same time.




