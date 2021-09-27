class Controller {
  AddTask(entry) {
    Model.addTodo(entry);
  }
  editTask(listItem) {
    let editTask = function () {
      console.log("Edit Task...");
      console.log("Change 'edit' to 'save'");

      let editInput = listItem.querySelector("input[type=text]");
      let label = listItem.querySelector("label");
      let containsClass = listItem.classList.contains("editMode");

      if (containsClass) {
        label.innerText = editInput.value;
      } else {
        editInput.value = label.innerText;
      }
      listItem.classList.toggle("editMode");
    };
  }
  DeleteTask(listItem) {
    let deleteTask = function () {
      console.log("Delete Task...");
      deleteTask();
    };
  }
  TaskStatusChange(listItem) {
    let taskCompleted = function () {
      console.log("Complete Task...");
      completedTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskIncomplete);
    };
    let taskIncomplete = function () {
      console.log("Incomplete Task...");
      incompleteTaskHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
    };
    let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
      console.log("bind list item events");
      let checkBox = taskListItem.querySelector("input[type=checkbox]");
      let editButton = taskListItem.querySelector("button.edit");
      let deleteButton = taskListItem.querySelector("button.delete");

      editButton.onclick = editTask;
      deleteButton.onclick = deleteTask;
      checkBox.onchange = checkBoxEventHandler;
    };
    for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
      bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
    }
    for (let i = 0; i < completedTasksHolder.children.length; i++) {
      bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    }
  }
}
export default Controller;