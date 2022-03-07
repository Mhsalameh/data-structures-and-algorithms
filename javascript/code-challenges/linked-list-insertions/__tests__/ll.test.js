"use strict";
const LinkedList = require("../ll.js");

describe("testing linked list", () => {
    let consoleSpy; 

    beforeAll( ()=>{
        consoleSpy =  jest.spyOn(console, 'error').mockImplementation();
    })
    afterAll(()=>{
        consoleSpy.mockRestore();
    })
  it("Testing initiating linked list", () => {
    const list = new LinkedList();
    expect(list).toBeInstanceOf(LinkedList)
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
    list.insertBefore('a','b');
    expect(consoleSpy).toHaveBeenCalledWith('Error: linked list is empty')
    list.append("a");
    list.insertBefore("a", "b");
    expect(list.head.value).toEqual("b");
    expect(list.head.next.value).toEqual("a");
    expect(list.head.next.next).toBeNull;
    list.insertBefore("a","c");
    expect(list.head.next.value).toEqual('c');
    expect(list.head.next.next.value).toEqual('a');
    expect(list.head.next.next.next).toBeNull()
    list.insertBefore("j",'t');
    expect(consoleSpy).toHaveBeenCalledWith("Error: j is not available in the linked list")
  });

  it("testing insertAfter: add a node after a specific value", () => {
    const list = new LinkedList();
    list.insertAfter('a','b');
    expect(consoleSpy).toHaveBeenCalledWith('Error: linked list is empty')
    list.append("a");
    list.insertAfter("a", "b");
    expect(list.head.value).toEqual("a");
    expect(list.head.next.value).toEqual("b");
    expect(list.head.next.next).toBeNull;
    list.insertAfter("b","c");
    expect(list.head.next.value).toEqual('b');
    expect(list.head.next.next.value).toEqual('c');
    expect(list.head.next.next.next).toBeNull()
    list.insertAfter("j",'t');
    expect(consoleSpy).toHaveBeenCalledWith("Error: j is not available in the linked list")
  });

});
