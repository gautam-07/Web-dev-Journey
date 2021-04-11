const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override')



// connecting to database
mongoose.connect('mongodb://localhost:27017/farm', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log('Connection Open!!');
   })
   .catch(err => {
      console.log('Connection error!!');
      console.log(err);
   })


// setting middle wares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy']



// route 1
// getting the products listed
app.get('/products', async (req, res) => {
   const products = await Product.find({});
   res.render('products/index', {products});
})



// route 3
// creating new product for which we need a form and two routes one too get the form and second a post route
app.get('/products/new', (req, res) => {
   res.render('products/new', {categories})
})

app.post('/products', async (req, res) => {
   const newProduct = new Product(req.body);
   await newProduct.save();
   res.redirect(`/products/${newProduct._id}`)
})



// route 2
// get the details of each product by id
app.get('/products/:id', async (req, res) => {
   const { id } = req.params;
   const product = await Product.findById(id);
   res.render('products/show', { product });
})



// route 4
// updating the information of products
app.get('/products/:id/edit', async (req, res) => {
   const { id } = req.params;
   const product = await Product.findById(id);
   res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
   const { id } = req.params;
   const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true });
   res.redirect(`/products/${product._id}`)
})



// route 5
// deleting the product
app.delete('/products/:id', async (req, res) => {
   const { id } = req.params;
   const deleted = await Product.findByIdAndDelete(id)
   console.log(deleted);
   res.redirect('/products');
})



// starting the port
app.listen(3000, () => {
   console.log('Listening on port 3000');
})