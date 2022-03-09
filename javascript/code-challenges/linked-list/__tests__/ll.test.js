"use strict";
const { it } = require("eslint/lib/rule-tester/rule-tester");
const LinkedList = require("../ll.js");


describe("testing linkedlist", () => {
    
    let consoleSpy; 

    beforeEach( ()=>{
        consoleSpy =  jest.spyOn(console, 'error').mockImplementation();
    })
    afterEach(()=>{
        consoleSpy.mockRestore();
    })

  it("testing creating new linkedlist", () => {
    let newLink = new LinkedList();
    // console.log(newLink);
    expect(newLink).toBeInstanceOf(LinkedList);
    expect(newLink.head).toBeNull();
  });

  it("testing inserting new node", () => {
    let newLink = new LinkedList();
    newLink.insert("a");
    expect(newLink.head.value).toEqual("a");
    expect(newLink.head.next).toBeNull();
    // console.log(newLink.head)
    newLink.insert("b");
    // console.log(newLink)
    expect(newLink.head.value).toEqual("b");
    expect(newLink.head.next.value).toEqual("a");
    expect(newLink.head.next.next).toBeNull();
  });
  it("testing include method in linked list", () => {
    let newLink = new LinkedList();
    newLink.insert("a");
    newLink.insert("b");
    newLink.insert("c");
    expect(newLink.includes("a")).toBeTruthy();
    expect(newLink.includes("b")).toBeTruthy();
    expect(newLink.includes("c")).toBeTruthy();
    expect(newLink.includes("g")).toBeFalsy();
  });
  it("testing toString method in linked list", () => {
    let newLink = new LinkedList();
    expect(newLink.toString()).toEqual(null);
    newLink.insert("a");
    expect(newLink.toString()).toEqual("{a}-> null");
    newLink.insert("b");
    expect(newLink.toString()).toEqual("{b}-> {a}-> null");
  });

  it("Testing initiating linked list", () => {
    const list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList);
    expect(list.head).toBeNull();
  });

  it("Testing append : adding node to the end of the list", () => {
    const list = new LinkedList();
    list.append("a");
    expect(list.head.value).toEqual("a");
    expect(list.head.next).toBeNull();
    list.append("b");
    expect(list.head.value).toEqual("a");
    expect(list.head.next.value).toEqual("b");
    expect(list.head.next.next).toBeNull();
  });

  it("testing insertBefore: add a node before a specific value", () => {
    const list = new LinkedList();
    list.insertBefore("a", "b");
    expect(consoleSpy).toHaveBeenCalledWith("Error: linked list is empty");
    list.append("a");
    list.insertBefore("a", "b");
    expect(list.head.value).toEqual("b");
    expect(list.head.next.value).toEqual("a");
    expect(list.head.next.next).toBeNull;
    list.insertBefore("a", "c");
    expect(list.head.next.value).toEqual("c");
    expect(list.head.next.next.value).toEqual("a");
    expect(list.head.next.next.next).toBeNull();
    list.insertBefore("j", "t");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: j is not available in the linked list"
    );
  });

  it("testing insertAfter: add a node after a specific value", () => {
    const list = new LinkedList();
    list.insertAfter("a", "b");
    expect(consoleSpy).toHaveBeenCalledWith("Error: linked list is empty");
    list.append("a");
    list.insertAfter("a", "b");
    expect(list.head.value).toEqual("a");
    expect(list.head.next.value).toEqual("b");
    expect(list.head.next.next).toBeNull;
    list.insertAfter("b", "c");
    expect(list.head.next.value).toEqual("b");
    expect(list.head.next.next.value).toEqual("c");
    expect(list.head.next.next.next).toBeNull();
    list.insertAfter("j", "t");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error: j is not available in the linked list"
    );
  });
  it("testing kthFromEnd",()=>{
    const list = new LinkedList();
    let kthValue;
    list.kthFromEnd(1);
    expect(consoleSpy).toHaveBeenCalledWith("Error: linked list is empty")
    list.append('a');
   kthValue= list.kthFromEnd(0);
    expect(kthValue).toEqual('a')
    kthValue=list.kthFromEnd(1);
    expect(consoleSpy).toHaveBeenCalledWith(`argument:'k' can't be equal or more than 1: length of the list, k is limited from 0 to 0`)
    list.append('b');
    kthValue=list.kthFromEnd(1);
    expect(kthValue).toEqual('a')
    kthValue=list.kthFromEnd(0);
    expect(kthValue).toEqual('b')

  })
});
