class View {
  constructor() {
    let taskInput = document.getElementById("new-task");
    let addButton = document.getElementsByTagName("button")[0];
    let incompleteTaskHolder = document.getElementById("incomplete-tasks");
    let completedTasksHolder = document.getElementById("completed-tasks");
  }
  AddTask(TaskTitle) {
    let createNewTaskElement = function (TaskTitle) {
      let listItem = document.createElement("li");

      let checkBox = document.createElement("input");

      let label = document.createElement("label");

      let editInput = document.createElement("input");

      let editButton = document.createElement("button");

      let deleteButton = document.createElement("button");

      label.innerText = TaskTitle;

      checkBox.type = "checkbox";
      editInput.type = "text";

      editButton.innerText = "Edit";
      editButton.className = "edit";
      deleteButton.innerText = "Delete";
      deleteButton.className = "delete";

      listItem.appendChild(checkBox);
      listItem.appendChild(label);
      listItem.appendChild(editInput);
      listItem.appendChild(editButton);
      listItem.appendChild(deleteButton);
      AddTask(entry);
      return listItem;
    };
  }
  AddTask = (AddTask) => {
    this.addButton.addEventListener("click", (event) => {
      event.preventDefault();
      if (this.inputValue.value == "") alert("Your Input is Empty");
      else {
        AddTask(this.taskInput.value);
      }
      this.inputValue.value = "";
    });
  };

  editTask = (editTask) => {
    this.addButton.addEventListener("click", (event) => {
      event.preventDefault();
      let listItem = this.parentNode;
      editTask(listItem);
      let listItem1 = this.parentNode;
      TaskStatusChange(listItem1);
      this.inputValue.value = "";
    });
  };

  DeleteTask = (DeleteTask) => {
    this.addButton.addEventListener("click", (event) => {
      event.preventDefault();
      let listItem = this.parentNode;
      let ul = listItem.parentNode;
      ul.removeChild(listItem);
      DeleteTask(listItem);
      this.inputValue.value = "";
    });
  };
}
export default View;