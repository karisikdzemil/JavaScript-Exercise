const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskTime = document.getElementById("taskTime");
const taskPriority = document.getElementById("taskPriority");
const taskForm = document.getElementById("taskForm");
const btn = document.querySelector(".btn");
const ulHigh = document.querySelector("#high");
const ulOther = document.querySelector("#other");



class Task{
    constructor(title, desc, time, priority){
        this.title = title;
        this.desc = desc;
        this.time = time;
        this.priority = priority
    }
}

class TaskList{
    constructor(obj){
        this.obj = obj;
    }
    render(){
        
            const li = document.createElement("li");
            li.innerHTML = `
                        <h2>${this.obj.title}</h1>
                        <p>${this.obj.desc}</p>
                        <h3>${this.obj.time}</h2>
                        <p>${this.obj.priority}</p>
                        <button>Edit</button>
            `;
            console.log(this.obj.priority)
        if(this.obj.priority === "high"){
            ulHigh.prepend(li)
        }else if(this.obj.priority === "medium"){
            ulOther.prepend(li)
        }else if(this.obj.priority === "low"){
            ulOther.append(li)
        }
           
    }
}

btn.addEventListener("click", (event)=>{
const task = new Task(taskTitle.value, taskDescription.value, taskTime.value, taskPriority.value);
    event.preventDefault();
    task.title === '' || task.desc === '' || task.time === '' ? alert("You must enter all fields!") : new TaskList(task).render();
})