/**
 * Objects made using objects constructor function
 * Old and less efficient way to make object templates
 * In this methods are defined withing the object constructor whereas in class
 * in class methods are defined outside constructor.
 */


function Backpack(
   name,
   volume,
   color,
   pocketNum,
   strapLengthL,
   strapLengthR,
   lidOpen
) {
   this.name = name;
   this.volume = volume;
   this.pocketNum = pocketNum;
   this.strapLength = {
      left: strapLengthL,
      right: strapLengthR
   }
   this.lidOpen = lidOpen;

   // Methods inside object constructor
   this.toggleLid = function (lidStatus) {
     this.lidOpen = lidStatus; 
   };

   this.newStrapLength = function (lengthLeft, lengthRight) {
      this.strapLength.left  = lengthLeft;
      this.strapLength.right = lengthRight;
   };
}


// Making new object
const everydayPack = new Backpack(
   "Everyday Pack",
   30,
   "Grey",
   15,
   26,
   26,
   false
);

console.log(everydayPack.name);
