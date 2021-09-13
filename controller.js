class Controller{
    constructor(Model,View){
        this.model=Model;
        this.view=View;
        this.view;
    }

    addTodo() {
        this.btnAdd.addEventListener("click",(e)=>{
            e.preventDefault();
            const value = this.inputValue.value;
            this.inputValue.value = "";
            if (value==="") return alert("Invalid Input !!");
            this.addTodo(value);
        }); 
    } 
}
export default Controller;