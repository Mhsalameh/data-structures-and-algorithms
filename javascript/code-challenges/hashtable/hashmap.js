'use strict';

const LinkedList = require('./ll');
class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    key = typeof key !== 'string' ? key.toString() : key;
    return (
      (key.split('').reduce((acc, char) => {
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
  if (typeof string !== 'string') {
    return console.error('input is not a string');
  }
  let wordsHashMap = new HashMap(10);
  let stringAr = string.split(/\W+/);
  for (let i = 0; i < stringAr.length; i++) {
    if (wordsHashMap.contains(stringAr[i].toLowerCase())) return stringAr[i];
    wordsHashMap.set(stringAr[i].toLowerCase(), 1);
  }
  return console.error('no repeated words found');
}

function leftJoin(hashmap1, hashmap2) {
  let list = [];
  console.log(111111, hashmap1.keys());
  for (let element of hashmap1.keys()) {
    let key = Object.keys(element[0])[0];
    if (hashmap2.contains(key)) {
      list.push([key, hashmap1.get(key), hashmap2.get(key)]);
    } else {
      list.push([key, hashmap1.get(key), null]);
    }
  }
  return list;
}

let hash1 = new HashMap(4);
let hash2 = new HashMap(4);
hash1.set('mohammad', 'k');
hash1.set('khalid', 'k');
hash1.set('mosab', 'k');
hash2.set('mohammad', 'k');
hash2.set('ahmad', 'k');
hash2.set('khalid', 'k');

console.log(leftJoin(hash1, hash2));
module.exports = { HashMap, repeatedWord, leftJoin };
