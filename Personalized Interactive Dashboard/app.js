const note = document.getElementById("note");
const noteBtn = document.querySelector("#notes-form button");
const noteList = document.getElementById("notes-list");

    


noteBtn.addEventListener('click', (event) => {
    event.preventDefault()
    if(note.value === ''){
        return;
    }
    const li = document.createElement("li");
    const button = document.createElement("button");
    li.classList.add("notes-li");
    button.textContent = "X";
    li.textContent = note.value;
    li.append(button);
    noteList.append(li);
    note.value = '';
})

noteList.addEventListener("click", (event)=>{
    if(event.target.tagName === "BUTTON"){
        const li = event.target.closest("li");
        li.remove()
    }
})