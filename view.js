class View {
    
    constructor(){
        
        this.btnAdd = document.getElementById("add");
        this.inputValue = document.getElementById("input");
        this.list = document.getElementById("list");
        this.filter = document.querySelector(".todos"); 
        this.delete = document.getElementById("remove");
        this.edit = document.getElementById("edit");
        this.done = document.getElementById("done");
        addTodo();

    }
    
   

}
export default View;
