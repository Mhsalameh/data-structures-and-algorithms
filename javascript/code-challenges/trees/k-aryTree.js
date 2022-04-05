/* eslint-disable quotes */
"use strict";

class NodeK {
  constructor(value, children = null) {
    this.value = value;
    this.children = children;
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }

  traverse() {
    if (this.root) {
      let result = [];
      let queue = [this.root];
      while (queue[0]) {
        let front = queue.shift();
        // console.log("111111", front);
        result.push(front.value);
        if (front.children) {
          front.children.forEach((node) => {
            queue.push(node);
          });
        }
      }
      return result;
    } else {
      console.log("exception");
    }
  }
}

function fizzBuzzTree(tree) {
  let newTree = new KaryTree(tree.root);
  let queue = [newTree.root];
  while (queue[0]) {
    let front = queue.shift();
    if (front.value % 15 === 0) front.value = "FizzBuzz";
    else if (front.value % 3 === 0) {
      front.value = "Fizz";
    } else if (front.value % 5 === 0) front.value = "Buzz";
    else front.value = front.value.toString();
    console.log(typeof front.value);
    if (front.children) {
      front.children.forEach((node) => {
        queue.push(node);
      });
    }
  }
  return newTree;
}
let node1 = new NodeK(2);
let node2 = new NodeK(3);
let node4 = new NodeK(5);
let node6 = new NodeK(6, [node4]);
let node3 = new NodeK(4, [node6]);
let root = new NodeK(30, [node1, node2, node3]);
let tree = new KaryTree(root);
console.log(tree.traverse());
console.log(fizzBuzzTree(tree).traverse());

module.exports = { KaryTree: KaryTree, NodeK: NodeK, fizzBuzzTree:fizzBuzzTree};
