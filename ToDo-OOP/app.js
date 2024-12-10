const input = document.querySelector('input');
const inputBtn = document.getElementById('add-btn');
const ul = document.querySelector("ul");
const allButtons = document.getElementsByClassName("li-but");
const allLi = document.querySelectorAll("li");

class ToDo{
    
    constructor(){
        this.arr = [];
        this.deleteTodo();
    }

    getValue(){
        if(input.value === ''){
            alert("Please enter value!");
        }else{
            const value = input.value;
            this.arr.push(value);
            console.log(this.arr);
        }
        input.value = '';;
        this.renderItems();
        this.arr = [];
        this.deleteTodo();
    }

    renderItems(){
        this.arr.map((el)=>{
            const li = document.createElement("li");
            const liBtn = document.createElement("button");
            li.innerText = el;
            liBtn.className = "li-but";
            liBtn.innerText = "delete";
            li.appendChild(liBtn);
            ul.appendChild(li);
        })
    }
    deleteTodo() {
        for (const but of allButtons) {
            but.addEventListener("click", () => {
                const removedEl = but.closest("li"); 
                if (removedEl) {
                    removedEl.remove();
                }
            });
        }
    }
    
}
let todo = new ToDo();
inputBtn.addEventListener("click", todo.getValue.bind(todo));



