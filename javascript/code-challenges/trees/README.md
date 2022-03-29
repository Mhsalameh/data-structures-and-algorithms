# Trees



## Challenge

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

## Approach & Efficiency

Space Complexity --> O(1), Time Complexity O(n);

## API

- Node class

  - creates and instance of a node with a value, left node, right node using new Node(value,left,righ)

- BinaryTree class
  - constructor adds a root node to the BinaryTree by creating a new BinaryTree instance using new BinaryTree(root)
  - methods:
    - preOrder method returns the values of tree nodes as traversed pre ordered
    - inOrder method returns the values of tree nodes as traversed in ordered
    - postOrder method returns the values of tree nodes as traversed post Ordered
