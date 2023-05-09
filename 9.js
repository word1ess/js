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

const goThief = new Thief(5, 1000);

goThief.addCake(125, 400);
goThief.addCake(500, 1500);
goThief.addCake(25, 100);
goThief.addCake(400, 1300);
goThief.addCake(250, 700);
console.log(goThief.stealCake());

const freqs = (text) =>
  [...text].reduce(
    (letter, count) =>
      letter[count]
        ? ((letter[count] = letter[count] + 1), letter)
        : ((letter[count] = 1), letter),
    {}
  );
const topairs = (freqs) =>
  Object.keys(freqs).map((count) => [count, freqs[count]]);
const sortps = (pairs) => pairs.sort((a, b) => a[1] - b[1]);
const tree = (position) =>
  position.length < 2
    ? position[0]
    : tree(
        sortps(
          [[position.slice(0, 2), position[0][1] + position[1][1]]].concat(
            position.slice(2)
          )
        )
      );
const codes = (tree, prefix = "") =>
  tree[0] instanceof Array
    ? Object.assign(
        codes(tree[0][0], prefix + "0"),
        codes(tree[0][1], prefix + "1")
      )
    : { [tree[0]]: prefix };
const getcodes = (text) => codes(tree(sortps(topairs(freqs(text)))));

let answer = Object.values(getcodes("abbccc")).join("").length;

console.log(answer);

class Gymnasts {
  gymnasts = {};
  constructor(weightCanPush, weightHimSelf) {
    this.gymnasts[weightCanPush + weightHimSelf] = {
      push: weightCanPush,
      self: weightHimSelf,
    };
  }

  add(weightCanPush, weightHimSelf) {
    this.gymnasts[weightCanPush + weightHimSelf] = {
      push: weightCanPush,
      self: weightHimSelf,
    };
  }

  build() {
    let answer = 1;
    let keys = Object.keys(this.gymnasts);
    let numKeys = [];
    keys.forEach((el) => numKeys.push(+el));
    numKeys.sort(function (a, b) {
      return b - a;
    });
    numKeys.pop();
    for (let i = 1; i < numKeys.length; i++) {
      let lastGymnastCan = this.gymnasts[numKeys[i]].push;
      let lastGymnastSelf = this.gymnasts[numKeys[i]].self;
      if (this.gymnasts[numKeys[i]].self < lastGymnastCan) {
        answer += 1;
      }
    }
    return answer;
  }
}

const goBuild = new Gymnasts(60, 62);

goBuild.add(170, 60);
goBuild.add(80, 80);
goBuild.add(40, 65);
goBuild.add(55, 50);
goBuild.add(30, 70);
goBuild.add(45, 62);
goBuild.add(60, 40);
goBuild.add(70, 72);
goBuild.add(92, 80);
console.log(goBuild.build());
