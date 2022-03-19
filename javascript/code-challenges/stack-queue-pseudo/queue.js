'use stirct';

class PseudoQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
    this.front = null;
  }
  enqueue(value) {
    while (this.stack1.length !== 0) {
      let top1 = this.stack1.pop();
      this.stack2.push(top1);
      console.log(this.stack1);
    }
    this.stack1.push(value);
    while (this.stack2.length !== 0) {
      let top2 = this.stack2.pop();
      this.stack1.push(top2);
    }
    this.front = this.stack1[this.stack1.length - 1];
  }
  dequeue() {
    if (this.stack1.length !== 0) {
      let poppedValue = this.stack1.pop();
      return poppedValue;
    } else {
      console.log('PseudoQueue is empty');
    }
  }
}
let q = new PseudoQueue();
console.log(q);
q.enqueue(20);
console.log(q);
q.enqueue(15);
console.log(q);
q.enqueue(10);
console.log(q);
q.enqueue(5);
console.log(q);
console.log(q.dequeue());
console.log(q);
console.log(q.dequeue());
console.log(q);
