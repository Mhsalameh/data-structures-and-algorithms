'use strict';
const Stack = require('../stack');

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, 'error').mockImplementation();
});
afterEach(() => {
  consoleSpy.mockRestore();
});

describe('Testing Stack', () => {
  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.top).toEqual(null);
  });
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    expect(stack.isEmpty()).toEqual(false);
    expect(stack.top).toEqual('a');
  });
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push('a');
    stack.push('b');
    stack.push('c');
    expect(stack.top).toEqual('c');
  });
  it('Can successfully pop off the stack', () => {
    let stack = new Stack();
    // stack.pop();
    // expect(consoleSpy).toHaveBeenCalled;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let x = stack.pop();
    expect(x).toEqual(x);
    expect(stack.top).toEqual('b');
  });
  it('Can Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    // stack.pop();
    // expect(consoleSpy).toHaveBeenCalled;
    stack.push('a');
    stack.push('b');
    stack.push('c');
    let x = stack.pop();
    expect(x).toEqual(x);
    expect(stack.top).toEqual('b');
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
    expect(consoleSpy).toHaveBeenCalled;
  });
  it('Can successfully peek the next item on the stack', () => {
    let stack = new Stack();
    // stack.peek();
    // expect(consoleSpy).toHaveBeenCalled;
    stack.push('1');
    stack.push('2');
    stack.push('3');
    expect(stack.peek()).toEqual('3');
  });
  it('Calling pop or peek on empty stack raises exception', () => {
    let stack = new Stack();
    stack.peek();
    expect(consoleSpy).toHaveBeenCalledWith('exception: stack is empty');
    stack.pop();
    expect(consoleSpy).toHaveBeenCalledWith('exception: stack is empty');
  });
});
