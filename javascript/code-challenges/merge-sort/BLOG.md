# Merge Sort

The merge sort is one of the more advanced sorting algorithms that’s quite efficient in sorting large amounts of data. The algorithm uses the recursive function concept with divide and conquer strategy to efficiently sort a given list of elements.

## Pseudocode

```pseudo
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## trace

Sample Array : `[8,23,4,42,16,15]`;

**phase 1:**

first we split the array into two halves until there is only one element in each array

```js
        [8,23,4,42,16,15]
     [8,23,4]  |  [42,16,15]
   [8]  [23,4] |   [42]  [16,15]
[8]  [23]  [4] |  [42]  [16]  [15]
```

**phase 2:**

we start merging two closest arrays. the smaller element is pushed to the new empty array thus sorting the array one step at a time.

```js
[8]  [23]  [4] |  [42]  [16]  [15]
   [8]  [4,23] |   [42]  [15,16]
     [4,8,23]  |  [15,16,42]
        [4,8,15,16,23,42]
```

## Efficency

- Time: O(n log(n))
  - we do multiple comparisons between two halfs of an array
- Space: O(n)
  - an array of n number of inputs was added
  