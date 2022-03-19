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
      while (currentNode.value !== value && currentNode.next) {
        nodeBefore = currentNode;
        currentNode = currentNode.next;
      }
      if (!nodeBefore && currentNode.value === value) {
        // check if there is a node before chosen value
        node.next = currentNode;
        this.head = node;
      } else if (currentNode.value === value) {
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
      while (currentNode.next && currentNode.value !== value) {
        currentNode = currentNode.next;
        nodeAfter = currentNode.next;
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
        while (kthNode.next && decend !== index) {
          kthNode = kthNode.next;
          decend++;
        }
        // console.log(kthNode.value);
        return kthNode.value;
      } else {
        console.error(
          `argument:'k' can't be equal or more than ${ascend}: length of the list, k is limited from 0 to ${
            ascend - 1
          }`
        );
      }
    }
  }
  // length() {
  //   let currentNode = this.head;
  //   let count = 1;
  //   // console.log(currentNode);
  //   while (currentNode.next) {
  //     currentNode = currentNode.next;
  //     count++;
  //     // console.log(ascend);
  //   }
  //   return count;
  // }
}

function zipLists(list1, list2) {
  let node1 = list1.head;
  let node2 = list2.head;
  let finalList = new LinkedList();
  if (list1.head) {
    finalList.append(node1.value);
    while (node1 && node2) {
      console.log({ node1 });
      console.log({ node2 });
      if (node1.next) {
        finalList.append(node2.value);
        finalList.append(node1.next.value);
        node1 = node1.next;
        node2 = node2.next;
      } else {
        while (node2) {
          finalList.append(node2.value);
          node2 = node2.next;
        }
      }
    }
  } else {
    finalList.head = list2.head;
  }
  return finalList;
}

function isPalindrome(list) {
  if (list.head) {
    let currentNode = list.head;
    let listArr = [];
    let first = 0;
    while (currentNode) {
      listArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(listArr);
    let last = listArr.length - 1;
    while (first <= last) {
      if (listArr[first] !== listArr[last]) {
        return false;
      }
      first++;
      last--;
    }
    return true;
  } else {
    throw new Error('list is empty');
  }
}


module.exports = { LinkedList: LinkedList, zipLists: zipLists, isPalindrome:isPalindrome };
