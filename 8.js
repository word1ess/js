function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
let items = [4, 2, 6, 5, 3, 9];
let result = quickSort(items);

function kPow(arr, k) {
  let step = 0;
  let prev;

  while (step != k) {
    prev = Math.min(...arr);
    let index = arr.indexOf(prev);
    arr.splice(index, 1);
    step++;
  }

  return prev;
}

let arr = [4, 2, 6, 5, 3, 9];
console.log(kPow(arr, 2));

class bacterias {
  stack = {};
  constructor(min, max) {
    this.stack[Object.keys(this.stack).length + 1] = { min, max };
  }
  get bacteria() {
    return this.stack;
  }
  pushToBacteria(min, max) {
    this.stack[Object.keys(this.stack).length + 1] = { min, max };
  }
}

const newBacterias = new bacterias(-2, 3);
newBacterias.pushToBacteria(0, 3);
newBacterias.pushToBacteria(-1, 0);
newBacterias.pushToBacteria(-1, 3);

function isBacteriaAlive(arrOfTemperaturos) {
  let countLives = [];
  let countOfOneLives = 0;
  arrOfTemperaturos.forEach((t) => {
    for (let i = 1; i < Object.keys(newBacterias.bacteria).length; i++) {
      if (
        t > newBacterias.bacteria[i].min &&
        t < newBacterias.bacteria[i].max
      ) {
        countOfOneLives += 1;
      }
    }
    countLives.push(countOfOneLives);
    countOfOneLives = 0;
  });
  return countLives;
}

console.log(isBacteriaAlive([-3, -2, 0, 1, 2]));
