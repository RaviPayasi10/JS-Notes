const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customPromise(executor){
    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];

    function resolve(result){
        if(state !== PENDING){
            return;
        }

        state = FULFILLED;
        value = result;

        handlers.forEach( (h) => h(value))
    }

    function reject(err){
        if(state !== PENDING){
            return;
        }

        state = REJECTED;
        value = err;
        catchers.forEach( (c) => c(value))
    }

    this.then = function(successCallback){
        if(state === FULFILLED){
            successCallback(value);
        }else{
            handlers.push(successCallback);
        }
    }

    this.catch = function(rejectCallback){
        if(state === REJECTED){
            rejectCallback(value)
        }else{
            catchers.push(rejectCallback)
        }
    }

    executor(resolve,reject);

}

const doWork = (res, rej) => {
    if(2 == 1){
        setTimeout( () => {res('Resolve Promise')}, 1000)
    }else{
        setTimeout( () => {rej('Rejected Promise')},1000)
    }
}

let greeting = new customPromise(doWork);

greeting.then((val) => {
    console.log('then log', val)
})

greeting.catch((val) => {
    console.log('catch log', val)
})