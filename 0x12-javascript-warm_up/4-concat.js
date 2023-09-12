#!/usr/bin/node
const process = require('process');

const args = process.argv;
if (args.length >= 2) {
  const variable = args[2] + ' ' + 'is' + ' ' + args[3];
  console.log(variable);
}
