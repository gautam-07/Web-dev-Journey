// Arrow function in javascript

const greet = (str) => {
   return (`Hey ${str}!`);
}

console.log(greet("Gautam"));


//  Implicit return and this only work with arrow functions
//  Newer syntax as it replaces curly brackets with parenthesis
//  And only works with only one expression in the parenthesis 

const rollDie = () => (
   Math.floor(Math.random() * 6) + 1
)

console.log(rollDie());



// Another example

const movies = [

   {
      title: 'Veer Zara',
      score: 90
   },

   {
      title: 'Rab Ne Bana Di Jodi',
      score: 99
   },

   {
      title: 'Jai Ho',
      score:80
   },

   {
      title: 'Dangerous Khiladi',
      score: 90
   }
]

const newMovies = movies.map(movie => (
   `${movie.title} - ${movie.score / 10}`
))

console.log(newMovies);
