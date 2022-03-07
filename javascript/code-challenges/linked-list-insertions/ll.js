const Node = require("./node.js");

class LinkedList {
  constructor() {
    this.head = null;
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

// //   delete(value) {
// //     //   console.log(value)
// //     if (this.head) {
// //       let currentNode = this.head;
// //       let nodeBefore;
// //       while (currentNode && currentNode.value !== value) {
// //         nodeBefore = currentNode;
// //         currentNode = currentNode.next;
// //       }

// //       if (nodeBefore && currentNode.value === value) {

// //       } else if (currentNode.value == value) {
// //         this.head = currentNode.next;
// //       } else {
// //           console.error(`${value} is not available`);
// //       }
// //     } else {
// //       console.error("Error: linked list is empty");
// //     }
// //   }

//   toString() {
//     let currentNode = this.head;
//     let linkedString;
//     if (currentNode) {
//       linkedString = `{${this.head.value}}`;
//     } else {
//       linkedString = null;
//     }
//     while (currentNode) {
//       linkedString = currentNode.next
//         ? linkedString + `-> {${currentNode.next.value}}`
//         : linkedString + `-> null`;
//       currentNode = currentNode.next;
//     }
//     return linkedString;
//   }
}

module.exports = LinkedList;
let list = new LinkedList();
list.append("b");
list.append('a');
list.append('c')
console.log(list.toString());
list.insertBefore('t',"a")

// list.append("a");
// list.append("c");
// list.insertBefore("c", "h");
// list.insertAfter("h", "t");
// list.insertAfter("c", "g");
// list.delete('t')
