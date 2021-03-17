// getting a demo server up and running

const express = require('express');
// running express
const app = express();


// Our goal is to get an incoming request and outgoing response
// Anytime we have an incoming request the callback will run
// Does'nt matter where this request is going to and does not matter if its get, post or any type of request

// For every incoming request express makes two very important objects for us automatically and are passed in the use function parameters

// app.use((req, res) => {
//    res.send('We got a new request');
// })



// For different requests we can do
app.get('/homepage', (req, res) => {
   res.send('You are now on homepage');
})

app.post('/pics', (req, res) => {
   res.send('Post request completed');
})

app.get('/about', (req, res) => {
   res.send('You are now on the about page');
})

// Making a generic get request 
app.get('/a/:products', (req, res) => {
   // req object has .params parameter
   const { products } = req.params;
   res.send(`<h1>Here are the ${products} that you asked for</h1>`)
})


// Routing for query strings
app.get('/a/:products/:reviews', (req, res) => {
   const { products } = req.params;
   // req object has .query method
   const {q} = req.query;
   res.send(`<h1>Here are the ${products} reviews</h1>`);
   res.send(`Reviews : ${q}`);
})



// for everything
// Always comes after all the other requests becoz http can respond to only one request at a time

app.get('*', (req, res) => {
   res.send('What you entered is a wrong URL');
})

// 'listen' has to have a port that its going to listen on

app.listen(3000, () => {
   console.log('Started Listening to port 3000')
})
