const myNums = [1, 2, 3,]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// } , 0 )


const myTotal = myNums.reduce( (acc, curr) => acc + curr ,0 )
console.log(myTotal);


const shopingCart = [
    {
        itemName: "js coures",
        price: 2999,

    },
    {
        itemName: "py coures",
        price: 999,

    },
    {
        itemName: "mobile dev coures",
        price: 5999,

    },
    {
        itemName: "data science coures",
        price: 12999,

    }
]

const topay = shopingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(topay);