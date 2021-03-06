# Trees

## Challenge

**trees**:

- Create a Binary Tree class

  - Define a method for each of the depth first traversals:
    - pre order
    - in order
    - post order which returns an array of the values, ordered appropriately.

- Create a Binary Search Tree class
  - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
  - Add
    - Arguments: value
    - Return: nothing
    - Adds a new node with that value in the correct location in the binary search tree.
  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

**breadthFirst**

- Write a function called breadth first
  - Arguments: tree
  - Return: list of all values in the tree, in the order they were encountered

**K-ary Tree**

- Create a K-ary tree calss with the travese method

**FizzBuzz K-ary Tree**

- Write a function called fizz buzz tree
  - Arguments: k-ary tree
  - Return: new Tree
    - If the value is divisible by 3, replace the value with “Fizz”
    - If the value is divisible by 5, replace the value with “Buzz”
    - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
    - If the value is not divisible by 3 or 5, simply turn the number into a String.

## White board proccess

treeMax:
![tree Max WhiteBoard](./assets/class16.png)

breadthFirst:
![BreadthFirst WhiteBoard](./assets/class17.png)

FizzBuzz:
![FizzBuzz K-ary Tree WhiteBoard](./assets/class18.png)

## Approach & Efficiency

**treeMax**
Space Complexity --> O(1), Time Complexity O(n);

**breadthFirst**
Space Complexity --> O(1), Time Complexity O(n);

**FizzBuzz**
Space Complexity --> O(n), Time Complexity O(n2);

## API

- Node class

  - creates and instance of a node with a value, left node, right node using new Node(value,left,righ)

- BinaryTree class

  - constructor adds a root node to the BinaryTree by creating a new BinaryTree instance using new BinaryTree(root)
  - methods:
    - preOrder method returns the values of tree nodes as traversed pre ordered
    - inOrder method returns the values of tree nodes as traversed in ordered
    - postOrder method returns the values of tree nodes as traversed post Ordered

- treeMax
  - travese in the tree to find the max number
- breadthFirst function
  - to traverse a tree using the breadth first method and return the traversed values in order
