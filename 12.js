class BH {
  constructor() {
    this.values = [];
  }
  add(element) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent <= current) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
  size() {
    return this.values.length;
  }
  max() {
    return this.values[0];
  }
  min() {
    return this.values[this.values.length - 1];
  }
  delete() {
    return this.values.pop();
  }
}

const tree = new BH();
tree.add(3);
tree.add(4);
tree.add(31);
tree.add(6);

class Thief {
  cakes = {};
  thified = 0;
  constructor(countOfCakes, sizeOfBag) {
    this.countOfCakes = countOfCakes;
    this.sizeOfBag = sizeOfBag;
  }
  addCake(size, price) {
    let amount = price / size;
    this.cakes[amount] = [price, size];
  }
  stealCake() {
    while (this.sizeOfBag >= 0) {
      let keys = Object.keys(this.cakes);
      let numKeys = [];
      keys.forEach((el) => numKeys.push(+el));
      numKeys.sort(function (a, b) {
        return b - a;
      });
      let maxOfAmount = numKeys[0];

      if (this.sizeOfBag < this.cakes[maxOfAmount][1]) {
        return this.thified;
      }

      this.thified += this.cakes[maxOfAmount][0];
      this.sizeOfBag -= this.cakes[maxOfAmount][1];
      delete this.cakes[maxOfAmount];
    }
  }
}
