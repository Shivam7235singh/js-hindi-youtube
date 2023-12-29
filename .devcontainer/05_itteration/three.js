// for of 
// ["", "", ""]
// [{},{},{}]

const arr = [ 1,2,4,4,5]
for(const num of arr){
    // console.log(num);
}
const greetings = "Hello world!"
for(const greet of greetings){
    // console.log(`Each char is ${greet}`);
}
// maps
const map = new Map()
map.set('IN',"india")
map.set('usa', "united state of america")
map.set('fr', "france")
map.set('fr', "france")

// console.log(map);
// for(const key of map){
//     console.log(key);
// }
for(const [key,value] of map){
    // console.log(key, ':-', value);
}
const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

for(const [key,value] of myObject){
    console.log(key, ':-', value);
}











