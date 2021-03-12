// Callbacks in javascript

// 1st callback = success
// 2nd callback = failure

const fakeRequestCallBack = (url, success, failure) => {
   const delay = Math.floor(Math.random() * 4500) + 500;
   setTimeout(() => {
      if (delay > 4000) {
         failure('Connection Timeout');
      }
      else {
         success(`Here is your data from the ${url}`);
      }
   }, delay)
}


fakeRequestCallBack('books.com/page1',
   function (response) {
      console.log('It worked!!!!');
      console.log(response);
      
      // If we am calling a request for page 1 then we have to do another request for page 2 

      fakeRequestCallBack('books.com/page2',
         function (response) {
            console.log('It worked!!!!');
            console.log(response);
            // request for page 3

            fakeRequestCallBack('books.com/page3',
               function (response) {
                  console.log('It worked!!!!');
                  console.log(response);
               },
               function (err) {
                  console.log("Error (3rd req)!!!!", err);
               })
         },
         function (err) {
            console.log("Error (2nd req)!!!!", err);
         })
   },
   function (err) {
      console.log("Error!!!!", err);
   })