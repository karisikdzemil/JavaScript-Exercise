const elements = document.getElementById("elements");

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
showCards();