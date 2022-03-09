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
  append(value) {
    const node = new Node(value);
    if (this.head) {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    } else {
      this.head = node;
    }
  }
  insertBefore(value, newValue) {
    const node = new Node(newValue);
    if (this.head) {
      // check if list is empty or not
      let currentNode = this.head;
      let nodeBefore;
      let count = 0;
      while (currentNode.value !== value && currentNode.next) {
        nodeBefore = currentNode;
        currentNode = currentNode.next;
        // console.log(count,currentNode)
        // console.log(count,nodeBefore)
        count++;
      }
      if (!nodeBefore && currentNode.value == value) {
        // check if there is a node before chosen value
        node.next = currentNode;
        this.head = node;
      } else if (currentNode.value == value) {
        node.next = currentNode;
        nodeBefore.next = node;
      } else {
        console.error(`Error: ${value} is not available in the linked list`);
      }
    } else {
      console.error("Error: linked list is empty");
    }
  }

  insertAfter(value, newValue) {
    const node = new Node(newValue);
    if (!this.head) {
      console.error("Error: linked list is empty");
    } else {
      let currentNode = this.head;
      let nodeAfter = currentNode.next;
      let count = 0;
      while (currentNode.next && currentNode.value !== value) {
        currentNode = currentNode.next;
        nodeAfter = currentNode.next;
        // console.log(count,currentNode)
        // console.log(count,nodeAfter)
        count++;
      }
      if (currentNode.value === value) {
        currentNode.next = node;
        node.next = nodeAfter;
      } else {
        console.error(`Error: ${value} is not available in the linked list`);
      }
    }
  }

  kthFromEnd(k) {
    if (!this.head) {
      console.error("Error: linked list is empty");
    } else {
      let currentNode = this.head;
      let ascend = 1;
      console.log(currentNode);
      while (currentNode.next) {
        currentNode = currentNode.next;
        ascend++;
        console.log(ascend);
      }
      let index = ascend - k;
      if (index > 0) {
        let decend = 1;
        console.log(index);
        let kthNode = this.head;
        while (kthNode.next && decend != index) {
          kthNode = kthNode.next;
          decend++;
        }
        // console.log(kthNode.value);
        return kthNode.value;
      } else {
        console.error(`argument:'k' can't be equal or more than ${ascend}: length of the list, k is limited from 0 to ${ascend-1}`);
      }
    }
  }
}

let link = new LinkedList();
link.append("a");
link.append("b");
link.append("c");
link.append("d");
link.append("e");
link.kthFromEnd(3);

module.exports = LinkedList;
