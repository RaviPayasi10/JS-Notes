
// Loading of an HTML page has 3 main parts - 
// 1. DOMContentLoad
// 2. Events Load
// 3. Unload - beforeUnload and unload

// It is important that DOM tree is loaded before any external dependencies are loaded
// and external dependencies are loaded before we use those dependencies.

// 1. DOMContentLoad - This is the first process that happens when a HTML page is loaded
// This process loads the entire HTML DOM tree in the UI. All the nodes of the
// DOM tree are read and parsed and is loaded by the browser in UI.
// It is applied on Document object

// 2. Event Load - After DOMContentLoad, external dependencies(resources) are loaded. 
// External CSS, external images, icons are now loaded in this event of loading.
// It is applied on window object.

// 3. Unload - This phase starts when a user either closes the page or redirects to 
// some other page. This event is called Unload event. It has 2 phases - 
// a) beforeUnload - Any process that has to be done before user moves from 
// the page is done here.
// b) unload - Any process that has to be done when user moves/redirects from 
// the page is done here.
// It is applied on window object.


// ReadyState - Its a property which indicates at which state our site is currently now.
// 1. Loading state - When site has begun to be loaded, then it is in loading state
// 2. Interactive state - DOMContentLoaded has been complete, document is now fully read.
// 3. Complete state - All external resources, dependencies are also loaded.

// DOM content load
alert(document.readyState);     // loading
document.addEventListener('DOMContentLoaded',(e)=>{
    alert('DOM content loaded');
    alert(document.readyState);     // interactive
})

// Event load
// alert(document.readyState);
window.addEventListener('load',(e) => {
    alert('External resources loaded');
    alert(document.readyState);     // complete
})

// Unload
// beforeunload - asks for confirmation before redirecting or reloading
window.addEventListener('beforeunload',(e) => {
    return e.returnValue = '';
})

// unload - used for data analytics for data storage, so not done here