"use strict";

const LinkedList = require("./ll");
class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return (
      (key.split("").reduce((acc, char) => {
        return acc + char.charCodeAt();
      }, 0) *
        599) %
      this.size
    );
  }

  set(key, value) {
    let hashIdx = this.hash(key);
    // console.log({ hashIdx });
    if (!this.map[hashIdx]) {
      this.map[hashIdx] = new LinkedList();
    }
    let entryData = { [key]: value };
    this.map[hashIdx].append(entryData);
  }

  contains(key) {
    let idx = this.hash(key);
    if (!this.map[idx]) {
      return false;
    } else {
      let cur = this.map[idx].head;
      while (cur) {
        if (cur.value[key]) return true;
        cur = cur.next;
      }
      return false;
    }
  }

  get(key) {
    const idx = this.hash(key);
    const items = this.map[idx];
    if (items) {
      let cur = items.head;
      while (cur) {
        if (cur.value[key]) {
          return cur.value[key];
        }
        cur = cur.next;
      }
      return null;
    } else {
      return null;
    }
  }

  keys() {
    let keys = [];
    const items = this.map;
    for (let item of items) {
      if (item) keys.push(item.getVals());
    }
    return items[0] ? keys : null;
  }
}

function repeatedWord(string) {
  if(typeof string!=='string') {
    return console.error('input is not a string');
  }
  let wordsHashMap = new HashMap(10);
  let stringAr = string.split(/\W+/);
  for (let i = 0; i < stringAr.length; i++) {
    if (wordsHashMap.contains(stringAr[i].toLowerCase())) return stringAr[i];
    wordsHashMap.set(stringAr[i].toLowerCase(),1);
  }
  return console.error('no repeated words found');
}
let string =
  "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";

console.log(repeatedWord(string));
module.exports = {HashMap,repeatedWord};
