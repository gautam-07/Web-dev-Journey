// Arrays in javascript


// Declaring an array

let lottoNumbers = [1, 2, 3, 4, 5, 6];

console.log(lottoNumbers.length)

const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];

leaderboard[1] = 'Luna';
leaderboard[3] = 'Draco';

console.log(leaderboard)



// Practicing Array methods shift,unshift,push,pop

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];

planets.shift();
planets.push('Saturn');
planets.unshift('Mercury');

console.log(planets)



// Multi - Dimensional Array

const airplaneSeats = [
   ['Ruth', 'Anthony', 'Stevie'],
   ['Amelia', 'Pedro', 'Maya'],
   ['Xavier', 'Ananya', 'Luis'],
   ['Luke', null, 'Deniz'],
   ['Rin', 'Sakura', 'Francisco']
];

airplaneSeats[3][1] = 'Hugo';
console.log(airplaneSeats)