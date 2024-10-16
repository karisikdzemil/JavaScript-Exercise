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
let buyItems = [];
let showCardEl;

function showCards(renderArray = shopItems) {
  elements.innerHTML = "";  // Očisti prethodne elemente
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

const buyModalHandler = () => {
  if (buyItems.length === 0) {
    alert("Your cart is empty, you need to add items.");
    return;
  }

  blackDrop.classList.toggle("visible");
  buyModal.classList.toggle("visible");

  let priceOfEl = 0;
  const ul = document.createElement("ul");
  ul.id = "buy-items";

  buyItems.forEach((el, index) => {
    const item = document.createElement("li");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const but = document.createElement("button");

    but.innerText = "X";
    span1.classList.add("span-class");
    span2.classList.add("span-class");
    but.classList.add("buy-items-li-but");
    item.classList.add("buy-items-li");

    item.append(span1);
    item.append(span2);
    item.append(but);

    span1.innerText = `${el.name}`;
    span2.innerText = `${el.price} RSD`;
    ul.append(item);

    priceOfEl += el.price;

    but.addEventListener("click", () => {
      ul.removeChild(item); 
      buyItems.splice(index, 1);  
    });
  });

  const sum = document.createElement("p");
  sum.innerText = `Suma svih stvari iz korpe je: ${priceOfEl} RSD.`;

  buyModal.prepend(sum);
  buyModal.prepend(ul);
}

const buyHandler = () => {
  blackDrop.classList.toggle("visible");
  buyModal.classList.toggle("visible");

  while (buyModal.firstChild && buyModal.firstChild !== buyBtn) {
    buyModal.removeChild(buyModal.firstChild);
  }
  buyItems = [];
}

const showBuyItemHandler = (event) => {
  if (event.target.tagName.toLowerCase() !== "ul") {
    const listItem = event.target.closest("li");
    const name = listItem.querySelector("h3").textContent;

    showCardEl = shopItems.find(el => el.name === name);

    if (showCardEl) {
      buyItems.push(showCardEl); 
    }
  }
}

elements.addEventListener("click", showBuyItemHandler);
buyLiModal.addEventListener("click", buyModalHandler);
buyBtn.addEventListener("click", buyHandler);
searchInputBtn.addEventListener("click", () => filterItemsHandler());
dropDown.addEventListener("click", dropDownHandler);
filerLiDropDown.addEventListener("click", () => {
  dropDown.classList.toggle("visible");
});
