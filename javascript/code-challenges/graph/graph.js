/* eslint-disable quotes */
"use strict";

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
    if (!this.adjacencyList.has(node)) return null;
    return this.adjacencyList.get(node);
  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }

  size() {
    if (!this.adjacencyList.size) {
      return 0;
    }
    return this.adjacencyList.size;
  }
  bft(startNode) {
    if (!startNode) return null;
    let queue = [];
    let visitedNodes = new Set();

    queue.push(startNode);
    visitedNodes.add(startNode);

    let result = [startNode];
    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
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
}
// create a function called buisnessTrip that takes in a graph and an array of strings
// the strings are the names of the cities in your path
// the function should return the cost of the trip
// the cost of the trip is the sum of the weights of the edges in the path
// if the path is not possible, return -1
// if the path is possible, but there is no edge between two cities, return -1
function businessTrip(graph, path) {
  let cost = 0;
  for (let i = 0; i < path.length - 1; i++) {
    let start = path[i];
    let end = path[i + 1];
    let edge = graph.getNeighbors(start).find((edge) => edge.vertex === end);
    if (!edge) return -1;
    cost += edge.weight;
  }
  return cost;
}
let graph = new Graph();
graph.addNode("Las Vegas");
graph.addNode("Denver");
graph.addNode("Phoenix");
graph.addNode("Dallas");
graph.addNode("Seattle");
graph.addEdge("Las Vegas", "Denver", 100);
graph.addEdge("Las Vegas", "Phoenix", 50);
graph.addEdge("Las Vegas", "Dallas", 250);
graph.addEdge("Denver", "Phoenix", 110);
graph.addEdge("Denver", "Dallas", 190);
graph.addEdge("Dallas", "Phoenix", 80);
graph.addEdge("Dallas", "Seattle", 300);
graph.addEdge("Phoenix", "Seattle", 120);

console.log(businessTrip(graph, ["Las Vegas", "Denver", "Dallas", "Seattle"]));
//output:-1
console.log(
  businessTrip(graph, ["Las Vegas", "Denver", "Dallas", "Seattle", "Phoenix"])
);
module.exports = { Graph, businessTrip };
