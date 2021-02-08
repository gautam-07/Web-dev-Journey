// Reduce method in javascript

const prices = [11, 34, 56, 67, 89];


// 1 way 
let total = 0;
for (let price of prices) {
   total += price;
}

console.log(total);


// Just what we did above reduce method also does the same.
// Here we pass two parameters (accumulator, currentValue)


// 2 way
console.log(prices.reduce((total, price) => {
   return total + price
}))

