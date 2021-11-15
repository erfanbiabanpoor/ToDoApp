const todoInput = document.querySelector(".input");
const todoButton = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "complete";
  completeBtn.classList.add("complete-btn");
  todoDiv.appendChild(completeBtn);
  todoList.appendChild(todoDiv);
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "delete";
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);
  todoList.appendChild(todoDiv);
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "edit";
  editBtn.classList.add("edit-btn");
  todoDiv.appendChild(editBtn);
  todoList.appendChild(todoDiv);
  editBtn.onclick = function () {
    editTodo(newTodo);
  };
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "active":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
          console.log(todo);
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
function editTodo(e) {
  const editValue = prompt("edit the select item", e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
}
