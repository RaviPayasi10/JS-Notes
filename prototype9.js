
// Prototypes and Prototypical Inheritance

// Try below code in Browser only

let arr1 = [1,2,3,4,5];

console.log(arr1.__proto__);
// Prototype of our array object would return (let's call it Proto1)
// This returns object on which our array is based on.

Array.prototype 
// Prototype of Array object is returned ( Proto2)
// We see that prototype of a general array is same as array made by us
// Proto1 === Proto2

arr1.__proto__.__proto__ 
// Returns an object on which is the prototype of prototype of array ( Call it Proto3)
// Array --> prototype --> prototype

Object.prototype
// Returns an object on which all objects are based on ( Proto4 )

// We see that Proto3 and Proto4 are equal, Proto3 === Proto4
// This means that array is also an object and also the prototype of Array object is based 
// on the same prototype on which an object is based upon.

////////////////////////////////////////////////////////////////////////

let person1 = {
    name: 'Abc',
    age: 24,

    showD(){
        console.log(this.name + " " + this.age);
    }
}

let person2 = {
    name: 'Xyz'
}

person2.__proto__ = person1;

console.log(person2.name);
console.log(person2.age);
// Here, even though person2 has no age property, it is still able to print 24 as its age.
// This is because we have set person2.__proto__  as person1, so this tells person2
// that now prototype of person2 is person1 and any property which is not present in
// person2, it can look for it in person1.