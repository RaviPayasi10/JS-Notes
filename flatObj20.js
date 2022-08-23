
// Flatten an object - It means that an object does not have any
// hierarchy in it, no nested objects inside it and all key-value
// pairs are at first level only

let obj1 = {
    name:{
        fName:'abc',
        mName:'jkl',
        lName:'mno'
    },
    age:23,
    address:{
        city:"Noida",
        state:"UP",
        pincode:'110058'
    }
}
console.log(obj1);

// Flatten the above object

// Takes 3 arguments - obj to be flatten, parent to that obj if any, res which 
// is initially empty
// In that obj, for loop goes through each key, if parent for that exist, it 
// chnages that key name to add inner keys, if not, then key remains same as before
// Then, it is checked if key is an object or not, if it is 
// flattenObj is recursively called with that key as object (1st argument),
// its propName as 2nd argument, and res itself as 3rd object
// If its not, then it is simply added as key in new object res
function flattenObj(obj, parent, res = {}){
    for(let key in obj){
        let propName = parent ? parent + "_" + key : key;
        // console.log(res);
        if(typeof obj[key] == 'object'){
            flattenObj(obj[key],propName,res);
        }else{
            res[propName] = obj[key];
        }
    }
    return res;
}


let obj2 = flattenObj(obj1);
console.log(obj2);

// This function will flatten the object as shown below - 
// {
//     name_fName: 'abc',
//     name_mName: 'jkl',
//     name_lName: 'mno',
//     age: 23,
//     address_city: 'Noida',
//     address_state: 'UP',
//     address_pincode: '110058'
//   }