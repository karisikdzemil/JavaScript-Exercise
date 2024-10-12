const input = document.querySelector("input");
const addButton = document.querySelector("#add-btn");
const ul = document.querySelector("ul");

addButton.addEventListener("click", () => {
  if (input.value === "") {
    alert("You have to enter something!")
  } else {
    const newLi = document.createElement("li");
    const removeButton = document.createElement("button");
    removeButton.className = "li-but";
    removeButton.textContent = "delete";

    newLi.textContent = input.value;
    newLi.appendChild(removeButton);
    ul.appendChild(newLi);
    input.value = "";
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const li = event.target.closest("li");
    li.remove();
  }
});
