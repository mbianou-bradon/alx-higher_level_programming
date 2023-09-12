#!/usr/bin/node

const process = require('process');
const args = process.argv;

let num = parseInt(args[2]);

if (isNaN(num)) {
  num = 1;
}

function doFactorial (num) {
  if (num === 0 || isNaN(num)) {
    return (1);
  }
  const result = num * doFactorial(num - 1);
  return (result);
}

console.log(doFactorial(num));
