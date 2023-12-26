// function addTwoNumber(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1,number2){
// let result = number1  + number2;
// console.log("Shivamkumarsingh")
// return result ;
return number1+ number2 
}

addTwoNumber(3 , 4)
addTwoNumber(3 , "4")
addTwoNumber()
addTwoNumber(3 , null)

// const result = addTwoNumber(3 , 4)
//  console.log("result:  ", result );
function loginUserMessage(username = "ankur"){
    if(!username){ 
    console.log("please inter your user nmae ");
    return 
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("shivamsingh"))

// console.log(loginUserMessage())


function  calculatecartprice( val1, val2, ...num1){
    return num1

}
//  console.log(calculatecartprice(200,400,678,500,780))

const user = {
    username : "Shivam singh",
    price : 1999
}
 
function handleObject(anyobject){
    console.log(` username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

handleObject({
    username : "Ankur",
    price :  1234
})

const myNewArray = [  200,300,4000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,4000]));



