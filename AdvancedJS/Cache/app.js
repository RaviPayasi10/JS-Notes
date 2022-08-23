
// Cache's are tiny pieces of information which store information about our
// Browser and our details
// It is stored in key-value pairs.

// It can be done in 2 ways - Frontend and Backend
// When we visit a site first time, that sites stores our cookies in our browser
// So, next time when we try to login again, those cookies will be sent and
// that site can access username and password from it to authenticate user.
// Majorly, cookies is done mostly by Backend.

// How to add cookies - 
document.cookie = "name=abc; "
// Then open this html file with live server, only then we can see this cookie
// Go to Application in Google dev tools --> Cache --> There we can see the cookie 
// added by us.

console.log(document.cookie);

// Has max-age as 8 sec, will vanish after 8 sec
document.cookie = "name=pqr; max-age=8;"    

// Other properties of cookies - 
// 1. Domain - shows the domain for which cookie is stored
// 2. Path - shows the specific path for which cookie is stored
// 3. Expiry - shows when cookie will expire
// 4. Size - Size of cookie data
// 5. Secure - Whether it is secured connection or not (https or http)

// Now, we do bank transactions or login into our social media using our browser
// and info related to these is stored in our cookies.
// But if by mistake we visit any malicious site which can then receive
// our cookies, they can use our credentials stored in cookies and do
// bank transactions or something else which will effect us.
// This is called CSRF - CROSS-SITE REQUEST FORGERY

// Now, our data that we fill during loggin in is done through forms,
// so input and pass fields in these forms come with some protection and its called
// CSRF Protection token.

// Similarly, we make transaction requests from our domains also.
// In that case, if we are routed to a malicious site and that site uses
// our cookies to make same request to bank, they can rob us.
// To prevent this, we can use this next property of cookies.

// 6. Same-site (samesite=strict) => Adding strict to this property will make
// add the original site as the "must" site from which request should be made
// and makes sure that whenever bank site recieves cookie details, make
// sure it is coming from original site only. It will reject cookies if 
// coming from another website to prevent CSRF.