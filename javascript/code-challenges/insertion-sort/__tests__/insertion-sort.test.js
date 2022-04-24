"use strict";

const insertionSort = require("../insertion-sort");

describe("testing insertion sort", () => {
  it("sorting the array", () => {
    const array = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(array)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});
