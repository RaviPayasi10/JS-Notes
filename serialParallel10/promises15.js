
// In this section, we will see how Promises run serially and parallely

// Parallel Promises

const fs = require('fs');
const { resolve } = require('path');

let p1 = fs.promises.readFile('test1.txt');

let p2 = fs.promises.readFile('test2.txt');

let p3 = fs.promises.readFile('test3.txt');

// p1.then((data) => {
//     console.log(data + "")
// })

// p2.then((data) => {
//     console.log(data + "")
// })

// p3.then((data) => {
//     console.log(data + "")
// })

// Working - 
// As soon as JS sees that promises which are async code is present, it will send the promises
// to Node API for execution.
// There these promises will be executed parallely and therefore any one could finish before
// others and there is no fixed order for their execution.
// After execution, since these are promisified operations, they will be added to Micro-Task
// queue, from which they will be sent to Call Stack for execution in FIFO manner.

/////////////////////////////////////////////////////////////////////////

// Serial -

// let p4 = fs.promises.readFile('test1.txt');

// function cb1(data){
//     console.log(data +" serial")
//     let p5 = fs.promises.readFile('test2.txt');
//     return p5;
// }


// function cb2(data){
//     console.log(data + " serial");
//     let p6 = fs.promises.readFile('test3.txt');
//     return p6;
// }

// function cb3(data){
//     console.log(data + " serial");
// }

// p4.then(cb1).then(cb2).then(cb3).catch((err) => {
//     console.log(err);
// })

//////////////////////////////////////////////////////////////

// Some tricky questions - 

// Q1. Find order of printing of below statements - 
// setTimeout(function(){
//     console.log(1);
// });
// setTimeout(function(){
//     console.log(2);
// });

// let prom = new Promise(function(resolve,reject){
//     resolve();
// });

// console.log(3);

// prom.then(() => {
//     console.log(4);
// })

// prom.then(() => {
//     console.log(5);
// })

// setTimeout(function(){
//     console.log(6);
// })

// 3 - since its a sync statement
// 4
// 5 - since 4,5 are promisified, hence added to Mini task queue and executed first
// 1
// 2
// 6 - In order of their setTimeout (they can be random if default time is changed)


// Q2.
// let prom1 = new Promise(function(resolve,reject){
//     reject(new Error('Some error 1'));
//     setTimeout(function(){
//         reject(new Error('Some error 2'), 1000)
//     })
//     reject(new Error('Some error 3'));
// });

// prom1.then(null, function(err){
//     console.log(1);
//     console.log(err);
// }).catch(function(err){
//     console.log(2);
//     console.log(err);
// })

// 1
// Error : Some error 1
// After above line, it stops executing as an error has been thrown
// But why has been 1 printed as it was in then part of promise ??
// This happens because 'then' actually can take 2 callbacks, first one for
// success and second one for reject. Here, success callback is null and 
// failure callback is the second function passed.
// This is why it goes into 'then' and in 'then' inside second function,
// prints '1' and then throws error made by us as 'Some error 1'

// If we remove null from 'then' function arguments, then it will
// go into catch statement, print 2 and then throw error 'Some error 1'
// No other errors will be printed as execution will stop even before reaching them.


// Q3. Create a setTimeout using Promises

// function delay(ms){
//     return new Promise(resolve => {setTimeout(resolve, ms)})
// }

// delay(3000).then(() => { console.log('Runs after 3 sec ')})

//////////////////////////////////////////////////////////////////////


// Async Await questions - 

// Q1
async function inc(x){
    x = x + await 1
    return x;
}

// async function increment(x){
//     x = x + 1;
//     return x;
// }

// inc(1).then(function(x){
//     increment(x).then(function(x){
//         console.log(x);
//     })
// })

// In inc() function, 1 is passed, this 1 gets added with await 1 (it is completed and returns 1)
// and then 2 is returned.
// After it returns a promise, this value is passed in reslove function and in that
// increment function is called. In increment function, value passed is added with 1.
// And it returns 2+1=3, then it also returns an object. This object is captured 
// in next resolve statement and then 3 gets printed.

// Q2
// async function f1(){
//     console.log(1);
// }

// async function f1(){
//     console.log(2);
// }

// console.log(3);
// f1();
// console.log(4);
// f2();

// async function f2(){
//     console.log(5);
// }

// Q3
function resolveAfterNSec(n,x){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(x);
        },n)
    })
}

(function(){
    let a = resolveAfterNSec(1000,1);
    a.then(async function(x){
        let p = await resolveAfterNSec(2000, 2);
        let q = await resolveAfterNSec(1000, 3);
        let r = resolveAfterNSec(2000, 4);
        let s = resolveAfterNSec(1000, 5);
        console.log( x + p + q + await r + await s);    // Both r,s will executed simulataneously
        // and will be returned as soon as they are resolved since they are in same line.
        // p,q will take their time specified since they are in different lines, hence
        // will be give result when they are resolved after the time specified
    })
})();
