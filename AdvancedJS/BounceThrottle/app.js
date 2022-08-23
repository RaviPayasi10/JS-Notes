
// Unoptimized work function - This function is called whenever any changes are made in
// input field. But the problem is due to this, very large number of network requests
// are made and since network requests are very costly, it may slow our sites working.
// To reduce this large number of network requests, we can use Debouncing and Throttling
// to do PERFORMANCE OPTIMIZATION and RATE LIMITING.
let count = 0;
function work(){
    console.log("Network request no. - " + count);
    count++;
}

// Debouncing - In this process, instead of having network request at every change, JS
// waits for a gap/delay to make the NR(network request).
// As user is typing, they may type continuously without stopping for a while, during
// that time it will not make a request. Only when a user stops making the change and the
// delay here is equal to delay passed in debouncing function, a network request
// will be made.
// It is based on delay/pause provided by the user.
function debounce(work, delay){
    let timerID;
    return function(){
        clearTimeout(timerID);
        timerID = setTimeout(function(){
            work();
        },delay)
    }
}


// Throttling - In this process, we make a NR on some interval period in which changes
// were made. As soon as user starts making a change triggering event listener, in this
// time, NR will be made after specified interval irrespective of whether a user has stopped
// or still continuously making the change. It is user delay independent and will make
// a NR on the interval only.
// It is based on interval time provided in function.
function throttle(work, delay){
    let flag = true;
    return function(){
        if(flag === true){
            work();
            flag = false;

            setTimeout(function(){
                flag = true;
            }, delay)
        }
    }
}
// let opfn = debounce(work, 500);
let opfn = throttle(work, 1000);

// Here, we have an input field in which we have added an event listener to listen to 
// any changes a user does while changing the input field.
// As soon as any change is made, event listener calls function work() and
// that function makes a network request.
let ip = document.querySelector('input');
// ip.addEventListener('keydown',work);
ip.addEventListener('keydown',opfn);



// Debouncing - Used when there is search bar or mouse change events when a user
// will pause for a time.

// Throttling - Used where analytics for changes made by user are useful.