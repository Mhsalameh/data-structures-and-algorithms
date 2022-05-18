'use strict';
const commonTreeValues = require('../treeIntersection');
const { BinaryTree, Node } = require('../../trees/binaryTree');
let tree = null;
let tree2 = null;
let tree3 = null;
describe('testing binaryTree', () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    let one2 = new Node(1);
    let two2 = new Node(11);
    let three2 = new Node(3);
    let four2 = new Node(13);
    let five2 = new Node(5);
    let six2 = new Node(15);
    let seven2 = new Node(7);
    let eight2 = new Node(17);
    let nine2 = new Node(18);

    one2.left = two2;
    one2.right = three2;
    two2.left = six2;
    six2.right = seven2;
    seven2.left = eight2;
    seven2.right = nine2;
    three2.left = four2;
    three2.right = five2;

    let one3 = new Node(19);
    let two3 = new Node(20);
    let three3 = new Node(21);
    let four3 = new Node(22);
    let five3 = new Node(23);
    let six3 = new Node(24);
    let seven3 = new Node(25);
    let eight3 = new Node(26);
    let nine3 = new Node(27);

    one3.left = two3;
    one3.right = three3;
    two3.left = six3;
    six3.right = seven3;
    seven3.left = eight3;
    seven3.right = nine3;
    three3.left = four3;
    three3.right = five3;

    tree = new BinaryTree(one);
    tree2 = new BinaryTree(one2);
    tree3 = new BinaryTree(one3);
  });

  it('Testing intersection', () => {
    let result = commonTreeValues(tree, tree2);
    console.log(result);
    expect(result).toStrictEqual([1, 7, 3, 5]);
    result = commonTreeValues(tree, tree3);
    expect(result).toStrictEqual([]);
    let tree4 = null;
    result = commonTreeValues(tree, tree4);
    expect(result).toBeNull();
  });
});
