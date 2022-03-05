'use strict'
const Node = require('../node.js')

describe('testing node', ()=>{
    it ('creating new node',()=>{
        const value="a";
        const node = new Node(value);
        expect(node).toBeInstanceOf(Node);
        expect(node.value).toEqual(value);
    })
})
