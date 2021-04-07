const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
   {
      username: 'Gautam',
      comment:  'Hi my name is Gautam'
   },
   {
      username: 'Harsh',
      comment:  'Hi my name is Harsh'
   },
   {
      username: 'Naman',
      comment:  'Hi my name is Naman'
   },
   {
      username: 'Naina',
      comment:  'Hi my name is Naina'
   }
]



app.get('/comments', (req, res) => {
   res.render('comments/index', { comments });
})


app.get('/comments/new', (req, res) => {
   res.render('comments/new');
})


app.post('/comments', (req, res) => {
   const { username, comment } = req.body;
   console.log(req.body);
   comments.push({ username, comment });
   res.redirect('/comments');
})


app.listen(3000, () => {
   console.log('Listening to port 3000');
})

