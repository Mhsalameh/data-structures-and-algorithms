`use strict`;

const mergeSort = require('../merge-sort.js');

describe('testing merge-sort.js', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('testing mergeSort function', () => {
    let arr = [9, 7, 4, 2, 1, 5, 0];
    expect(mergeSort(arr)).toEqual([0, 1, 2, 4, 5, 7, 9]);
  });

  it('testing edge case (input not an array)', () => {
    let input = '9,7,4,2,1,5,0';
    mergeSort(input);
    expect(consoleSpy).toHaveBeenCalledWith('argument must be an array');
  });
});
