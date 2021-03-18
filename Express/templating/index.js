// templating using EJS

const express = require('express');
const app = express();
const redditdata = require('./data.json')

// path built-in in express
const path = require('path');


// Now to tell our app to use EJS there is particular method in app called set() and it takes two parameters: 1. The key that we wanna set
//          2. And the corresponding value


app.set('view engine', 'ejs');

// If we wanna run the code from anywhere then we have to change the views directory
app.set('views', path.join(__dirname, '/views'))



// to send back a template/file we use a method called render()
app.get('/random', (req, res) => {
   const num = Math.floor(Math.random() * 10) + 1;
   res.render('random', { num })
})

app.get('/', (req, res) => {
   res.render('home') 
})

app.get('/r/:subreddit', (req, res) => {
   const { subreddit } = req.params
   const data = redditdata[subreddit]
   res.render('subreddit', { ...data })
})




// listening to port 

app.listen(3000, () => {
   console.log('Listening to port 3000');
})

