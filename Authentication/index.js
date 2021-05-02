/**
 * A simple express app demonstrating Authentication in express app
 */

const express = require('express');
const User = require('./models/user');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');


// connecting to database
mongoose.connect('mongodb://localhost:27017/authDemo', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Connection Open!!');
   })
   .catch(err => {
      console.log('Connection error!!');
      console.log(err);
   })

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

const requireLogin = (req, res, next) => {
   if (!req.session.user_id) {
      return res.redirect('/login');
   }
   next();
}

app.get('/', (req, res) => {
   res.send('This is the homepage');
})


app.get('/register', (req, res) => {
   res.render('register')
})


app.post('/register', async (req, res) => {
   const {username, password} = req.body;
   const user = new User({ username, password })
   await user.save();
   req.session.user_id = user._id;
   res.redirect('/');
})


app.get('/login', (req, res) => {
   res.render('login');
})

app.post('/login', async (req, res) => {
   const { username, password } = req.body;
   const foundUser = User.findAndValidate(username, password);
   if (foundUser) {
      req.session.user_id = foundUser._id;
      res.redirect('/secret');
   } else {
      res.redirect('/login');
   }
})


app.post('/logout', (req, res) => {
   req.session.user_id = null;
   res.redirect('/login');
})

app.get('/secret',requireLogin, (req, res) => {
   res.render('secret')
})


app.listen(3000, () => {
   console.log('Serving on port 3000')
})