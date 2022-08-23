
// CORS - Cross-Origin Resource Sharing
// It is NOT AN ERROR, but a security mechanism.

// Let's say we make a NR to access or write data to another website
// Now, the other site will not allow an unknown user to access or write
// data to their own server.
// This happens because there is a standard security mechanism being implemented
// It is called Same-Origin Policy

// The domain of your own site is called its Origin. It can be
// considered a storage in which all sites which can access and write
// data to our website is stored.

// If a website denies access to us, it is so because our domain is not present
// in their origin.

// Same-origin policy says that you can do NR (fetch,put,delete etc) to those
// sites only in which your domain is stored in their origin.

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Response for GET request")
})

app.post("/",(req,res) => {
    res.set("Access-Control-Allow-Origin","*");
    res.send("Response for POST request")
})

app.options("/", (req,res) => {
    res.set("Access-Control-Allow-Origin","*");
    res.set("Access-Control-Allow-Headers","Content-Type");
    res.send("OK");
})

app.listen(3000, () => {
    console.log("Listening to port 3000")
})

// Origin - Lets say our domain is "https://www.mysite.com" port = 3000
// CORS policy would reject a request made for =>
// 1. Different domain = "https://www.site.com".
// 2. Different subdomain = "https://www.api.mysite.com"
// 3. Different protocol = "http://www.mysite.com"
// 4. Different port = "https://www.mysite.com" port = 8080

// Pre-flight request differs from normal request as it has some
// extra info present in its header due to which any request (fetch, put, post)
// are made, then before normal fetch request, an additional request is called
// OPTIONS is made by browser to check if our request is valid or not.
// But since, this request is not added by our server to handle, it gets
// rejected and we get CORS rejection.
// By making changes in our request, we can make it work. See changes made
// in above requests.