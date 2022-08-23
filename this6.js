"use strict";
// OOPS - In oops paradigm of coding, "this" keyword plays a really big role.

// Some basics before studying 'this' -

// Modes of JS - Strict and Non-Strict
// These are two different modes of running JS, with strict having more restrictions on
// how you can write code whereas Non-strict mode is little sloppy.

// Non-Strict mode - 
// a = 5;
// console.log(a);
// In NS mode, above code runs fine as variable type is added automatically

// In Strict mode - Put "use strict" on top of JS file before any line
// Now the same code above will give error. So to change it, var,let,const have to be used.
// let b = 6;
// console.log(b);

//////////////////////////////////////////////////////

// Now, we will see 'this' keyword for both Node JS and Browser and in that also
// for both Strict and Non-strict mode
// 1. Strict Node  2. Non-Strict Node  3. Strict Browser   4. Non-Strict Browser
// Also, for all 4 mode, we will check for 4 different places - 
// 1. In normal console.log(this)
// 2. Inside a function() - console.log(this)
// 3. Inside a function which is inside an object - console.log(this)
// 4. Inside a nested function inside an object - console.log(this)

/////////////////////////////////////////////////////////////////////////////////



// A. NODE JS - 
// -------------------------------- Non-strict mode ---------------------------------- 
// --> a). In normal console.log(this)
// console.log(this);  // --> Returns an empty object = {}


// --> b). Inside a function
// function func(){
//     console.log(this);
// }
// func();     
// Returns a Global object - shown below
    {/* <ref *1> Object [global] {
    global: [Circular *1],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],  
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    queueMicrotask: [Function: queueMicrotask],
    performance: Performance {
        nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 124.88609981536865,
        nodeStart: 1.2288999557495117,
        v8Start: 4.760799884796143,
        bootstrapComplete: 82.19649982452393,
        environment: 40.173799991607666,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
        },
        timeOrigin: 1654957904480.833
    },
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    }
    } */}

// --> c). Inside a function inside an object - 
// let obj = {
//     name: 'abc',
//     thisFunc: function(){
//         console.log(this);
//     }
// }
// obj.thisFunc();
// Returns the object itself - { name: 'abc', thisFunc: [Function: thisFunc] }

// --> d). Inside a function inside a function inside an object - 
// let obj = {
//     name: 'abc',
//     thisFunc: function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }
// obj.thisFunc();
// Returns global object

// ------------------------------------- Strict Mode ------------------------------------
// a). --> In normal console.log(this)
// console.log(this)
// Returns empty object - {}

// b). --> Inside a function
// function printThis(){
//     console.log(this);
// }
// printThis();
// Returns undefined - "undefined"

// c). --> Inside a function inside an object
// let obj1 = {
//     name: 'this',
//     f: function(){
//         console.log(this);
//     }
// }
// obj1.f();
// Returns the object itself - { name: 'this', f: [Function: f] }

// d). --> Inside a function inside another function inside an object
// let obj1 = {
//     name: 'this',
//     f: function(){
//         function g(){
//             console.log(this);
//         }
//         g();
//     }
// }
// obj1.f();
// Returns undefined - "undefined"

///////////////////////////////////////////////////////////////////////////////////////////////////

// B. IN BROWSER 
// * All codes same as above tried in Browser

// ----------------------------------- Non-Strict Mode -----------------------------------
// a). --> Inside normal console.log(this)
// Returns Window object

// b). --> Inside a function
// Returns Window object

// c). --> Inside a function inside an object
// Returns the object itself

// d). --> Inside a function inside a function inside an object
// Return Window Object

// -------------------------------------- Strict Mode ---------------------------------------

// a). --> Inside normal console.log(this)
// Returns Window object

// b). --> Inside a function
// Returns "undefined"

// c). --> Inside a function inside an object
// Returns Object itself

// d). --> Inside a function inside a function inside an object
// Returns "undefined"
















