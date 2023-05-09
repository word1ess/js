class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }
  find(currentValue) {
    let currentRoot = this.root;
    while (currentRoot.value != currentValue) {
      if (currentRoot.value > currentValue) {
        currentRoot = currentRoot.left;
      } else {
        currentRoot = currentRoot.right;
      }
      if (!currentRoot) {
        return console.error("ТАкого числа нет!");
      }
    }
    return currentRoot;
  }
  next(currentValue) {
    let currentNode = this.find(currentValue);

    if (currentNode.left) {
      return currentNode.left.value;
    } else if (currentNode.right) {
      return currentNode.right.value;
    } else {
      return console.error("Следующего числа нет!");
    }
  }

  delete(currentValue) {
    let currentNode = this.find(currentValue);
    delete this.root.currentNode;
    return this.root;
  }
}

const myTree = new BinaryTree();
myTree.add(15);
myTree.add(1);
myTree.add(13);
myTree.add(10);
myTree.add(3);
myTree.add(4);
myTree.add(16);

console.log(myTree);
// console.log(myTree.find(15));
// console.log(myTree.next(1));
console.log(myTree.delete(1));
