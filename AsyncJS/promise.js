// Promises in Javascript
// Promises in javascript are better options to avoid callback hell

// A promise is an object representing the eventual completion and failure of an asynchronous operation. Promises are fairly new concept in javascript

// A promise is a returned object to which you attach callbacks, instead of passing callbacks to a function.


// A promise is one of these states:-
//    * pending   - initial state, neither fulfilled nor rejected
//    * fulfilled - meaning that the operation completed successfully
//    * rejected - meaning that the operation failed


const fakeRequestPromise = (url) => {
   return new Promise((resolve, reject) => {
      const delay = Math.floor(Math.random() * (4500) + 500);
      setTimeout(() => {
         if (delay > 4000) {
            reject('Connection Timeout :(');
         }
         else {
            resolve(`Here is your data from ${url}`);
         }
      }, delay)
   })
}


fakeRequestPromise('yelp.com/api/coffee/page1')
   .then(() => {
      console.log("Promise Resolved");
      console.log("It Worked!!! (page 1)");

      // Calling for 2nd page
      fakeRequestPromise('yelp.com/api/coffee/page2')
         .then(() => {
            console.log("It Worked!!! (page 2)");

            // calling for 3rd page
            fakeRequestPromise('yelp.com/api/coffee/page3')
               .then(() => {
                  console.log("It worked!!! (page 3)")
               })
               .catch(() => {
                  console.log("Error!!!! (page 3)")
               })
         })
         .catch(() => {
            console.log("Error!!!! (page 2)"); 
         })
   })
   .catch(() => {
      console.log("Promise Rejected")
      console.log("Error!!!! (page 1)");
   })






   
// Another way of writing promises with less nesting

fakeRequestPromise('yelp.com/api/coffee/page1')
   .then(() => {
      console.log("It worked... (page 1)");
      return fakeRequestPromise('yelp.com/api/coffee/page2')
   })
   .then(() => {
      console.log("It worked... (page 2)");
      return fakeRequestPromise('yelp.com/api/coffee/page3')
   })
   .then(() => {
      console.log("It worked... (page 3)");
   })
   // we can use a single catch for all of these
   .catch(() => {
      console.log("Ohh...no, request failed");
   })

