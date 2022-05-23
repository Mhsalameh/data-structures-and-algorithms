'use strict';

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  getVals() {
    let vals = [];
    let cur = this.head;
    if (!this.head) {
      return null;
    } else {
      while (cur) {
        vals.push(cur.value);
        cur = cur.next;
      }
    }
    return vals;
  }
}

module.exports = LinkedList;
