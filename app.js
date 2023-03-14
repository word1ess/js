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
  let newArr = arr;
  let countArr = [];
  let substring = arr.join("");
  let regExp = arr.join("");
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  newArr = newArr.join("");

  for (let i = 0; count <= substring.length; i++) {
    substring = newArr.substring(0, newArr.length / 2 - i);
    substring += newArr.substring(newArr.length / 2 + i, newArr.length);

    console.log(substring, substring.length, regExp);

    if (substring.includes(regExp)) {
      countArr.push(substring.length / 2);
    }
  }

  return countArr;
}

console.log(countOfPlitka(6, 2, [1, 1, 2, 2, 1, 1]));
