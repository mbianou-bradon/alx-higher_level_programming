#!/usr/bin/node
const process = require('process');
const args = process.argv;
let index = 0;

if (isNaN(args[2])) {
  console.log('Missing number of occurrences');
} else {
  while (index < args[2]) {
    console.log('C is fun');
    index++;
  }
}
