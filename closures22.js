
// Theory 


// Q1

// for( var i=0;i<=5;i++){
//     setTimeout(function(){
//         console.log(i)
//     }, 1000)
// }
// Change var to let to print correct answer
// Also, implement below changes to correct it.

// for(var i=0;i<=5;i++){
//     (function(){
//         var j = i;
//         setTimeout(function log(){
//             console.log(j);
//         },1000)
//     })();
// }

// Q

function createIncrement(){
    let count = 0;
    function increment(){
        count++;
    }
    let msg = 'Count is ' + count;

    function log(){
        console.log(msg);
    }

    return [increment, log]
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
// Count is 0 => This will be printed as inside function increment, count is increased
// but it is never returned so as soon as it is finished, incremented count variable
// is destroyed. So, inside the log function, count accessed is count = 0 variable,
// so Count is 0 is printed.

// Q
for(var i=0;i<=5;i++){
    setTimeout(function log(){
        console.log(i);
    }, 1000)
}

// Since var is function scoped, and here it is only for block, hence only a single
// reference for i would be stored. Due to this, for loop will run 5 times and in 6th
// time when its value is 6, it will stop.
// Now, that Call Stack is empty, setTimeout will start to execute. Now, console.log()
// will refer to that single reference of i in which i has value of 6 has been stored
// so, 6 will be printed six times.

// If we change i from var to let, then for each function call of setTimeout, a new
// reference of i will be stored for it, due to which 0-5 numbers will be printed.
