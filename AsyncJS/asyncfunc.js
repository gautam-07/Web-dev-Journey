// Async functions in javascript
// A newer and cleaner syntax to work with async code
// Two main pieces:
//    * async
//    * await

// the async keyword: -
//    async functions always return a promise
//    If the function return a value then the promise will be resolved with that value
//    If the function throws an error the program will be rejected


// the await keyword
//    We can only use await keyword inside a function declared using async
//    Await will pause the execution of the function, waiting for a promise to be resolved



const login = async (username, password) => {
   if (!username || !password) throw 'Missing Credentials'
   if (password === "username@123") return 'Welcome'
   throw 'Invalid Password'
}

login("GAUTAM", 'username@123')
   .then(msg => {
      console.log("Logged In")
      console.log(msg);
   })
   .catch(err => {
      console.log('Error!!!!');
      console.log(err);
   })


// await keyword

const delayedColorChange = (color, delay) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         document.body.style.backgroundColor = color;
         resolve();
      }, delay)
   })
}

async function rainbow() {
   await delayedColorChange('red', 1000)
   await delayedColorChange('orange', 1000)
   await delayedColorChange('blue', 1000)
   await delayedColorChange('green', 1000)
   await delayedColorChange('yellow', 1000)
   await delayedColorChange('indigo', 1000)
   await delayedColorChange('violet', 1000)
}
