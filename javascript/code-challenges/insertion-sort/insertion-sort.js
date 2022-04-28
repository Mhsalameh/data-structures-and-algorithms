'use strict';

function insertionSort(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = temp;
    }
    return arr;
  } else {
    return console.error('input is not an array');
  }
}

module.exports = insertionSort;
