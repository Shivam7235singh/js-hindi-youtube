// singleton 
// Object.create 

// object literals
const mysym = Symbol("key1")

const jsUser = {
    name : "Shivam",
    "full_name " : "shivam kumar singh",
    [mysym] : "mykey1",// use as Symbol
    age  : 20 ,
    location : "kanpur ",
    email : "shivam@google.com",
    isLoggedIn : false,
    lastLOginDays : ["Monday" ,"saturday"]

}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full_name"])
// console.log(jsUser[mysym])

jsUser.email = "Ankursingh@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "Ankur@gmail.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}


// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
