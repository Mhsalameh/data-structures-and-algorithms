/* eslint-disable quotes */
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
//create a function that takes in a graph and an array of city names
//return the total cost of the trip
//edge cases: if start or end is not in the graph, return null
//            if start and end are the same, return 0
//            if start and end are not connected, return null
//            if start and end are connected, return the total cost of the trip
function businessTrip(graph, cities) {
  let start = cities[0];
  let end = cities[cities.length - 1];
  let totalCost = 0;
  let visited = new Set();
  let queue = [];
  let currentCity = start;
  queue.push(currentCity);
  visited.add(currentCity);
  while (queue.length) {
    currentCity = queue.shift();
    if (currentCity === end) {
      return totalCost;
    }
    let neighbors = graph.getNeighbors(currentCity);
    for (let neighbor of neighbors) {
      let neighborNode = neighbor.vertex;
      if (visited.has(neighborNode)) {
        continue;
      } else {
        visited.add(neighborNode);
        queue.push(neighborNode);
        totalCost += neighbor.weight;
      }
    }
  }
  return null;
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
// console.log(graph.adjacencyList.has(vertex7));
console.log(businessTrip(graph, [vertex1, vertex4]));
// console.log(graph.bft(vertex1));
// console.log(graph.getNodebfs());
module.exports = Graph;
