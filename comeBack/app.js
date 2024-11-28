const input = document.getElementById("input");
const inputBtn = document.getElementById("addTodo-btn");
const ul = document.getElementById("ul");

inputBtn.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("Not valid data!");
    }else{
        let newLi = document.createElement("li");
        newLi.innerHTML = `${input.value} <button class="li-btn">clear</button>`;
        ul.append(newLi)
    }
})


ul.addEventListener("click", (event) => {
    if (event.target.classList.contains("li-btn")) { 
        const liElement = event.target.closest("li"); 
        console.log(liElement);
    }
});

