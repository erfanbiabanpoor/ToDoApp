model = { items: [] };

view = {
  clearList: function () {
    let range = document.createRange();
    range.selectNodeContents(document.getElementById("list"));
    range.deleteContents();
  },

  render: function () {
    this.clearList();

    if (model.items.length != 0) {
      list = document.getElementById("list");

      for (let i = model.items.length - 1; i >= 0; i--) {
        console.log(model.items[i]);

        item = document.createElement("li");
        span = document.createElement("span");
        check = document.createElement("a");
        cross = document.createElement("a");
        iconCheck = document.createElement("i");
        iconCross = document.createElement("i");

        item.className = "item";
        span.className = "item-text";
        check.className = "item-complete";
        cross.className = "item-delete";

        span.textContent = model.items[i].text;

        if (model.items[i].completed) {
          span.setAttribute(
            "style",
            "text-decoration: line-through; color: #bbb"
          );
        }

        iconCheck.setAttribute("class", "icon ion-md-checkmark");
        iconCheck.setAttribute("data-id", i);
        iconCross.setAttribute("class", "icon ion-md-trash");
        iconCross.setAttribute("data-id", i);

        check.setAttribute("onclick", "controller.completeItem('" + i + "')");
        cross.setAttribute("onclick", "controller.deleteItem('" + i + "')");

        check.appendChild(iconCheck);
        cross.appendChild(iconCross);
        item.appendChild(span);
        item.appendChild(check);
        item.appendChild(cross);
        list.appendChild(item);
      }
    }
  },

  addItem: function (e) {
    if (e.code == "Enter" || e.code == "NumpadEnter") {
      if (
        document.getElementById("add-item").value != "" &&
        document.getElementById("add-item").value != " "
      ) {
        item = document.getElementById("add-item").value;
        controller.addItem(item);
        return false;
      }
    }
  },
};

controller = {
  init: function () {
    view.render();
  },

  addItem: function (item) {
    list_item = { text: item, completed: false };
    model.items.push(list_item);
    console.log(list_item);
    document.getElementById("add-item").value = "";
    view.render();
  },

  completeItem: function (item_index) {
    model.items[item_index].completed = !model.items[item_index].completed;
    console.log(model.items[item_index].completed);
    view.render();
  },

  deleteItem: function (item_index) {
    model.items.splice(item_index, 1);
    view.render();
  },
};

controller.init();
