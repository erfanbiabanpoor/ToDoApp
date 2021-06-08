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
            let li = document.createElement("li");
            let text = document.createTextNode(item);
            li.appendChild(text);
            let ul = document.getElementById('list');
            ul.appendChild(li);
        }