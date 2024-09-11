const elements = document.getElementById("elements");
const input = document.getElementById("search-input");
const searchInputBtn = document.getElementById("search-input-btn");
const dropDown = document.getElementById("dropDown");
const filerLiDropDown = document.getElementById("header-dropDown-ul").firstElementChild;
const buyLiModal = document.getElementById("header-dropDown-ul").lastElementChild;
const buyBtn = document.getElementById("buy-btn");
const blackDrop = document.querySelector(".blackDrop");
const buyModal = document.getElementById("buy-modal");
showCards();

function showCards(renderArray = shopItems) {
  renderArray.map((el) => {
    const li = document.createElement("li");
    li.className = "card";
    li.innerHTML = `
        <img class="card-img" src="${el.imageUrl}" alt="">
            <h3>${el.name}</h3>
            <p>Cena: ${el.price} RSD</p>`;
    elements.append(li);
  });
}

const filterItemsHandler = (text = input.value) => {
  console.log(text);
const searchItem = text.toUpperCase().replace(/\s+/g, "");
  const filteredArray = shopItems.filter((el) => {
    if (
      searchItem === el.name.toUpperCase().replace(/\s+/g, "") ||
      searchItem === el.category.toUpperCase().replace(/\s+/g, "")
    ) {
      elements.innerHTML = "";
      return el;
    }
  });
  if (filteredArray.length <= 0) {
    alert("Item not found, try something else!");
  } else {
    showCards(filteredArray);
  }
  input.value = "";
};


const dropDownHandler = (event) => {
  if (event.target.textContent === "Sve") {
    showCards();
    dropDown.classList.toggle("visible");
  } else {
    filterItemsHandler(event.target.textContent);
    dropDown.classList.toggle("visible");
  }
};

// const buyModalHandler = () => {
//     blackDrop.classList.toggle("visible");
//     buyModal.classList.toggle("visible");
// }

const buyHandler = () => {
    blackDrop.classList.toggle("visible");
    buyModal.classList.toggle("visible");

    while (buyModal.firstChild != buyBtn) {
        buyModal.removeChild(buyModal.firstChild);
      }
}
const showBuyItemHandler = (event) => {
    if (event.target.tagName.toLowerCase() !== "ul") {
        blackDrop.classList.toggle("visible");
        buyModal.classList.toggle("visible");
      const listItem = event.target.closest("li");
      const name = listItem.children[1];
      console.log(name);
      const showCardEl = shopItems.find( (el) => {
        return el.name === name.textContent;
        })
        const imageOfEl = document.createElement('img');
        const nameOfEl = document.createElement("h3");
        const priceOfEl = document.createElement("p");
        imageOfEl.className = "card-img";
        imageOfEl.src = showCardEl.imageUrl;
        nameOfEl.textContent = showCardEl.name;
        priceOfEl.textContent = `Cena: ${showCardEl.price} RSD`;

        
        buyModal.prepend(priceOfEl);
        buyModal.prepend(nameOfEl);
        buyModal.prepend(imageOfEl);    }
  }
  

elements.addEventListener("click", showBuyItemHandler);
// buyLiModal.addEventListener("click", buyModalHandler);
searchInputBtn.addEventListener("click", () => filterItemsHandler());
dropDown.addEventListener("click", dropDownHandler);
filerLiDropDown.addEventListener("click", () => {dropDown.classList.toggle("visible");});
buyBtn.addEventListener("click", buyHandler);