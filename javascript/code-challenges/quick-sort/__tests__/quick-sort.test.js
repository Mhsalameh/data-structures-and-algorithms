"use stirct";

const sorter = require("../quick-sort.js");
const quickSort = sorter.quickSort;


const array = [2, 3, 5, 7, 13, 11];

describe("Testing quick sort function", () => {

  it("testing quicksort", () => {
    const sortedArray = quickSort(array, 0, array.length-1);

    expect(sortedArray).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
