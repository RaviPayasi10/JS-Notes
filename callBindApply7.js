
// These 3 functions are special functions which help us to 
// do many things. Lets see one by one

// CALL - Helps us to call functions from an object which doesn't have it defined in itself.
let person1 = {
    name: 'Abc',
    age:25,
    callFunc(){
        console.log(this.name + " is "+ this.age +" years old");
    }
}

person1.callFunc(); 

let person2 = {
    name:'xyz',
    age:30
}

// When we call person1.callFunc, this refers to object itself
// But if we want to execute the same function for person2, we would have to 
// write same function for person2 also. This is repetitive, so instead we 
// use call() function.
// Syntax - we refer to the function using person1.callFunc() , then use call and in 
// arguments of call pass the object which should 
// obj.functionName.call(obj2)

person1.callFunc.call(person2);

// Here, call is using function from person1 and calling it by changing "this" from 
// person1 object to person2 object.
// This is also called Function Borrowing

// We can also use "call" for global functions too.
function globalCall(){
    console.log(this.name + " " + this.age);
}
globalCall.call(person1);
globalCall.call(person2);

// Along with object, we can pass external arguments to call function

function callArg(city,club){
    console.log(`${this.name} is ${this.age} yrs old, lives in ${city} and fav club is ${club}`);
}
callArg.call(person1,"Delhi","Barca");
callArg.call(person2,"Noida","Madrid");

// APPLY - Same as call but arguments passed have to be passed in an array

function applyArg(country,food){
    console.log(`${this.name} is ${this.age} yrs old, lives in ${country} and fav food is ${food}`);
}
applyArg.apply(person1,['India','Dal']);
applyArg.apply(person2,['Finland','Pizza']);

// This is the only difference b/w call and apply

// BIND - It takes a function, binds it with object passed in argumwnts and returns
// a binded function which is binded to that object only and not anyone else.

function binded(){
    console.log(this.name + " " + this.age);
}
let bindedFunc = binded.bind(person2);
bindedFunc();
// The above bindedFunc() is now binded with person2 and will work with its "this"
// being referred to person2 always.

////////////////////////////////////////////

// Bind Polyfill with function prototype  -

// How to write bind by ourselves 

Function.prototype.myBind = function(...args){
    let obj = this;     // The object to which function has to be binded is obj, by passing
    // this line, 'this' keyword starts pointing to object itself
    params = args.slice(1);     // Rest of the parameters except the object itself are passed
    // in this params array.

    // Bind function returns an array
    return function(...args){
        obj.apply(args[0], [...params, ...args]);     // Since params is an array, we have to pass it in apply()
    }
}

let showDetails = function(city, state){
    console.log(`${this.name} ${this.age} ${city} ${state}`);
}
let showMyDetails = showDetails.myBind(person1,'Noida','Delhi');
showMyDetails();