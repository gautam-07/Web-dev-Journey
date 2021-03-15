// Object Oriented programming in Javascript
// Factory Function

// Factory function method is not commonly used instead constructor function method is used more often.constructor function is in file constructorFunc.js


function makeColor(r, g, b) {
   const color = {};
   color.r = r;
   color.g = g;
   color.b = b;
   
   color.rgb = () => {
      const { r, g, b } = this;
      return `rgb(${r}, ${g}, ${b})`;
   };

   color.hex = () => {
      const { r, g, b } = this;
      return (
         '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
      );
   };

   return color;
}

const firstColor = makeColor(35, 255, 160);
firstColor.hex();
firstColor.rgb();
