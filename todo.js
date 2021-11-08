let newTask = document.querySelector("#new-task");
let addTaskBtn = document.querySelector("#addTask");
let toDoUl = document.querySelector(".todo-list ul");
let completeUl = document.querySelector(".complete-list ul");

let createNewTask = function (task) {

  let listItem = document.createElement("li"); 
  let checkBox = document.createElement("input");
  let label = document.createElement("label"); 

  //PULL THE INPUTED TEXT INTO LABEL
  label.innerText = task;

  //ADD PROPERTIES
  checkBox.type = "checkbox";

  //ADD ITEMS TO THE LI
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  //EVERYTHING PUT TOGETHER
  return listItem;
};

let addTask = function () {
  let listItem = createNewTask(newTask.value);
  //ADD THE NEW LIST ITEM TO LIST
  toDoUl.appendChild(listItem);
  //CLEAR THE INPUT
  newTask.value = "";

  //BIND THE NEW LIST ITEM TO THE INCOMPLETE LIST
  bindIncompleteItems(listItem, completeTask);
};

let completeTask = function () {
  //GRAB THE CHECKBOX'S PARENT ELEMENT, THE LI IT'S IN
  let listItem = this.parentNode;

  //CREATE AND INSERT THE DELETE BUTTON
  let deleteBtn = document.createElement("button"); // <button>
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);

  //SELECT THE CHECKBOX FROM THE COMPLETED CHECKBOX AND REMOVE IT
  let checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();

  //PLACE IT INSIDE THE COMPLETED LIST
  completeUl.appendChild(listItem);

  //BIND THE NEW COMPLETED LIST
  bindCompleteItems(listItem, deleteTask);
};

//DELETE TASK FUNCTIONS
let deleteTask = function () {

  let listItem = this.parentNode;
  let ul = listItem.parentNode;

  ul.removeChild(listItem);
};

//A FUNCTION THAT BINDS EACH OF THE ELEMENTS THE INCOMPLETE LIST

let bindIncompleteItems = function (taskItem, checkBoxClick) {

  //BIND THE CHECKBOX TO A VAR
  let checkBox = taskItem.querySelector("input[type=checkbox]");

  //SETUP EVENT LISTENER FOR THE CHECKBOX
  checkBox.onchange = checkBoxClick;
};

//A FUNCTIONM THAT BINDS EACH OF THE ELEMTS IN THE COMPLETE LIST
let bindCompleteItems = function (taskItem, deleteButtonPress) {

  //BIND THE DELETE BUTTON
  let deleteButton = taskItem.querySelector(".delete");

  //WHEN THE DELETE BUTTIN IS PRESSED, RUN THE deleteTask function
  deleteButton.onclick = deleteButtonPress;
};

for (let i = 0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

addTaskBtn.addEventListener("click", addTask);
