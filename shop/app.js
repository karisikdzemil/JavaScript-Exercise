const elements = document.getElementById("elements");
const input = document.getElementById("search-input").value;
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
   
    

}

searchInputBtn.addEventListener("click", filterItemsHandler);