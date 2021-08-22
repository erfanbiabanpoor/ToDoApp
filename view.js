class View{
    constructor(){
        this.btnAdd = document.getElementById("add");
        this.inputValue = document.getElementById("input");
        this.list = document.getElementById("list");
        this.filter = document.querySelector(".todos"); 
        this.delete = document.getElementById("remove");
        this.edit = document.getElementById("edit");
        this.done = document.getElementById("done");
        this.addTodo();

    }
     addTodo() {
    this.btnAdd.addEventListener("click",(e)=>{
        e.preventDefault();
        const value = this.inputValue.value;
        this.inputValue.value = "";
        this.callBack(value);

    }); 
   }
    delTodo(){
        this.delete.addEventListener("click",(e)=>{
            e.preventDefault();
            
        })
    }
    eventListener (callBack){
        this.callBack = callBack;
    }

}
export default View;