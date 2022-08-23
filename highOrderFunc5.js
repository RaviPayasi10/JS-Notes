
// Any function that takes another function as an argument, then it is called
// High Order Function
// Best ex for them are map, filter, reduce

let arr1 = [1,2,3,4,5];

// Map
let arr2 = arr1.map(function(x){
    return x*x;
})
console.log(arr1);
console.log(arr2);

// Filter
let arr3 = arr1.filter(function(x){
    return x > 3;
});

console.log(arr3);

// Reduce
let arr4 = arr1.reduce(function(s,x){
    return s+x;
},0)
console.log(arr4);

///////////////////////////////////////

// Polyfills of above functions - Own implementation

// Map
function polyOfMap(arr, cb){
    let polArr1 = [];
    for(let i=0;i<arr.length;i++){
        polArr1.push(cb(arr[i]));
    }
    return polArr1;
}
function func1(x){
    return x*x;
}
let resMap = polyOfMap(arr1,func1);
console.log("Polyfill of map ",resMap);

/////////////////////////////////////////////////////////////


// Filter

function polyOfFilter(arr,cb){
    let polArr2 = [];
    for(let i=0;i<arr.length;i++){
        let res = cb(arr[i]);
        if(res){
            polArr2.push(arr[i]);
        }
    }
    return polArr2;
}

function func2(x){
    return x > 2;
}
let resFil = polyOfFilter(arr1,func2);
console.log("Polyfill of filter ",resFil);

/////////////////////////////////////////////////////

// Reduce

function polyReduce(arr,cb){
    let acc = 0;
    for(let i=0;i<arr.length;i++){
        acc = cb(acc,arr[i]);
    }
    return acc;
}

function func3(acc,x){
    return acc+x;
}

let resReduce = polyReduce(arr1,func3);
console.log(resReduce);

/////////////////////////////////////////////////////

// Scopes - 
// Function scope - Any variable when defined inside a function has its scope
// restricted to that function only, which means it cannot be accessed by anyone
// outside that function in which it was defined

// Lexical Scope - Any function defined inside another function is called a Child Function 
// and the function in which it was defined is called Parent function.
// Any child function has access to all the variables defined inside the parent function.

function add(){
    let a= 5;

    function childAdd(){
        let b = 8;
        console.log(b+a);
    }

    childAdd();
}

add();

// Here, childAdd will have access to all variables defined in its parent function
// and this is called its Lexical Scope.

// Closures - 
// To understand closure, study below code - 

function parentFunc(){
    let a = 10;

    function childFunc(){
        let b = 10;
        console.log(a+b);
    }

    return childFunc;
}

let op = parentFunc();
// This op will have the child function as its value - [Function: childFunc]
console.log(op);        // [Function: childFunc]

// Also, we know that when a function is completely executed, it is removed from stack
// along with its variables and functions.
// So, now if we call op which has child function as its value, it should throw an
// error as child function will try to access variables 'a' of parent function
// which is now destroyed and doesn't exist.

// BUT, this will not happen, it will not throw an error. WHY ?
// This happens because a function not only stores or captures its own variables (own scope)
// but also stores variables in lexical scope. 
// Hence, even when parent function and its variables are destroyed, child
// function maintains its own set of variables which are present in its lexical scope
// and uses it and doesn't throw error.

// Function bundled with its Lexical Scope forms its Closure.