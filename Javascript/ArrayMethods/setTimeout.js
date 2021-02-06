// Set Timeout and set Interval methods in javascript
// These have nothing to do with array and its methods


// setTimeout

setTimeout(() => {
   console.log("Hello...");
}, 2000)

// setInterval

const id = setInterval(() => {
   console.log(Math.floor(Math.random() * 6) + 1);
},1000)

// clearInterval(id);
