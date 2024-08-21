const ul = document.querySelector("ul");
const input = document.querySelector("input");
const searchBtn = document.getElementById("input-btn-search");

const renderItems = (renderArray) => {
  renderArray.map((element) => {
    const li = document.createElement("li");
    li.textContent = `${element.name} ${element.surname} -- Indeks: ${element.department}`;
    ul.append(li);
  });
};
renderItems(students);

searchBtn.addEventListener("click", () => {
  const searchValue = input.value.toUpperCase().replace(/\s+/g, "");
  console.log(searchValue);
  const filteredArr = students.filter((el) => {
    if (
      searchValue === el.name.toUpperCase() ||
      searchValue === el.surname.toUpperCase() ||
      searchValue === el.name.toUpperCase() + el.surname.toUpperCase() ||
      searchValue === el.department.toUpperCase()
    ) {
      return el;
    }
  });
  ul.innerHTML = "";
  renderItems(filteredArr);
});
