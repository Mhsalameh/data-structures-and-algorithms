'use strict';

class AnimalShelter {
  constructor() {
    this.storage = [];
    this.front = null;
  }
  enqueue(animal) {
    if (animal.type === 'cat' || animal.type === 'dog') {
      this.storage.push(animal);
      this.front = this.storage[0];
    } else {
      console.log('animal can be either a dog or a cat object.');
    }
  }
  dequeue(pref) {
    let result;
    let index = 0;
    // console.log(this.storage);
    if (!this.front) {
      console.log('exception');
    } else if (pref !== 'cat' && pref !== 'dog') {
      return null;
    } else {
      while (this.storage[index]) {
        result = this.storage[index];
        // console.log(result);
        if (result.type === pref) {
          this.storage.splice(index, 1);
          if (this.storage[0]) {
            this.front = this.storage[0];
          } else {
            this.front = null;
          }
          return result;
        }
        index++;
      }
      console.log(`${pref} is not available`);
    }
  }
}
// let shelter = new AnimalShelter();
// shelter.enqueue({ id: "1", type: "dog" });
// shelter.enqueue({ id: "2", type: "dog" });
// shelter.enqueue({ id: "3", type: "cat" });
// console.log(shelter);
// // let pref1 = shelter.dequeue("dog");
// // console.log({ pref1 });
// let pref2 = shelter.dequeue("cat");
// console.log({ pref2 });
// console.log(shelter);
module.exports = AnimalShelter;
