const coding = [ "js","rb","py", "java", "cpp"]

// const values = coding.forEach ( (item) => { 
//     console.log(item);
//     return item
// })
// console.log(values);

const nums  = [1,2,3,4,5,6,7,8,9,10]

// const newnums = nums.filter( (num) => num>4)
// const newnums = nums.filter( (num) => { 
//     return num>4    // scope {} lagane par return key word use karna padega 
//     })
// console.log(newnums);

// const newNums = []
// nums.forEach( (num) =>{ 
//     if(num>4){
//         newNums.push(num)
//  }
// } )
// console.log(newNums);

const books = [
    { title : 'Book one', genre : 'fiction',publish : 1981, edition : 2004},
    { title : 'Book two', genre : 'non-fiction',publish : 2000, edition : 2009},
    { title : 'Book three', genre : 'Science',publish : 1999, edition : 2006},
    { title : 'Book four', genre : 'History',publish : 1980, edition : 2022},
    { title : 'Book five', genre : 'Maths',publish : 1986, edition : 2023},
    { title : 'Book six', genre : 'computer',publish : 1991, edition : 2024},
];

let userBooks = books.filter( ( bk) => bk.genre === 'History')

 userBooks = books.filter( ( bk) => {
     return  bk.publish >= 1985 && bk.genre === "History"
 })

 console.log(userBooks);