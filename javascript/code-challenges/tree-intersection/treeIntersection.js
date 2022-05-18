const { HashMap } = require("../hashtable/hashmap");

function treeIntersection(treeA, treeB) {
  if (!treeA|| !treeB) {
    return null;
  } else {
    let hashTable1 = new HashMap();
    let preOrderedA = treeA.preOrder();
    let preOrderedB = treeB.preOrder();
    let intersection = [];
    for (let i = 0; i < preOrderedA.length; i++) {
      hashTable1.set(preOrderedA[i], 1);
    }
    for (let i = 0; i < preOrderedB.length; i++) {
      if (hashTable1.contains(preOrderedB[i])) {
        intersection.push(preOrderedB[i]);
      }
    }
    return intersection;
  }
}

module.exports = treeIntersection;
