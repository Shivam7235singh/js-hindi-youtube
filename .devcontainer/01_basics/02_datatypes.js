"use strict "; // treat all js code as newer version 

// alert("hello")
// alert(3+3);  we are using node js not browser
// console.log(3+3);
// console.log(shivam);


let name = "shivam ";
let age  = 13;
let isloggedIn = false
let state ;

// number => 2 to power 53
// bigint 
// string => " "
// boolean => true / false
//  null standnalone  value hai
//  undefined abhi data defind nahi hue hai 
// Symbol  react me dekhege  bat unique


// object
// console.log(typeof undefined);// undefined
// console.log(typeof null); // object 


// ************** data type summary*****************

// data type => data ko kis tarah rakha jata hai aur use kish tarah accesc kiya jata hain 
// two type  1 primitive 2 non primitive 

// primitive 
//  7 typr :  String , Number , Boolean ,null, undefined, Symbol, BigInt 

//  type 
const score = 100
const   scoreValue  = 100.3
const outSideTemp = null;
const isLoggedIn = false;
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 34567898799876544n






// JavaScript is a dynamically typed language

// non primitive/ refrence type  
//  Array, Object , Function 

// NOTE : javascript me 1  Object 2 broser events master kar lijiye

const heros = ["shatiman","nagraj","doga"];
let myObj = {
    name : "shivam",
    age : 20,

}

// function as variable
const myFunction = function (){
    console.log("Hello World ");
}
// data type pata karna 


 console.log( typeof bigNumber);
 console.log( typeof outSideTemp);
console. log(typeof myFunctin);