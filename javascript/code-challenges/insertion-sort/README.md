# Challenge Summary

Insertion-sort a simple and intuitive looping over items in the array, inserting each new item into the subarray before the new item.

refer to [blog](./BLOG.md) for more info.

## Whiteboard Process

![whiteboard process 26](./assets/WB-26.png)

## Solution

to run the function just call it with an unsorted array,

- insertionSort([4,5,8,9,75,1,0,18]) the returned value should be [0,1,4,5,8,9,18,75];

```javascript
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
console.log(insertionSort([4,5,8,9,75,1,0,18]))
```

output --> `[0,1,4,5,8,9,18,75]`