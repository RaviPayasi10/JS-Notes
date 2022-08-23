
// Copy - How to copy

// Spread Operator - shallow copy for array and objects
let obj1 = ['Football','Cricket','Baseball'];

let obj2 = [...obj1];

obj2[3] = 'Tennis';

console.log(obj1);
console.log(obj2);

// Using spread operator does a copy of originl array/object, this way
// changes made in any one array/object doesn't effect the other array/object
// But this is still not good enough due to below reason - 

// If there is a nested object/array inside our original array/object, then 
// that nested element will not be copied, instead a reference for it would
// be passed in new copy due to which changes made in one of the array/object
// would be reflected back in other array also.
// Due to this, this is called Shallow Copy

let obj3 = ['Football','Cricket',{a:'Tennis',b:'Soccer'}]
let obj4 = [...obj3];

obj4[2]['a'] = 'Badminton';
console.log(obj3);
console.log(obj4);
// Badminton would be added as value of 'a' in both the arrays.

// Array.from - 
// Another method to do shallow copy is Array.from
let obj5 = Array.from(obj3);
console.log(obj5);
// It will also return a shallow copy of obj3

// Slice operator - 
let obj6 = obj3.slice(0);
// obj6 is also a shallow copy

// Object.assign
let objA = Object.assign({}, obj3);
// Returns shallow copy

/////////////////////////////////////////////////

// Deep copy - 
// JSON.parse(JSON.stringify) - 

let obj7 = JSON.parse(JSON.stringify(obj3));
// Will return a deep copy of obj3

