# Stacks and Queues

I used the linked list calss from previous challenges as the underlying data storage mechanism, so the storage of either queue or stack classes will be a linked list that have the methods in the linked list class

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue:

- Stack:
  1. push: adds a new node with that value to the top of the stack with an O(1) Time performance.
  2. peek: Returns value of the node located at the top of the stack
  3. isEmpty: Returns boolean indicating whether or not the stack is empty.
  4. pop: Returns the value from node from the top of the stack and Removes the node from the top of the stack

- Queue:
  1. enqueue: adds a new node with that value to the back of the queue with an O(1) Time performance.
  2. dequeue: Returns the value from node from the front of the queue and Removes the node from the front of the queue
  3. peek: Returns value of the node located at the front of the queue
  4. isEmpty: Returns boolean indicating whether or not the queue is empty

## Approach & Efficiency

## API

- Stack:
  1. stack.push(value): adds a new node with that value to the top of the stack with an O(1) Time performance.
  2. stack.peek(): Returns value of the node located at the top of the stack
  3. stack.isEmpty(): Returns boolean indicating whether or not the stack is empty.
  4. stack.pop(): Returns the value from node from the top of the stack and Removes the node from the top of the stack

- Queue:
  1. queue.enqueue(value): adds a new node with that value to the back of the queue with an O(1) Time performance.
  2. queue.dequeue(): Returns the value from node from the front of the queue and Removes the node from the front of the queue
  3. queue.peek(): Returns value of the node located at the front of the queue
  4. queue.isEmpty(): Returns boolean indicating whether or not the queue is empty
