
// Network Requests - For any communication b/w two computers in a network, network
// requests have to be made.

// Browser has 3 in-built requests types - 1. XHR   2. Fetch    3. Axios
// And all these follow HTTPS protocol.

// 1. XHR - Tool API
// Get, Put, Post, Delete requests can be made
// Can work with any data. Can be both sync and async (async is lot better)

let url1 = 'http://localhost:3000/contact/send';

// Create
let xhr = new XMLHttpRequest();

// Open
xhr.open("GET",url1);

// Send
xhr.send();

// Listen
xhr.addEventListener('load', () => {
    console.log(xhr.status);
})

///////////////////////////////////////////////////////////////

// Fetch - Improved version of XMLHttpRequest
// It is promise based NR
// Fetch request is made and it returns a promise, it contains response
// in it.
// If we don't mention 2nd argument, then by default its GET
fetch(url)
.then((response) => {
    console.log(response);
    return response.text();
})
.then((data) => {
    console.log(data);
})

fetch(url,{
    method : "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body:"This is private data"
})
.then()