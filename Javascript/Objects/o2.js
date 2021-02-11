// Classes in Javascript and making objects of class blueprint

class Backpack { 
   constructor(
      // Defining parameters
      name,
      volume,
      color,
      pocketNum,
      strapLengthL,
      strapLengthR,
      lidOpen
   ) {
      // Defining Properties
      this.name = name;
      this.volume = volume;
      this.color = color;
      this.pocketNum = pocketNum;
      this.strapLength = {
         left: strapLengthL,
         right: strapLengthR,
      };
      this.lidOpen = lidOpen;
   }

   // Defining methods like normal functions

   toggleLid(lidStatus) {
      this.lidOpen = lidStatus;
   }

   newStrapLength(lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
   }
}


const everydayPack = new Backpack(
   "Everyday Bag",
   30,
   "Grey",
   15,
   26,
   26,
   false
);


console.log(everydayPack.name);
console.log(everydayPack.volume);
console.log(everydayPack.color);
console.log(everydayPack.pocketNum);
