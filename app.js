model = { items: [] };

view = {
  status: "all",

  clearList: function () {
    let range = document.createRange();
    range.selectNodeContents(document.getElementById("list"));
    range.deleteContents();
  },

  render: function (modalItems) {
    this.clearList();

    if (modalItems.length != 0) {
      list = document.getElementById("list");

      for (let i = modalItems.length - 1; i >= 0; i--) {
        item = document.createElement("li");
        span = document.createElement("span");
        check = document.createElement("a");
        cross = document.createElement("a");
        edit = document.createElement("a");
        iconCheck = document.createElement("i");
        iconCross = document.createElement("i");
        iconEdit = document.createElement("i");

        item.className = "item";
        span.className = "item-text";
        check.className = "item-complete";
        cross.className = "item-delete";
        edit.className = "item-edit";
        check.innerHTML = "complete";
        cross.innerHTML = "delete";
        edit.innerHTML = "edit";

        span.textContent = modalItems[i].text;

        if (modalItems[i].completed) {
          span.setAttribute(
            "style",
            "text-decoration: line-through; color: #bbb"
          );
        }

        if (modalItems[i].edit) {
          span.contentEditable = "true";
        }

        iconCheck.setAttribute("class", "complete");
        iconCheck.setAttribute("data-id", i);
        iconCross.setAttribute("class", "delete");
        iconCross.setAttribute("data-id", i);
        iconEdit.setAttribute("data-id", i);
        iconEdit.setAttribute("class", "edit");

        check.setAttribute("onclick", "controller.completeItem('" + i + "')");
        cross.setAttribute("onclick", "controller.deleteItem('" + i + "')");

        edit.addEventListener("click", (event) => {
          controller.editItem(i, event.target);
        });
        check.appendChild(iconCheck);
        cross.appendChild(iconCross);
        edit.appendChild(iconEdit);
        item.appendChild(span);
        item.appendChild(check);
        item.appendChild(cross);
        item.appendChild(edit);
        list.appendChild(item);
      }
    }
  },

  filterItem: function (e) {
    if (e === "all") {
      this.status = "all";
    }

    if (e === "completed") {
      this.status = "completed";
    }

    if (e === "active") {
      this.status = "active";
    }

    controller.filterItem(this.status);
  },

  addItem: function () {
    if (
      document.getElementById("add-item").value != "" &&
      document.getElementById("add-item").value != " "
    ) {
      item = document.getElementById("add-item").value;
      controller.addItem(item);
      return false;
    }
  },
};

controller = {
  init: function () {
    view.render();
  },

  addItem: function (item) {
    list_item = { text: item, completed: false, edit: false };
    model.items.push(list_item);
    document.getElementById("add-item").value = "";
    view.render(model.items);
  },

  completeItem: function (item_index) {
    model.items[item_index].completed = !model.items[item_index].completed;
    view.render(model.items);
  },

  deleteItem: function (item_index) {
    model.items.splice(item_index, 1);
    view.render(model.items);
  },

  editItem: function (item_index, editbutton) {
    let spantext = editbutton.parentElement.children[0].textContent;
    model.items[item_index].edit = !model.items[item_index].edit;
    model.items[item_index].text = spantext;
    view.render(model.items);
  },

  filterItem: function (status) {
    let filteredItems = model.items.filter((items) => {
      switch (status) {
        case "all":
          return true;
          break;

        case "completed":
          if (items.completed) {
            return true;
          } else {
            return false;
          }
          break;
        case "active":
          if (!items.completed) {
            return true;
          } else {
            return false;
          }
          break;
      }
    });

    view.render(filteredItems);
  },
};

controller.init();
