
let url = "http://localhost:3000";

// Fetch
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"     // Pre-flighted request
    },
    body:"Hello"
})
.then((res) => {
    return res.text();
})
.then((data) => {
    console.log(data);
})