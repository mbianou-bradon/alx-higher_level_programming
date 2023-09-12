#!/usr/bin/node

/*
Adds an instance method called print() that prints the rectangle using the
 character X
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
}

module.exports = Rectangle;
