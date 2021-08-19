class Controller{
    constructor(Model,View){
        this.model=Model;
        this.view=View;
        this.view.eventListener((value)=>{
            if (value==="") return alert("Invalid Input !!");
            this.model.addTodo(value);
        })
    }
}
export default Controller;