const mongoose = require('mongoose');

const Product = require('./models/product');


mongoose.connect('mongodb://localhost:27017/farm', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Connection Open!!');
   })
   .catch(err => {
      console.log('Connection error!!');
      console.log(err);
   })


const seedProducts = [
   {
      name: 'Celery',
      price: 1.00,
      category: 'vegetable'
   },

   {
      name: 'Chocolate',
      price: 3.00,
      category: 'dairy'
   },

   {
      name: 'Mango',
      price: 2.00,
      category: 'fruits'
   }
]


Product.insertMany(seedProducts)
   .then((res) => {
      console.log(res);
   })
   .catch(err => {
      console.log(err);
   })