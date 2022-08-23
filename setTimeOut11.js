
// ************ DOUBT DOUBT DOUBT - THIS PAGE NEEDS CONFIRMATION *******************
// Below info is wrong - needs updation

// How setTimeOut and setInterval works - 

// setTimeOut - Executes a function after the time specified in its arguments
function greet(){
    console.log('Hello')
}

setTimeout(greet,5000);

console.log('Bye');

// setTimeout is not a JS function but a Node/Browser API function as it handles async code
// so its execution is handled by Node/Browser API.

// First, greet function is encountered and after it setTimeout, as JS sees setTimeout
// it moves it to Node API, there it waits till time delay specified in its arguments.
// As time delay gets completed, it is moved to Task Queue/Callback Queue.
// There, it waits till all sync code is finished, so "Byee" gets printed
// After that, Event Loop sees that Call stack is empty, so now it moves setTimeout
// from Task Queue to Call Stack.
// After it is moved into Call Stack, greet function is 
// executed and "Hello" is displayed.
// Important thing to note here is that - setTimeOut will wait for the time
// time specified in its arguments in the Node API/Browser API and after that time
// period, it gets added to Task queue.

// NOTE - The delay specified in this function is the minimum delay that 
// the browser will wait till adding it to task queue. If Call Stack is not empty
// it may take more than specified time.
////////////////////////////////////////////////////////////////////////////////////

// SetInterval - In this, it keeps on repeatingly executing the function after an
// interval of time specified

// function sayHi(){
//     console.log('Hi')
// }

// setInterval(sayHi,3000);
// console.log('end Hi');

// We see that after 3 sec, 'Hi' keeps on printing, but this is not required as it is
// in infinite loop.
// Rather we want to use it in controlled way so that it stops after our task is
// finished.
// Every setTimeout and setInterval call has an ID associated with it, we can use this
// ID to stop it whenever we want.

let counter = 0;
let intervalID;
function sayHi(){
    counter++;
    console.log('Hi')

    if(counter >= 5){
        clearInterval(intervalID);
    }
}

intervalID = setInterval(sayHi,3000);
console.log('end Hi');

// Now, after counter becomes 5, it would stop the setInterval function

// It is working similar to setTimeOut
// As soon JS sees async function, it sends it to Node API, where it waits for time specified
// Then, after that time, it sends it to Task Queue.
// Also, in Node/Browser API, a time structure is created which sets the timer
// for callback and also adds that callback again after the specified interval.
// After all the sync code in Call Stack is finished, event loop sends the setInterval
// function from Task Queue to Call Stack. There, it gets executed.

// NOTE - The interval specified in this function is the minimum delay that 
// the browser will wait till adding it to task queue. If Call Stack is not empty
// it may take more than specified time.

/////////////////////////////////////////////////////////

// Copied from SO
// Each window has a list of outstanding timeouts and when you call window.setInterval() 
// a new timeout structure is created and added to that list. The timeout structure 
// contains a reference to the timer object that will notify the window whenever the
// callback needs to called. And it has an mPublicId member that is simply a number -
// it gets incremented for each new timeout created and is returned by setInterval().
// When you call clearInterval() it will look up a timeout with matching ID in the 
// list and remove it.
