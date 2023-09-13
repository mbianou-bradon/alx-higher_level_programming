#!/usr/bin/node

const fs = require('fs');

const A = fs.readFileSync(process.argv[2], 'utf8', function (err, result) { if (err) console.log('error', err); });
const B = fs.readFileSync(process.argv[3], 'utf8', function (err, result) { if (err) console.log('error', err); });

const C = A.concat(B);

fs.writeFile(process.argv[4], C, 'utf8', function (err, result) { if (err) console.log('error', err); });
