const { HashMap } = require('../hashtable/hashmap');

function commonTreeValues(treeA, treeB) {
  if (!treeA|| !treeB) {
    return null;
  } else {
    let hashMap = new HashMap();
    let preOrderedA = treeA.preOrder();
    let preOrderedB = treeB.preOrder();
    let intersection = [];
    for (let i = 0; i < preOrderedA.length; i++) {
      hashMap.set(preOrderedA[i], 1);
    }
    for (let i = 0; i < preOrderedB.length; i++) {
      if (hashMap.contains(preOrderedB[i])) {
        intersection.push(preOrderedB[i]);
      }
    }
    return intersection;
  }
}

module.exports = commonTreeValues;
