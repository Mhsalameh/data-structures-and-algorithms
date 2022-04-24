"use strict";

const {
  BinaryTree,
  BinarySearchTree,
  Node,
  breadthFirst,
} = require("../binaryTree.js");
let tree = null;
describe("testing binaryTree", () => {
  let consoleSpy;
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

    tree = new BinaryTree(one);
  });

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("initiaiting tree", () => {
    expect(tree.root.value).toEqual(1);
  });

  it("testing preOrder", () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
    let emptyTree = new BinaryTree();
    emptyTree.preOrder();
    expect(consoleSpy).toHaveBeenCalledWith("error: tree is empty");
  });

  it("inOrder", () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
    let emptyTree = new BinaryTree();
    emptyTree.inOrder();
    expect(consoleSpy).toHaveBeenCalledWith("error: tree is empty");
  });

  it("postOrder", () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
    let emptyTree = new BinaryTree();
    emptyTree.postOrder();
    expect(consoleSpy).toHaveBeenCalledWith("error: tree is empty");
  });

  it("initiaiting BST", () => {
    let bst = new BinarySearchTree();
    expect(bst.root).toBeNull();
  });

  it("testing BST add", () => {
    let bst = new BinarySearchTree();
    bst.add(23);
    expect(bst.root.value).toEqual(23);
    bst.add(8);
    bst.add(4);
    bst.add(42);
    bst.add(16);
    bst.add(15);
    bst.add(27);
    bst.add(85);
    bst.add(22);
    bst.add(105);
    expect(bst.inOrder()).toEqual([4, 8, 15, 16, 22, 23, 27, 42, 85, 105]);
  });
  it("testing BST contains", () => {
    let bst = new BinarySearchTree();
    let emptyBst = new BinarySearchTree();
    bst.add(23);
    expect(bst.contains(8)).toBeFalsy();
    bst.add(8);
    bst.add(4);
    bst.add(42);
    bst.add(16);
    bst.add(15);
    bst.add(27);
    bst.add(85);
    bst.add(22);
    bst.add(105);
    expect(bst.contains(106)).toBeFalsy();
    expect(bst.contains(22)).toBeTruthy();
    emptyBst.contains(1);
    expect(consoleSpy).toHaveBeenCalledWith("tree is empty");
  });

  it("testing treeMax", () => {
    let max = tree.treeMax();
    expect(max).toEqual(9);
    let emptyTree = new BinaryTree();
    max = emptyTree.treeMax();
    expect(consoleSpy).toHaveBeenCalledWith("error: tree is empty");
  });

  it("testing breadthFirst", () => {
    let a = new Node("A");
    let b = new Node("B");
    let c = new Node("C");
    let d = new Node("D");
    let e = new Node("E");
    let f = new Node("F");
    b.left = d;
    b.right = e;
    a.left = b;
    c.left = f;
    a.right = c;
    let bst = new BinaryTree(a);
    console.log(typeof bst);
    expect(breadthFirst(bst)).toEqual(["A", "B", "C", "D", "E", "F"]);
    breadthFirst(a);
    expect(consoleSpy).toHaveBeenCalledWith("tree argument should be a tree");
  });
});
