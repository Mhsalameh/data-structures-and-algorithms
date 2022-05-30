/* eslint-disable quotes */
const Graph = require("../graph");

describe("testing Graph", () => {
  let consoleSpy;
  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("testing new graph", () => {
    let graph = new Graph();
    expect(graph).toBeInstanceOf(Graph);
  });
  it("testing adding new node", () => {
    let graph = new Graph();
    graph.addNode("A");
    expect(graph.adjacencyList.has("A")).toBe(true);
    expect(graph.addNode("B")).toBe("B");
  });
  it("testing adding new edge", () => {
    let graph = new Graph();
    graph.addNode("A");
    graph.addEdge("A", "B", 1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "One or both of the nodes does not exist"
    );
    graph.addNode("B");
    graph.addEdge("A", "B", 1);
    expect(graph.adjacencyList.get("A").length).toBe(1);
  });

  it("testing getting neighbors", () => {
    let graph = new Graph();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addEdge("A", "B", 1);
    graph.addEdge("A", "C", 1);
    expect(graph.getNeighbors("A").length).toBe(2);
  });

  it("testing getting nodes", () => {
    let graph = new Graph();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");
    graph.addNode("F");
    expect(graph.getNodes()).toEqual(["A", "B", "C", "D", "E", "F"]);
  });
  it("testing size", () => {
    let graph = new Graph();
    expect(graph.size()).toBe(0);
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");
    graph.addNode("F");
    graph.addEdge("A", "B", 1);
    graph.addEdge("A", "C", 1);
    graph.addEdge("B", "D", 1);
    graph.addEdge("B", "E", 1);
    graph.addEdge("C", "D", 1);
    graph.addEdge("C", "E", 1);
    graph.addEdge("D", "E", 1);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    expect(graph.size()).toBe(6);
  });
  it("testing bft", () => {
    let graph = new Graph();
    expect(graph.bft()).toBeNull();
    graph.addNode("A");
    graph.addNode("B");
    graph.addNode("C");
    graph.addNode("D");
    graph.addNode("E");
    graph.addNode("F");
    graph.addEdge("A", "B", 1);
    graph.addEdge("A", "C", 1);
    graph.addEdge("B", "D", 1);
    graph.addEdge("B", "E", 1);
    graph.addEdge("C", "D", 1);
    graph.addEdge("C", "E", 1);
    graph.addEdge("D", "E", 1);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);
    expect(graph.bft("A")).toEqual(["A", "B", "C", "D", "E", "F"]);
  });
});