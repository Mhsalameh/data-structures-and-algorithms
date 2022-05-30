/* eslint-disable quotes */
const Vertex = require("../vertex");

describe("testing Vertex", () => {
  it("testing adding new Vertex", () => {
    const vertex = new Vertex("A");
    expect(vertex.value).toBe("A");
    expect(vertex).toBeInstanceOf(Vertex);
  });
});
