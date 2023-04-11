class ArrayConsturctor {
  newArray = [];
  maxArrLenght = 0;
  index = 0;
  constructor(elements, length) {
    this.newArray = elements;
    this.maxArrLenght = length;
  }
  push(el) {
    if (this.newArray.length < this.maxArrLenght) {
      this.newArray[this.newArray.length] = el;
    } else {
      this.newArray[this.index] = el;
      this.index++;
    }
    console.log("ok");
    return this.newArray;
  }
  pop() {
    console.log(this.newArray[this.newArray.length - 1]);
    this.newArray.length = this.newArray.length - 1;
    return this.newArray;
  }
  size() {
    return this.newArray.length;
  }
  front() {
    console.log(this.newArray[0]);
    return this.newArray[0];
  }
  view() {
    if (this.newArray.length < 0) {
      return console.log("очередь пустая");
    }
    this.newArray.forEach((element) => {
      console.log(element);
    });
  }
  clear() {
    this.newArray.length = 0;
    console.log("ok");
    return this.newArray;
  }
}
class MyArray extends ArrayConsturctor {}
let arr = new MyArray([], 5);
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.pop();
arr.push(4);
arr.front();
arr.size();
arr.view();
arr.clear();
arr.view();

class KnightConstucotr {
  newArray = [];
  middle = 0;
  stack = [];

  constructor(arr) {
    this.newArray = arr;
  }

  push(priority, number) {
    if (priority === "!") {
      this.newArray.unshift(number);
      return;
    }
    if (priority === "+") {
      this.middle = Math.ceil(this.newArray.length / 2);
      let pastInsertElements = this.newArray.splice(this.middle);
      this.newArray[this.middle] = number;
      this.newArray = this.newArray.concat(pastInsertElements);
      return;
    }

    this.newArray.push(number);
  }

  fight() {
    if (this.newArray.length < 0) {
      return console.log("очередь пустая");
    }
    this.stack.push(this.newArray.shift());
    console.log(this.stack.pop());
  }
  view() {
    if (this.newArray.length < 0) {
      return console.log("очередь пустая");
    }
    console.log(this.newArray);
  }
}

let arrKnighst = new KnightConstucotr([]);
arrKnighst.push("+", 1);
arrKnighst.push("*", 3);
arrKnighst.push("!", 4);
arrKnighst.push("+", 2);
arrKnighst.view();
arrKnighst.push("+", 6);
arrKnighst.push("+", 5);
arrKnighst.view();
arrKnighst.fight();
arrKnighst.fight();
arrKnighst.fight();
arrKnighst.fight();
