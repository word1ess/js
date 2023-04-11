function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    if (j === 3) {
      console.log(arr);
    }
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i;
    if (i === Math.round(arr.length / 2)) {
      console.log(arr);
    }
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;

    if (i === Math.round(l / 2)) {
      console.log(arr);
    }
    for (let j = i + 1; j < l; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
}

console.log(bubbleSort([6, 4, 3, 5, 1, 3]));
console.log(insertionSort([10, 10, 2, 5, 1]));
console.log(selectionSort([6, 4, 3, 5, 1, 3]));
