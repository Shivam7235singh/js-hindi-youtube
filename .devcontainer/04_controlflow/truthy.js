const userEmail = []

if(userEmail){
    console.log("Got user email");

}
else {
    console.log("Don't have user email");
}
// falsy value 
// false, 0 ,-0, BigInt 0n,"" empty string ,null, undefined,NaN

// truthy value 
// "0" , 'false', " ", [] , {}, function(){} empty function 

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}
// Nullish Coalescing Operator (??) null undefined

let val1
// val1 = 5 ?? 10
// val2 = null ?? 10
// val1 = undefined ?? 10
// val2 = null ?? 10 ?? 30

// console.log(val1);
// console.log(val2);

//  terniary operator 
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log(" more than 80")




