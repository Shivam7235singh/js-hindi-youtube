// const isUserloggedIn = true 
// const temoerature = 41

// if(temperature < 50){
//     console.log("less then 50");
// }
// else {
//     console.log("temoerature is greater than 50");
// }
//  < ,> , <= >= ==, === for data type check , !==

// const score = 200
// if(score> 100){
//     var power = " fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);

const balance = 1000
// if(balance > 500 ) console.log("test"),
// console.log("test");


// if(balance < 500){
//  console.log("less than 500");
// }
// else if(balance < 750 ){
//     console.log("less than 750 ");
// }
//  else if(balance < 900){
//  conmsole.log("less than 900");
//  }
//   else console.log("less than 1250 ");
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromGmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromGmail){
    console.log("User logged in");
}
