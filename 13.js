class TrieNode {
  parent = null;
  children = {};
  end = false;

  constructor(key) {
    this.values = key;
  }

  getWord() {
    let output = [];
    let node = this;

    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }

    return output.join("");
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new TrieNode(word[i]);
        node.children[word[i]].parent = node;
      }
      node = node.children[word[i]];
      if (i == word.length - 1) {
        node.end = true;
      }
    }
  }
  contains(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
        return false;
      }
    }
    return node.end;
  }
  find(prefix) {
    let node = this.root;
    let output = [];

    for (let i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        return output;
      }
    }

    findAllWords(node, output);

    return output;
  }

  findAllWords = (node, arr) => {
    if (node.end) {
      arr.unshift(node.getWord());
    }

    for (let child in node.children) {
      findAllWords(node.children[child], arr);
    }
  };

  remove(word) {
    let root = this.root;

    if (!word) return;

    const removeWord = (node, word) => {
      if (node.end && node.getWord() === word) {
        let hasChildren = Object.keys(node.children).length > 0;

        if (hasChildren) {
          node.end = false;
        } else {
          node.parent.children = {};
        }

        return true;
      }

      for (let key in node.children) {
        removeWord(node.children[key], word);
      }

      return false;
    };
  }
}

let search_terms = [
  "apple",
  "apple watch",
  "apple macbook",
  "apple macbook pro",
  "iphone",
  "iphone 12",
];

function autocompleteMatch(input) {
  if (input == "") {
    return [];
  }
  let reg = new RegExp(input);
  return search_terms.filter(function (term) {
    if (term.match(reg)) {
      return term;
    }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = "";
  let list = "";
  let terms = autocompleteMatch(val);
  for (i = 0; i < terms.length; i++) {
    list += "<li>" + terms[i] + "</li>";
  }
  res.innerHTML = "<ul>" + list + "</ul>";
}
