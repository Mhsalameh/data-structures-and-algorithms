'use strict';

const Queue = require('../queue');

describe('testing Queue', () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('Can successfully instantiate an empty queue', () => {
    let que = new Queue();
    expect(que.front).toBeNull;
  });

  it('Can successfully enqueue into a queue', () => {
    let que = new Queue();
    que.enqueue(1);
    expect(que.front).toEqual(1);
  });
  it('Can successfully enqueue multiple values into a queue', () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(que.front).toEqual(1);
    expect(que.storage.head.next.value).toEqual(2);
    expect(que.storage.head.next.next.value).toEqual(3);
  });
  it('Can successfully dequeue out of a queue the expected value', () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(que.dequeue()).toEqual(1);
    expect(que.front).toEqual(2);
  });
  it('Can successfully empty a queue after multiple dequeues', () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    que.dequeue();
    que.dequeue();
    expect(que.isEmpty()).toEqual(false);
    que.dequeue();
    expect(que.isEmpty()).toEqual(true);
  });
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let que = new Queue();
    que.enqueue(1);
    que.enqueue(2);
    que.enqueue(3);
    expect(que.peek()).toEqual(1);
  });
  it('Calling dequeue or peek on empty queue raises exception', () => {
    let emptyQue = new Queue();
    expect(emptyQue.isEmpty).toBeTruthy();
    emptyQue.dequeue();
    emptyQue.peek();
    expect(consoleSpy).toHaveBeenCalledWith('exception: queue is empty');
  });
});
