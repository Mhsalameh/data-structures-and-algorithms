'use strict';

const PseudoQueue = require('../queue.js');

describe('testing pseudo queue', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });
  it('initiating pseudo queue test', () => {
    let q = new PseudoQueue();
    expect(q.front).toBeNull();
    expect(q.stack1).toEqual([]);
    expect(q.stack2).toEqual([]);
  });
  it('inserting a new value', () => {
    let q = new PseudoQueue();
    q.enqueue('a');
    expect(q.front).toEqual('a');
    expect(q.stack1).toEqual(['a']);
    expect(q.stack2).toEqual([]);
    q.enqueue('b');
    expect(q.front).toEqual('a');
    expect(q.stack1).toEqual(['b', 'a']);
    expect(q.stack2).toEqual([]);
  });
  it('extracting from a queue', () => {
    let q = new PseudoQueue();
    q.enqueue('a');
    q.enqueue('b');
    q.dequeue();
    expect(q.front).toEqual('b');
    expect(q.stack1).toEqual(['b']);
    q.dequeue();
    expect(q.front).toBeNull();
    expect(q.stack1).toEqual([]);
  });
  it('extracting from an empty queue', () => {
    let q = new PseudoQueue();
    q.dequeue();
    expect(consoleSpy).toHaveBeenCalledWith('PseudoQueue is empty');
  });
});
