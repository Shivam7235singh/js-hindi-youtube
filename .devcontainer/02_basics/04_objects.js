// const tinderuser = new Object () // singlaton object hai
const tinderuser = {}

tinderuser.id = "1234asdfg"
tinderuser.name = "shivam singh "
tinderuser.isLoggedIn = false 

// console .log(tinderUser);

const regularUser = {
    email : "shivam12345@gmail.com",
    fullname : {
        userfullname :{ 
        firstname : "shivam",
        lastname  : "kumar singh "

    }
  }
} 
//  console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2 : " b"}
const obj2 = { 3: "c", 4 : " d"}
const obj4 = { 5: "a", 6 : " f"}

// const obj3 = {obj1,obj2}
// const obj3  = Object.assign( {}, obj1,obj2, obj4)

const obj3 = { ...obj1, ...obj2}

// console.log(obj3);

const users  = [
    {
        id : 1,
        email : "shi@gmail.com"
    },
    {

    },
    {

    },
]


users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwenProperty('isLoggedIn'));


// destrucring 
const course = {
    coursename : "js in hindi ",
    price  : "999",
    courseInstructor : "Hitesh "
}
// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);


// ?react 

// const navbar = ({company}) => {
    
// }
// navbar (company = "Hindalco")


// api concept => value aati hai bakend se use aap kaise likhate  hai
// // ab values aati hai json se 
// [
//    "name"  : " Shivam",
//    "coursename " : " js in hindi",
//    "price " ; "freee"
}
