const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskTime = document.getElementById("taskTime");
const taskPriority = document.getElementById("taskPriority");
const taskForm = document.getElementById("taskForm");
const btn = document.querySelector(".btn");
const ulHigh = document.querySelector("#high");
const ulOther = document.querySelector("#other");
const taskContainer = document.getElementById("taskContainer");
const editBtn = document.querySelector(".edit-btn");
const titleOfApp = document.querySelector("h1");



class Task {
  constructor(title, desc, time, priority) {
    this.title = title;
    this.desc = desc;
    this.time = time;
    this.priority = priority;
  }
}

class TaskList {
  constructor(obj) {
    this.obj = obj;
  }
  render() {
    const li = document.createElement("li");
    li.innerHTML = `
                        <h2>${this.obj.title}</h2>
                        <p>${this.obj.desc}</p>
                        <h3>${this.obj.time}</h3>
                        <p>${this.obj.priority}</p>
                        <button>Edit</button>
            `;
    if (this.obj.priority === "high") {
      ulHigh.prepend(li);
    } else if (this.obj.priority === "medium") {
      ulOther.prepend(li);
    } else if (this.obj.priority === "low") {
      ulOther.append(li);
    }
  }
}

class TaskElement{
  constructor(el){
    this.el = el;
  }
  edit(){
    this.el.style.height = "15vh";
    const title = this.el.querySelector("h2").textContent;
    const desc = this.el.querySelector("p:first-of-type").textContent;
    const time = this.el.querySelector("h3").textContent;
    const priority = this.el.querySelector("p:last-of-type").textContent;
    console.log(title, desc, time, priority);

    taskTitle.value = title;
    taskDescription.value = desc;
    taskTime.value = time;
    taskPriority.value = priority;
    titleOfApp.textContent = `Edit your ${title} task!`;
    // editBtn.classList.add("edit-btn-visible");
    this.el.remove()
  }
}

btn.addEventListener("click", (event) => {
  const task = new Task(
    taskTitle.value,
    taskDescription.value,
    taskTime.value,
    taskPriority.value
  );
  event.preventDefault();
  task.title === "" || task.desc === "" || task.time === ""
    ? alert("You must enter all fields!")
    : new TaskList(task).render();
    taskTitle.value = '';
    taskDescription.value = '';
    taskTime.value = '';
    // editBtn.classList.remove("edit-btn-visible");
    titleOfApp.innerText = "Pametni Dnevni Raspored";
});

taskContainer.addEventListener("click", (event) => {  
  if(event.target.tagName === "BUTTON"){
    const el = event.target.closest("LI");
    new TaskElement(el).edit();
  }
})  

editBtn.addEventListener("click", (event) => {
  event.preventDefault();
  taskTitle.value = '';
  taskDescription.value = '';
  taskTime.value = '';
  titleOfApp.innerText = "Pametni Dnevni Raspored";
  // editBtn.classList.remove("edit-btn-visible");
})
