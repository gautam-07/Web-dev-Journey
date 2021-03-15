// Classes in Javascript

// Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.

// An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

// Color class 

class Color{
   constructor(r,g,b,name) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.name = name;
   }

   ineerRGB() {
      return `${this.r}, ${this.g}, ${this.b}`;
   }

   rgb() {
      return `rgb(${this.ineerRGB()})`;
   }

   hex() {
      return '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
   }

   rgba(a=1) {
      return `rgb(${this.ineerRGB()}, ${a})`;
   }
}

const red = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');

document.body.style.backgroundColor = red.rgba(0.7);


