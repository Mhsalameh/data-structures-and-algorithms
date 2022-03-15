'use strict';
const { LinkedList } = require('../linked-list/ll.js');
class Queue {
  constructor() {
    this.storage = new LinkedList();
    this.front = null;
  }
  enqueue(value) {
    this.storage.append(value);
    this.front = this.storage.head.value;
  }
  dequeue() {
    if (this.front) {
      const dequeued = this.front;
      this.storage.head = this.storage.head.next;
      this.front = this.storage.head ? this.storage.head.value : null;
      return dequeued;
    } else {
      console.error('exception: queue is empty');
    }
  }
  peek() {
    if (this.front) {
      return this.front;
    } else {
      console.error('exception: queue is empty');
    }
  }
  isEmpty() {
    if (!this.front) {
      return true;
    } else {
      return false;
    }
  }
}

// let newQue = new Queue();
// newQue.enqueue(1);
// newQue.enqueue(2);
// console.log(newQue);
// console.log(newQue.dequeue());
// console.log(newQue);
// console.log(newQue.peek());
// console.log(newQue.isEmpty())

module.exports = Queue;
