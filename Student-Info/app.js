const ul = document.querySelector("ul");
students.map((el)=>{
    ul.innerHTML = `<li>${el.name} ${el.surname} -- ${el.index} -- ${el.department}</li>`;
})  