#!/usr/bin/node
const process = require('process');

const args = process.argv;
const a = parseInt(args[2]);
const b = parseInt(args[3]);

function add (a, b) {
  console.log(a + b);
}

add(a, b);
