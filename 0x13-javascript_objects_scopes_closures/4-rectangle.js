#!/usr/bin/node

/*
Adds an instance method called rotate() that exchanges the width and the height
 of the rectangle

Adds an instance method called double() that multiples the width and the height
 of the rectangle by 2
*/

class Rectangle {
  constructor (w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    let p = 'X';
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width - 1; j++) {
        p = p + 'X';
      }
      console.log(p);
      p = 'X';
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width = this.width * 2;
    this.height = this.height * 2;
  }
}

module.exports = Rectangle;
