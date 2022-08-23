
// Double equal to - Loose comparison
console.log(2 == '2');
// Returns true as when '==' is used, JS only sees the values that are being compared 
// and not their type. So, both 2 and '2' return true


// Triple equal to - Strong comparison
console.log(3 === '3');
// Returns false as when '===' is used, JS checks both - the value as well as
// the type of values being compared.

/////////////////////////////////////////////////////

function testTruthyFalsy(val){
    return val ? console.log('Truthy') : console.log('Falsy');
}


testTruthyFalsy(false);    // Falsy
testTruthyFalsy('');       // Falsy
testTruthyFalsy(0);        // Falsy
testTruthyFalsy(null);      //Falsy
testTruthyFalsy(NaN);       // Falsy
testTruthyFalsy(undefined); // Falsy

// Only above values are falsy.
// Any values other than above will return truthy values

testTruthyFalsy(true);     // Truthy
testTruthyFalsy(2);        // Truthy
// Empty object
// Empty array
// Empty function
// Any number other than 0
// All give truthy values

let bool = new Boolean(false);
// Above variable bool will also return truthy value because
// due to usage to 'new' variable, bool is an object and an object
// is always truthy in nature irrespective of what values it stores

console.log(false === false);   // true
console.log(false === '');      // false
console.log(false == '');       // true
console.log(null && undefined);     // null

if(null && undefined){
    console.log('1');
}else{
    console.log('0');   // This will run
}

