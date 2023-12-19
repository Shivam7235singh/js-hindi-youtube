// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);


// console.log( "2" > 1);
// console.log("02" > 1);

//  avoid this type of code

// console.log( null> 0);
// console.log(null == 0);
// console.log( null >=0);

// console.log( undefined ==0);
// console.log(undefined > 0);
// console.log( undefined< 0);

// === strict check
// console.log("2" === 2);


// *********************   MOMORY*********************
//  stack (primitive)     heap (non primitive )

let myYouTuberName = "hoteshchoudharydotcom"

let anotherName  = myYouTuberName

anotherName = "chaiaurcode"
console.log(myYouTuberName)
console.log(anotherName)

let userOne = {
    email : "shubham@google.com",
    upi : "user@ybl"
}
let userTwo = userOne
userTwo.email = "shivam@google.com";

console.log(userOne.email);
console.log(userTwo.email);
