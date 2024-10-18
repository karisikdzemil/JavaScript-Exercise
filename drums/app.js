const btns = document.querySelectorAll("button");

btns.forEach((el)=>{
    el.addEventListener("click", (event)=>{
        console.log(event.target.textContent);
    })
    console.log(el)
})