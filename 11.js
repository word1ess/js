class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(value) {
    if (!this.vertices[value]) {
      this.vertices[value] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (!(vertex1 in this.vertices) || !(vertex2 in this.vertices)) {
      throw new Error("В графе нет таких вершин");
    }

    if (!this.vertices[vertex1].includes(vertex2)) {
      this.vertices[vertex1].push(vertex2);
    }
    if (!this.vertices[vertex2].includes(vertex1)) {
      this.vertices[vertex2].push(vertex1);
    }
  }

  dfs(startVertex, callback) {
    let list = this.vertices; // список смежности
    let stack = [startVertex]; // стек вершин для перебора
    let visited = { [startVertex]: 1 }; // посещенные вершины

    function handleVertex(vertex) {
      // вызываем коллбэк для посещенной вершины
      callback(vertex);

      // получаем список смежных вершин
      let reversedNeighboursList = [...list[vertex]].reverse();

      reversedNeighboursList.forEach((neighbour) => {
        if (!visited[neighbour]) {
          // отмечаем вершину как посещенную
          visited[neighbour] = 1;
          // добавляем в стек
          stack.push(neighbour);
        }
      });
    }

    // перебираем вершины из стека, пока он не опустеет
    while (stack.length) {
      let activeVertex = stack.pop();
      handleVertex(activeVertex);
    }

    // проверка на изолированные фрагменты
    stack = Object.keys(this.vertices);

    while (stack.length) {
      let activeVertex = stack.pop();
      if (!visited[activeVertex]) {
        visited[activeVertex] = 1;
        handleVertex(activeVertex);
      }
    }
  }

  bfs(startVertex, callback) {
    let list = this.vertices; // список смежности
    let queue = [startVertex]; // очередь вершин для перебора
    let visited = { [startVertex]: 1 }; // посещенные вершины

    function handleVertex(vertex) {
      // вызываем коллбэк для посещенной вершины
      callback(vertex);

      // получаем список смежных вершин
      let neighboursList = list[vertex];

      neighboursList.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = 1;
          queue.push(neighbour);
        }
      });
    }

    // перебираем вершины из очереди, пока она не опустеет
    while (queue.length) {
      let activeVertex = queue.shift();
      handleVertex(activeVertex);
    }

    queue = Object.keys(this.vertices);

    // Повторяем цикл для незатронутых вершин
    while (queue.length) {
      let activeVertex = queue.shift();
      if (!visited[activeVertex]) {
        visited[activeVertex] = 1;
        handleVertex(activeVertex);
      }
    }
  }
}
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("A", "F");
graph.addEdge("F", "G");
graph.dfs("A", (v) => console.log(v));
graph.bfs("A", (v) => console.log(v));

let first_number = 0;
let last_number = 0;
let previous = defaultdict(set);
let modifications = first_number.Object.keyValues;

previous[first_number] = set();
const distances = { first_number: 0 };
while (last_number != distances) {
  let cur_number = modifications.unshift();
  let next_number = 0;
  if (cur_number) {
    next_number = cur_number + 1000;
    previous[next_number].push(cur_number);
    if (next_number != distances) {
      distances[next_number] = distances[cur_number] + 1;
      modifications.push(next_number);
    }
  } // 1000 != 9:

  if (cur_number % 10 != 1) {
    next_number = cur_number - 1;
    previous[next_number].push(cur_number);
    if (next_number != distances) {
      distances[next_number] = distances[cur_number] + 1;
      modifications.push(next_number);
    }
  }

  next_number = int(str(cur_number)[1] + str(cur_number)[0]);
  previous[next_number].push(cur_number);
  if (next_number != distances) {
    distances[next_number] = distances[cur_number] + 1;
    modifications.push(next_number);
  }
  next_number = int(str(cur_number)[-1] + str(cur_number)[3]);
  previous[next_number].push(cur_number);
  if (next_number != distances) {
    distances[next_number] = distances[cur_number] + 1;
    modifications.push(next_number);
  }

  let path = [last_number];

  cur_number = last_number;
}
while (cur_number != first_number) {
  for (let i = 0; i < previous.lenght; i++) {
    if (distances[cur_number] - distances[number] == 1) {
      path.push(number);
      cur_number = number;
    }
  }
}
for (let i = 0; i < path.lenght; i++) {
  console.log(path[i]);
}
