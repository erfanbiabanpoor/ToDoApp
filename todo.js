    function check() {
        let item = document.getElementById("input").value;
        if(item == "" || isNaN(item) !== true){
            alert(" input your task ")
        }
    } 
    
    let input = document.getElementById("button");
    input.addEventListener("click",addtask);

        function addtask() {
            let item = document.getElementById("input").value;
            let lst = document.createElement("lst");
            let text = document.createTextNode(item);
            lst.appendChild(text);
            let ul = document.getElementById('list');
            ul.appendChild(lst);
        }