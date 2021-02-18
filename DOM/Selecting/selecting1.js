/**
 * Using querySelector() and querySelectorAll() in DOM
 * 
 * We can also use : - 1. getElementById()
 *                     2. getElementsByTagName()
 *                     3. getElementsByClassName()
 * 
 * But the above three methods are outdated and newer methods are much more flexible and advance 
 * than the three. 
 */


 // querySelector()

const images = document.querySelector('img');
console.log(images);

// Returns the first instance of an image

// querySelectorAll()

const imagesAll = document.querySelectorAll('img');
console.log(imagesAll);

