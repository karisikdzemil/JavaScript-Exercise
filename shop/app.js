const elements = document.getElementById("elements");
const input = document.getElementById("search-input");
const searchInputBtn = document.getElementById("search-input-btn");
const dropDown = document.getElementById("dropDown");
const filerLiDropDown = document.getElementById("header-dropDown-ul").firstElementChild;
// const filerLiDropDown = headerUl.firstElementChild;
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
//   console.log(text.textContent);
  const searchItem = text.textContent.toUpperCase().replace(/\s+/g, "");
//   console.log(searchItem);
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
//   console.log(filteredArray.length);
};

const dropDownHandler = (event) => {
  if (event.target.textContent === "Sve") {
    showCards();
    dropDown.classList.toggle("visible");
  } else {
    filterItemsHandler(event.target);
    // console.log(filerLiDropDown)
    dropDown.classList.toggle("visible");
  }
};

searchInputBtn.addEventListener("click", filterItemsHandler);
dropDown.addEventListener("click", dropDownHandler);
filerLiDropDown.addEventListener("click", () => {dropDown.classList.toggle("visible");});