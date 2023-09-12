#!/usr/bin/node

exports.esrever = function (list) {
  const arrayNew = [];
  for (let index = list.length - 1; index >= 0; index--) {
    arrayNew.push(list[index]);
  }
  return (arrayNew);
};
