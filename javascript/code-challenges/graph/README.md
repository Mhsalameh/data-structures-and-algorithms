# Graphs

points, called vertices, and lines between those points, called edges. There are many different types of graphs, such as connected and disconnected graphs, bipartite graphs, weighted graphs, directed and undirected graphs, and simple graphs.

## Challenge

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- add node
  - Arguments : value
  - returns: the added node
- add edge
  - Arguments : node1, node2, weight
  - returns: nothing
- get nodes
  - Arguments : nothing
  - returns: an array of nodes
- get neighbors
  - Arguments : node
  - returns: an array of nodes
- size
  - Arguments : nothing
  - returns: the number of nodes in the graph

## Approach & Efficiency

- add node:
  - T: O(1)
  - S: O(1)
- add edge:
  - T: O(1)
  - S: O(1)
- get nodes
  - T: O(n)
  - S: O(n)
- get neighbors
  - T: O(n)
  - S: O(n)
- size:
  - T: O(1)
  - S: O(1)

## API

class : Graph

- add node: adds a node to the graph
- add edge: adds an edge to the graph
- getNodes: return an array of nodes
- getNeighbors: return an array of neighbors of a node
- size: return the number of nodes in the graph
