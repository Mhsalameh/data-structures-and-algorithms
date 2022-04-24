'use strict';

const { KaryTree, NodeK, fizzBuzzTree } = require('../k-aryTree');

let tree = null;
describe('testing KaryTree', () => {
  let consoleSpy;
  beforeAll(() => {
    let one = new NodeK(1);
    let two = new NodeK(30);
    let three = new NodeK(3);
    let four = new NodeK(4);
    let five = new NodeK(5);
    let six = new NodeK(20);
    let seven = new NodeK(7);
    let eight = new NodeK(8);
    let nine = new NodeK(9);

    one.children = [two, three, four];
    two.children = [six, seven];
    seven.children = [eight, five];
    three.children = [nine];

    tree = new KaryTree(one);
  });
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('initiating K-aryTree', () => {
    let kary = new KaryTree();
    expect(kary.root).toBeNull();
    expect(tree.root.value).toEqual(1);
  });
  it('testing traverse', () => {
    expect(tree.traverse()).toEqual([1, 30, 3, 4, 20, 7, 9, 8, 5]);
  });
  it('testing traversin empty tree', () => {
    let kary = new KaryTree();
    kary.traverse();
    expect(consoleSpy).toHaveBeenCalledWith('exception');
  });
  it('testing fizz buzz function', () => {
    let newTree = fizzBuzzTree(tree);
    expect(newTree.traverse()).toEqual([
      '1',
      'FizzBuzz',
      'Fizz',
      '4',
      'Buzz',
      '7',
      'Fizz',
      '8',
      'Buzz',
    ]);
  });
});
