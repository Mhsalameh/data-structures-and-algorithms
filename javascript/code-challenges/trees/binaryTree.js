/* eslint-disable quotes */
"use strict";

const Node = require("./node.js");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    function traverse(root) {
      result.push(root.value);
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }
    if (this.root) {
      traverse(this.root);
      return result;
    } else {
      console.error("error: tree is empty");
    }
  }
  inOrder() {
    let result = [];
    function traverse(root) {
      if (root.left) traverse(root.left);
      result.push(root.value);
      if (root.right) traverse(root.right);
    }
    if (this.root) {
      traverse(this.root);
      return result;
    } else {
      console.error("error: tree is empty");
    }
  }
  postOrder() {
    let result = [];
    function traverse(root) {
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
      result.push(root.value);
    }
    if (this.root) {
      traverse(this.root);
      return result;
    } else {
      console.error("error: tree is empty");
    }
  }
  treeMax() {
    let max;
    function traverse(root) {
      if (root.value > max) max = root.value;
      if (root.left) traverse(root.left);
      if (root.right) traverse(root.right);
    }
    if (this.root) {
      max = this.root.value;
      traverse(this.root);
      return max;
    } else {
      console.error("error: tree is empty");
    }
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super(root);
  }
  add(value) {
    const newNode = new Node(value);
    function addNode(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          addNode(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          addNode(node.right, newNode);
        }
      }
    }
    if (!this.root) {
      this.root = newNode;
    } else {
      addNode(this.root, newNode);
    }
  }
  contains(value) {
    function compare(node, value) {
      //   console.log(node);
      if (node.value === value) return true;
      if (node.value > value) {
        if (node.left) {
          return compare(node.left, value);
        }
      } else {
        if (node.right) {
          return compare(node.right, value);
        }
      }
    }

    if (!this.root) {
      console.error("tree is empty");
    } else {
      return compare(this.root, value) || false;
    }
  }
}

function breadthFirst(tree) {
  if (tree.root) {
    let result = [];
    let queue = [tree.root];
    while (queue[0]) {
      let front = queue.shift();
      result.push(front.value);

      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }
    return result;
  } else {
    console.error("tree argument should be a tree");
  }
}

let bst = new BinarySearchTree();
// let emptyBst = new BinarySearchTree();
bst.add(23);
// expect(bst.contains(8)).toBeFalsy();
bst.add(8);
bst.add(4);
// bst.add(42);
bst.add(16);
bst.add(15);
bst.add(27);
// bst.add(85);
bst.add(22);
// bst.add(105);
console.log(bst.treeMax());
module.exports = {
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree,
  Node: Node,
  breadthFirst: breadthFirst,
};
