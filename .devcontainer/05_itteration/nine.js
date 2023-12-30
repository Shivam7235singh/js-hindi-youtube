const myNums = [ 1,2,3,4]

// const mytotal = myNums.reduce( function (acc,currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// },0)

const mytotal = myNums .reduce ( (acc,curr) => acc+curr, 0)

console.log(mytotal);

const shopingcart =[ 
    {
        itemname : "mobile dev coarse",
        price : 5999    
},
  { 
     itemname : "data science course",
     price : 2999 
  },
]
const pricetopay = shopingcart.reduce( ( acc, item )=> acc + item.price,0 )
console.log(pricetopay)
