#!/usr/bin/node
const process = require('process');
const size = process.argv[2];

if (isNaN(size)) {
  console.log('Missing size');
} else {
  let character = 'X';
  for (let i = 0; i < (size - 1); i++) {
    character = character + 'X';
  }
  for (let j = 0; j < size; j++) {
    console.log(character);
  }
}
