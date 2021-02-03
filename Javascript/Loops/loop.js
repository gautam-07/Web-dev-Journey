// Loops in Javascript


// for loop
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < people.length; i++)
{
   console.log(people[i].toUpperCase());
}


// for_of loop
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let square of numbers)
{
   console.log(`${square}  ${square * square}`);   
}







