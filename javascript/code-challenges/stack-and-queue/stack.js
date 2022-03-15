'use strict';
const { LinkedList } = require('../linked-list/ll.js');
class Stack {
  constructor() {
    this.storage = new LinkedList();
    this.top = null;
  }
  push(value) {
    this.storage.append(value);
    let currentNode = this.storage.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    this.top = currentNode.value;
  }
  peek() {
    if (this.top) {
      return this.top;
    } else {
      console.error('exception: stack is empty');
    }
  }
  pop() {
    if (this.top) {
      let currentNode = this.storage.head;
      if (this.storage.head.next) {
        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }
        let poppedTop = currentNode.next.value;
        this.top = currentNode.value;
        currentNode.next = null;
        return poppedTop;
      } else {
        currentNode = this.storage.head;
        this.storage.head = null;
        this.top = null;
        return currentNode.value;
      }
    } else {
      console.error('exception: stack is empty');
    }
  }
  isEmpty() {
    if (this.top) {
      return false;
    } else {
      return true;
    }
  }
}
// let newStack = new Stack();
// // let emptyStack = new Stack();
// newStack.push(1);
// // newStack.push(2);
// // newStack.push(3);
// console.log(newStack);
// let x = newStack.pop();
// console.log('2',x);
// console.log(newStack);
// console.log('1',newStack.peek());
// console.log(newStack.isEmpty());
module.exports = Stack;
