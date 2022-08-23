console.log('Program starts')

setTimeout( () => {
    console.log('I am a timeout')
},0)

Promise.resolve().then((val) => {
    console.log('Promise Output');
})

console.log("Program Ends")

// Now, what we would assume here is that the above code prints this - 
// Program Starts
// Program Ends
// Then the two async code will be executed and since both are executed at same time, 
// then order in which they are present in code will occur and we will see
// I am a timeout
// Promise Output

// But when we run code, we see that 'Promise Output' comes before 'I am a timeout'
// This happens due to another Task Queue called 'Micro-Task Queue'

// Micro-Task Queue = It is another queue similar to Task Queue but the only difference is that
// it holds Promises and some other high priority functions due to which its precedance
// is always higher than Task Queue
// So, if Call Stack is empty, Event loop will check both Task and Micro-Task queue, if
// both queues are non-empty, then Event Loop will always prefer tasks from Micro-Task queue
// and put its tasks in Call Stack and keeps on doing it until its empty.