const user = {
    username : "Vaishnavii",
    price : 999,

welcomeMessage : function (){
    console.log(`${this.username}, welcome to website `);
    console.log(this);
  }
}

// user.welcomeMessage()
// user.username = "Shivam" 
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "vaishnavii"
//     console.log(this.usename);// in the function we are not use this only use in objects 
// }
// chai()

// const chai = function (){
//         let username = "vaishnavii"
//         console.log(this.usename);// in the function we are not use this only use in objects 
//     }
//     chai()

    const chai =() => {
        let username = "vaishnavii"
        console.log(this.usename);
    }
    // chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
// const addTwo = (num1,num2) =>  num1 + num2

// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({username : "vaishnavii"})


console.log(addTwo(5,7));




















