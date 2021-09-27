class Model {
  constructor() {
    this.toDoList = [];
  }

  addTodo(value) {
    this.toDoList.push(value);
  }
  deleteTodo(value) {
    var i = 0;
    while (i < this.toDoList.length) {
      if (this.toDoList[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
  }
}
export default Model;