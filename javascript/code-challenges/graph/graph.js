"use strict";

const Vertex = require("./vertex");
const Edge = require("./edge");

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addNode(node) {
    this.adjacencyList.set(node, []);
    return node;
  }
  addEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.error("One or both of the nodes does not exist");
      return;
    }
    const adjecencies = this.getNeighbors(start);
    adjecencies.push(new Edge(end, weight));
  }

  getNeighbors(node) {
    return this.adjacencyList.get(node);
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  bft(startNode) {
    let queue = [];
    let visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    let result = [startNode];
    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      console.log(111111, neighbors);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          result.push(neighborNode);
          visitedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    return result;
  }

  size() {
    if (!this.adjacencyList.size) {
      return 0;
    }
    return this.adjacencyList.size;
  }
}

let graph = new Graph();
let vertex1 = new Vertex("A");
let vertex2 = new Vertex("B");
let vertex3 = new Vertex("C");
let vertex4 = new Vertex("D");
let vertex5 = new Vertex("E");
let vertex6 = new Vertex("F");

graph.addNode(vertex1);
graph.addNode(vertex2);
graph.addNode(vertex3);
graph.addNode(vertex4);
graph.addNode(vertex5);
graph.addNode(vertex6);

graph.addEdge(vertex1, vertex2, 4);
graph.addEdge(vertex1, vertex3, 2);
graph.addEdge(vertex2, vertex4, 3);
graph.addEdge(vertex2, vertex5, 2);
graph.addEdge(vertex2, vertex3, 2);
graph.addEdge(vertex3, vertex4, 2);
graph.addEdge(vertex3, vertex5, 3);
graph.addEdge(vertex4, vertex5, 3);
graph.addEdge(vertex4, vertex6, 2);
graph.addEdge(vertex5, vertex6, 2);

console.log(graph.bft(vertex1));
console.log(graph.getNodes());
module.exports = Graph;
