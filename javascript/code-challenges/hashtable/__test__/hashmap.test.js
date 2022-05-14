"use strict";

const HashMap = require("../hashmap");
const LinkedList = require("../ll");

describe("testing hashmap", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "error").mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("testing creating new hashmap", () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01).toBeInstanceOf(HashMap);
    expect(hashmap01.size).toBe(3);
    expect(hashmap01.map.length).toBe(3);
  });

  it("testing hash(key) method (getting the index right)", () => {
    const hashmap01 = new HashMap(3);
    let idx = hashmap01.hash("dog");
    expect(idx).toBe(1);
  });

  it("testing set method", () => {
    const hashmap01 = new HashMap(3);
    hashmap01.set("cat", "animal");
    let idx = hashmap01.hash("cat");
    expect(hashmap01.map[idx]).toBeInstanceOf(LinkedList);
    expect(hashmap01.map[idx].head.value).toStrictEqual({ cat: "animal" });
  });

  it("testing constains method", () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.contains("cat")).toBeFalsy();
    hashmap01.set("cat", "animal");
    hashmap01.set("ahmad", "human");
    hashmap01.set("door", "object");
    expect(hashmap01.contains("table")).toBeFalsy();
    expect(hashmap01.contains("cat")).toBeTruthy();
  });

  it("testing get method", () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.get("cat")).toStrictEqual(null);
    expect(hashmap01.get("ahmad")).toStrictEqual(null);
    expect(hashmap01.get("door")).toStrictEqual(null);
    expect(hashmap01.get("bed")).toStrictEqual(null);
    hashmap01.set("cat", "animal");
    expect(hashmap01.get("ahmad")).toStrictEqual(null);
    hashmap01.set("ahmad", "human");
    expect(hashmap01.get("door")).toStrictEqual(null);
    hashmap01.set("door", "object");
    expect(hashmap01.get("bed")).toStrictEqual(null);
    hashmap01.set("bed", "object");
    expect(hashmap01.get("cat")).toStrictEqual("animal");
    expect(hashmap01.get("ahmad")).toStrictEqual("human");
    expect(hashmap01.get("door")).toStrictEqual("object");
    expect(hashmap01.get("bed")).toStrictEqual("object");
  });

  it("testing keys method", () => {
    const hashmap01 = new HashMap(3);
    expect(hashmap01.keys()).toBeNull();
  });
});
