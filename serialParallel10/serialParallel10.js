
// Normal JS code is synchronous so any time taking code can delay the execution of entire
// code. So, we use asynchronous JS.
// Along with this, code can also be executed serially and parallely depending upon the need.

const fs = require('fs');

// console.log("before");

// fs.readFile('test1.txt',cb1);
// fs.readFile('test2.txt',cb2);
// fs.readFile('test3.txt',cb3);


// function cb1(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file1  ---> "+data);
//     }
// }

// function cb2(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file2 --> "+data);
//     }
// }

// function cb3(err,data){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file3 --> "+data);
//     }
// }


// console.log('after');

// In above code, first 'before' is printed, then 'after' is printed, but 
// after that any of the file is read randomely.
// Sometimes its file1->file2->file3, other times its file2->file3->file1 and so on.
// This shows that async code executes parallely and as soon as any one of the code
// is finished, its get added to Task queue and from there to Call Stack ( when call stack gets 
// emptied ).
// Node API in which async tasks are added does not execute its code in any order, rather
// it simply finishes all work parallelly and whichever task gets finished earlier, it sends
// it to Task Queue.
// Task Queue since it is a queue, simply gets tasks in itself and as soon as Call
// Stack is emptied, event loop pushes the first task in Task Queue.
// So, this is the reason why above code runs parallely

//////////////////////////

// To change above async code in Serial mode
console.log('//////////////////////////////////////////////////////////////////')

console.log("before");

fs.readFile('test1.txt',cb1);


function cb1(err,data){
    console.log("file1  ---> "+data);
    fs.readFile('test2.txt',cb2);
    function cb2(err,data){
        console.log("file2 --> "+data);
        fs.readFile('test3.txt',cb3);
        function cb3(err,data){
            console.log("file3 --> "+data);
        }
    }
}

console.log('after');

// Now, the above code is going to execute serially instead of parallely.
// But, we can notice that the code doesn't look good and if we had more callbacks, 
// it would become difficult to read it. This is called Callback Hell and 
// to improve it we made Promises.
