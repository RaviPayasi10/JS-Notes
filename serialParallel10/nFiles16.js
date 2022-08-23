
// In this, we see how to read n number of files

const fs = require('fs');

let files = ['test1.txt','test2.txt','test3.txt'];


// Parallel execution of n files - 
for(let i=0;i<files.length;i++){
    let p = fs.promises.readFile(files[i]);
    p.then(cb);
}

function cb(data){
    console.log(data+" parallely")
}

// No order of file execution, files will be read randomely

///////////////////////////////////////////////////////////

// Serial execution of n files - 

// Will capture first file promise
let pparallel = fs.promises.readFile('test1.txt');

// In loop, from 2nd file, we capture promises and return them, they then get printed
// in next loop. Also, for last file promise, i would be equal to files array length, 
// so it would not enter the loop and we need to capture its promise seperately
for(let i=1;i<files.length;i++){
    pparallel = pparallel.then((data) => {
        console.log(data + " serially")
        return fs.promises.readFile(files[i]);
    })
}

// For last file, we need to do below code
pparallel.then(data => {
    console.log(data + " serially")
})

// Fixed order of files reading, all will be read according to their
// position in files array