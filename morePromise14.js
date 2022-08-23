
// Some more functions related to promises 

// 1. Promise.All() - It takes an array of promises as arguments and when all 
// the promises are resolved, it returns a promise of array of output of all promises.
// But even if one of the promise passed in input argument is rejected, all other
// promises are left unresolved and it simply returns the rejected promise

let p1 = new Promise(function(resolve,reject){
    resolve('Promise 1 resolved');
})

let p2 = new Promise(function(resolve,reject){
    resolve('Promise 2 resolved');
})

let p3 = new Promise(function(resolve,reject){
    resolve('Promise 3 resolved');
})

let promiseAll = Promise.all([p1, p2, p3]);
console.log(promiseAll);    // Outputs pending promise 
promiseAll.then((msg) => {
    console.log(msg)    // Prints array of resolved promises
})

// Now, if any one of the promise gets rejected

let p4 = new Promise(function(resolve,reject){
    reject('promise 4 rejected');
})

let promiseAll2 = Promise.all([p1,p2,p3,p4]);
promiseAll2.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
})

// For above promiseAll2, we see that instead of returning array of resolved promises, it
// returns the rejected promise only, this happens since PromiseAll will itself
// resolve only when all promises passed to it are resolved too.
// In this case of promiseAll2, p4 promise is not resolved so it doesn't resolve any other
// promise and simply returns rejected promise.

//////////////////////////////////////////////////////////////////////////////

// Promise.race - It also takes an array of promises but it returns only one
// promise, promise which is resolved first.
// The first promise to get resolved is returned.

let p5 = new Promise((resolve,reject) => {
    resolve('Promise 5 is resolved');
    // reject('Promise 5 is rejected');
})

let p6 = new Promise((resolve,reject) => {
    resolve('Promise 6 is resolved')
})

let p7 = new Promise((resolve,reject) => {
    resolve('Promise 7 is resolved')
})

Promise.race([p5, p6, p7]).then((msg) => {
    console.log(msg)    // Only prints the first promise to get resolved
}).catch(err => {
    console.log(err)
})

// But if the first promise itself is rejected and not resolved, then it simply 
// returns the rejected promise.
// If we change the promise p5 from resolve to rejected, it will return the rejected promise.

let p8 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 8 resolved')
    }, 2000)
})

let p9 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 9 resolved')
    }, 1000)
})

Promise.race([p8, p9]).then((msg) => {
    console.log(msg);
})

// In above code, promise 9 will be returned as it is resolved faster than promise 8, and
// race returns the fastest resolved function

///////////////////////////////////////////////////////////////////////////////////////////

// Promise.allSettled - It takes an array of promises and returns an object in which
// status and values of those passed promises are present

let p10 = new Promise((resolve,reject) => {
    resolve('Promise 10 resolved')
})

let p11 = new Promise((resolve,reject) => {
    resolve('Promise 11 resolved')
    // reject('Promise 11 is rejected')
})

let p12 = new Promise((resolve,reject) => {
    resolve('Promise 12 resolved')
})

Promise.allSettled([p10, p11, p12]).then((val) => {
    console.log(val);
}).catch((err) => {
    console.log(err)
})

// If any one of them is rejected, then status: 'rejected' is shown - comment resolve in p11
// uncomment reject to see it.

/////////////////////////////////////////////////////////////////////////////////////////////

// Promise.finally - If we want some code to be executed irrespective of whether
// our promise is resolved or rejected, we can put it into another block called
// finally.

let a = 1+1;    // Change 'a' value to 3 to see below working
let p13 = new Promise((resolve,reject) => {
    if(a === 2){
        resolve('Promise 13 resolved')
    }else{
        reject('Promise 13 rejected')
    }
}).then((msg) => {
    console.log(msg)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log('Experiment Succeeded')
})

// Above code will print 'Promise 13 resolved' and 'Experiment Succeeded', but even if it
// was rejected, it will still print 'Experiment Succeeded'

