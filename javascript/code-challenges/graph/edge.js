/* eslint-disable quotes */
"use strict";

class edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
  includes(val) {
    return this.vertex.value === val;
  }
}
module.exports = edge;
