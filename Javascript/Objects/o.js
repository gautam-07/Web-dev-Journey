// Object literals in javascript


const product = {
   name    : "Gummy Bears",
   inStock : true,
   price   : 1.99,
   flavors : ["grape","apple","cherry"]
}

console.log(product)

// Accessing object items

const restaurant = {
   name    : 'Ichiran Ramen',
   address : `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
   city    : 'Brooklyn',
   state   : 'NY',
   zipcode : '11206',
}

let fullAddress = restaurant.address + restaurant.city + restaurant.state + restaurant.zipcode;
console.log(fullAddress)