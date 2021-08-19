class Model{
    constructor() {
        this.toDoList = [];

    }
    addTodo(value){
        this.toDoList.push(value);
        console.log(this.toDoList);
    }
}
export default Model;