const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Connection Open!!');
   })
   .catch(err => {
      console.log('Connection error!!');
      console.log(err);
   })

// Defining the schema
const movieSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   year: {
      type: Number,
      required: true
   },
   score:{
      type: Number,
      required: true
   },
   rating: {
      type: String,
      required: true
   }
})

// returns a class
const Movie = mongoose.model('Movie', movieSchema)
// We can now make new instances of movie class and save them in the database

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
amadeus.save();


// We don't have to save this as this returns a promise
Movie.insertMany([
   { title: 'Amanda', year: 1986, score: 9.2, rating: 'R' },
   { title: 'Spiderman', year: 2010, score: 7, rating: 'R' },
   { title: 'Thor', year: 2015, score: 7.2, rating: 'R' },
   { title: 'Anabelle', year: 2018, score: 6.2, rating: 'R' },
   { title: 'A', year: 1986, score: 9.2, rating: 'R' }
])
   .then(data => {
      console.log('Data inserted successfully');
      console.log(data);
   })
   .catch(err => {
      console.log('Some Error occured')
      console.log(err);
   })

// to find movies or any data there a a lot of ways we can do 
// find method does not returns a full promise instead it returns thenable object\
// to get back full promise we can use a method called exec();
Movie.find({year: {$gt: 2015}}).then(data => console.log(data));



// To update we have many options
// This will update spiderman movie's score and returns back the newly updated object
// By default the object that is returned is the old one so to make it return the updated version we use something called options and the option we used here is 'new'.

// updateOne() and updateMany() does not return the updated object
Movie.findOneAndUpdate({ title: 'Spiderman' }, { score: 6.4 }, { new: true, runValidators: true }).then(m => console.log(m));


// TO delete/remove we also have may options

Movie.remove({ title: 'Spiderman' }).then(data => console.log(data));
