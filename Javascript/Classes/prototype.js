// Prototypes in Javascript

// Prototypes are mechanism by which JavaScript objects inherit features from one another.

// JavaScript is often described as a prototype-based language — to provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from.

// An object's prototype object may also have a prototype object, which it inherits methods and properties from, and so on. This is often referred to as a prototype chain, and explains why different objects have properties and methods defined on other objects available to them.


// String prototype

String.prototype.yell = () => {
   return `OMG...${this.toUpperCase()}!!!! `;
};

// Array Prototype
// We can overwrite the default prototype functions as well

Array.prototype.pop = () => {
   return 'This element is essential. Cannot Pop this element out!!!!'; 
};