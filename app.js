function countOfNumberMatches(firstArr, secondArr) {
  let countMatches = firstArr.map((el) => {
    return secondArr.reduce(function (count, word) {
      return word === el ? ++count : count;
    }, 0);
  });
  return countMatches;
}
console.log(
  countOfNumberMatches([0, 1, 2, 3, 4, 5, 6, 7], [1, 2, 1, 1, 4, 5, 6, 7])
);

function countOfSubstrings(str) {
  // Через регулярное выражение
  let firstLetter = str[0];
  let regExp = firstLetter;
  for (let i = 1; i < str.length; i++) {
    if (firstLetter !== str[i]) {
      regExp += str[i];
    } else {
      break;
    }
  }
  let arr = str.split(regExp);
  console.log(arr.length - 1, `${regExp}`);
}
countOfSubstrings("abcdabcdabcdabcd");

function countOfPlitka(count, color, arr) {
  let arr1 = arr;
  let arrReverse = arr.reverse();

  let newArr = arr1.concat(arrReverse);

  return newArr;
}

console.log(countOfPlitka(0, 1, [1, 1, 2, 1, 3]));
