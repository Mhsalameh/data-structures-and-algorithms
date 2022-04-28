'use strict';

function mergeSort(arr) {
  if (Array.isArray(arr)) {
    const mid = arr.length / 2;
    if (arr.length <= 1) {
      return arr;
    }
    const left = arr.splice(0, mid);
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
  } else {
    console.error('argument must be an array');
  }
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

module.exports=mergeSort;
