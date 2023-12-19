// const name = "shivam"
// const repoCount = 56

// console.log(name + repoCount + "value");

// console.log('Hello my name is ${name } and my repo count is ${ repoCount }  ');

const gameName = new String ("ankursingh")

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName .charAt(2));
console.log(gameName.indexOf('t'));

const newString  = gameName.substring(0,4);
const  anotherString = gameName.slice(-5,4);
console.log(newString);
console.log(anotherString);


const newStringOne = "  shivam   "
console.log(newStringOne);
console.log(newStringOne. trim());

const url = "http: //shivam.com/shivam%20singh"
console.log(url.replace('%20','-'))


