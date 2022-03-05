'use strict'
const { it } = require('eslint/lib/rule-tester/rule-tester');
const LinkedList = require('../ll.js')
describe('testing linkedlist',()=>{
    it('testing creating new linkedlist',()=>{
        let newLink=new LinkedList();
        // console.log(newLink);
        expect(newLink).toBeInstanceOf(LinkedList);
        expect(newLink.head).toBeNull();
    })

    it('testing inserting new node',()=>{
        let newLink = new LinkedList();
        newLink.insert('a');
        expect(newLink.head.value).toEqual('a');
        expect(newLink.head.next).toBeNull();
        // console.log(newLink.head)
        newLink.insert('b');
        // console.log(newLink)
        expect(newLink.head.value).toEqual('b');
        expect(newLink.head.next.value).toEqual('a');
        expect(newLink.head.next.next).toBeNull();
    })
    it('testing include method in linked list', ()=>{
        let newLink = new LinkedList();
        newLink.insert('a');
        newLink.insert('b');
        newLink.insert('c');
        expect(newLink.includes('a')).toBeTruthy();
        expect(newLink.includes('b')).toBeTruthy();
        expect(newLink.includes('c')).toBeTruthy();
        expect(newLink.includes('g')).toBeFalsy();
    })
    it("testing toString method in linked list",()=>{
        let newLink=new LinkedList();
        expect(newLink.toString()).toEqual(null)
        newLink.insert('a');
        expect (newLink.toString()).toEqual('{a}-> null')
        newLink.insert('b');
        expect(newLink.toString()).toEqual('{b}-> {a}-> null')
    })
})