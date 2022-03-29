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


module.exports = {BinaryTree: BinaryTree, BinarySearchTree: BinarySearchTree, Node:Node};
