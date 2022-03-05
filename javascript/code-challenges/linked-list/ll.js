"use strict";

const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  includes(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  toString() {
    let currentNode = this.head;
    let linkedString;
    if (currentNode) {
      linkedString = `{${this.head.value}}`;
    } else {
      linkedString = null;
    }
    while (currentNode) {
      linkedString = currentNode.next
        ? linkedString + `-> {${currentNode.next.value}}`
        : linkedString + `-> null`;
      currentNode = currentNode.next;
    }
    return linkedString;
  }
}

module.exports =LinkedList;