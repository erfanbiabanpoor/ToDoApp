function check() {
  let item = document.getElementById("input").value;
  if (item == "" || isNaN(item) !== true) {
    alert(" input your task ");
  }
}
let input = document.getElementById("button");
input.addEventListener("click", addtask);
function addtask() {
  let item = document.getElementById("input").value;
  let li = document.createElement("li");
  let text = document.createTextNode(item);
  li.appendChild(text);
  let ul = document.getElementById("list");
  ul.appendChild(li);
}
function renderPage() {
  const TodoList = document.getElementById(".list");
  TodoList.innerHTML = "";
  const filteredDataBase = taskDataBase.filter((task) => {
    let status;
    switch (status) {
      case "all": {
        filterDefault.textContent = "All";
        return true;
      }
      case "completed": {
        filterDefault.textContent = "Completed";
        if (task.completeStatus) {
          return true;
        } else {
          return false;
        }
      }
      case "active": {
        filterDefault.textContent = "Active";
        if (!task.completeStatus) {
          return true;
        } else {
          return false;
        }
      }
    }
  });
}
function createButton(Task) {
  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");
  const completeButton = document.createElement("button");

  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.classList.add("delete-btn");
  Task.appendChild(deleteButton);
  deleteButton.addEventListener("click", (event) => {
    deleteTask(event);
  });

  editButton.appendChild(document.createTextNode("Edit"));
  editButton.classList.add("edit-btn");
  Task.appendChild(editButton);
  editButton.addEventListener("click", (event) => {
    editTask(event);
  });

  completeButton.appendChild(document.createTextNode("Complete"));
  completeButton.classList.add("complete-btn");
  completeButton.addEventListener("click", (event) => {
    completeTask(event);
  });
  Task.appendChild(completeButton);
}
function editTask(event) {
  event.preventDefault();
  const editButton = event.target;
  const li = editButton.parentElement;

  for (let task of taskDataBase) {
    task.edit = !task.edit;
    task.text = li.childNodes[0].nodeValue;
    break;
  }
}
renderPage();

function deleteTask(event) {
  event.preventDefault();
  const deleteButton = event.target;
  const li = deleteButton.parentElement;

  taskDataBase = taskDataBase.filter((task) => {});
  renderPage();
}

function completeTask(event) {
  event.preventDefault();
  const completeButton = event.target;
  const li = completeButton.parentElement;

  for (let task of taskDataBase) {
    task.completeStatus = !task.completeStatus;
    break;
  }
}
renderPage();

function filterTask() {
  const filterElement = document.getElementsByClassName("default")[0];
  const filterELChild = filterElement.value.toLowerCase();
  let status;
  status = filterELChild;

  localStorage.setItem("Status", status);
  renderPage();
}

renderPage();
