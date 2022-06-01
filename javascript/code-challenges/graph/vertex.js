"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
  includes(val) {
    return this.value === val;
  }
}

module.exports = Vertex;
