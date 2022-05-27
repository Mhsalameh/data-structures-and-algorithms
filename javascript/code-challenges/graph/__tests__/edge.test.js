const Edge = require("../edge");

describe("testing Edge", () => {
  it("testing adding new Edge", () => {
    const edge = new Edge("A", 1);
    const edge1 = new Edge("B");
    expect(edge.vertex).toBe("A");
    expect(edge.weight).toBe(1);
    expect(edge).toBeInstanceOf(Edge);
    expect(edge1.weight).toBe(0);
  });
});
