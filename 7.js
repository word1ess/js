let lastLengthOfArrs = 0;
let arrBrs = [];
function randomBrs(lenghtOfArr, maxNum, minNum, arr) {
  if (arr.length === lenghtOfArr) {
    console.log(arr);
    lastLengthOfArrs++;
    arr.pop();
    return randomBrs(lenghtOfArr, maxNum, minNum, arr);
  }
  for (let i = maxNum; i >= minNum; maxNum--) {
    arr.push(i);
    console.log(arr);
    return randomBrs(lenghtOfArr, maxNum - 1, minNum, arr);
  }
}

console.log(randomBrs(3, 39, 36, arrBrs));

class studentInRestoran {
  stack = {};
  countOfDishes = 0;
  studentsMoney = 0;
  constructor(price, colories) {
    this.stack[Object.keys(this.stack).length + 1] = { price, colories };
  }
  set count(value) {
    this.countOfDishes = value;
  }
  set money(value) {
    this.studentsMoney = value;
  }
  get dishes() {
    return this.stack;
  }
  get studentsMoney() {
    return this.studentsMoney;
  }

  pushToDishes(price, colories) {
    this.stack[Object.keys(this.stack).length + 1] = { price, colories };
  }
}
const newRestoraount = new studentInRestoran(100, 500);
newRestoraount.pushToDishes(50, 250);
newRestoraount.pushToDishes(50, 250);
newRestoraount.pushToDishes(50, 250);
newRestoraount.pushToDishes(50, 250);
newRestoraount.money = 100;
newRestoraount.count = 5;
let dishes = newRestoraount.dishes;
function countMaxColories(dishes, index) {
  if (newRestoraount.studentsMoney <= 0) {
    return [countSelectedDishes, priceSelectedDishes];
  } else {
    countSelectedDishes++;
    priceSelectedDishes += dishes[index].price;
    newRestoraount.money =
      newRestoraount.studentsMoney - parseInt(dishes[index].price);
    return countMaxColories(
      dishes,
      index,
      countSelectedDishes,
      priceSelectedDishes
    );
  }
}
for (let index = 1; index <= Object.keys(newRestoraount).length + 1; index++) {
  let countSelectedDishes = 0;
  let priceSelectedDishes = 0;
  let coloriesSelectedDishes = 0;
  let indexOfSelectedDishes = [];
  console.log(
    countMaxColories(
      dishes,
      index,
      countSelectedDishes,
      priceSelectedDishes,
      coloriesSelectedDishes,
      indexOfSelectedDishes
    ),
    indexOfSelectedDishes
  );
}
function countMaxColories(dishes, index, count, price, colories, arr) {
  if (newRestoraount.studentsMoney <= 0) {
    newRestoraount.money = 100;
    newRestoraount.count = 5;
    return [count, colories];
  } else {
    count++;
    price += dishes[index].price;
    colories += dishes[index].colories;
    arr.push(index);
    newRestoraount.money =
      newRestoraount.studentsMoney - parseInt(dishes[index].price);
    return countMaxColories(dishes, index + 1, count, price, colories, arr);
  }
}
