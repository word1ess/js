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
  count() {
    return this.newArray.length;
  }
}
class MyArray extends ArrayConsturctor {}
let arr = new MyArray([], 5);
arr.push(10);
arr.push(20);
arr.push(30);
arr.push(40);
arr.pop();
arr.count();

function polish(str) {
  let newStr = str.split(" ");
  let stack = [];
  for (let i = 0; i < newStr.length; i++) {
    if (!isNaN(newStr[i]) && isFinite(newStr[i])) {
      stack.push(newStr[i]);
    } else {
      let b = stack.pop();
      let a = stack.pop();
      switch (newStr[i]) {
        case "+":
          stack.push(parseInt(a) + parseInt(b));
          break;
        case "-":
          stack.push(parseInt(a) - parseInt(b));
          break;
        case "*":
          stack.push(parseInt(a) * parseInt(b));
          break;
        case "/":
          stack.push(parseInt(a) / parseInt(b));
          break;
        default:
          break;
      }
    }
  }
  return stack;
}
console.log(polish("5 1 2 + 4 * + 3 -"));
