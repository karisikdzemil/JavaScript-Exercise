const elements = document.getElementById("elements");
const input = document.getElementById("search-input");
const searchInputBtn = document.getElementById("search-input-btn");
showCards();

function showCards(renderArray = shopItems){
    renderArray.map((el)=>{
        const li = document.createElement("li");
        li.className = "card";
        li.innerHTML = `
        <img class="card-img" src="${el.imageUrl}" alt="">
            <h3>${el.name}</h3>
            <p>Cena: ${el.price} RSD</p>`;
            elements.append(li);
    })
}
const filterItemsHandler = () => {
   const searchItem = input.value.toUpperCase().replace(/\s+/g, "");
   console.log(searchItem);
   const filteredArray = shopItems.filter((el) => {
    if(searchItem === el.name.toUpperCase().replace(/\s+/g, "") || searchItem === el.category.toUpperCase().replace(/\s+/g, "")){
        elements.innerHTML = '';
        return el;
    }
   }) 
   if(filteredArray.length <= 0){
    alert("Item not found, try something else!");
   }else{
   showCards(filteredArray);
}
input.value = '';
console.log(filteredArray.length);
}

searchInputBtn.addEventListener("click", filterItemsHandler);
