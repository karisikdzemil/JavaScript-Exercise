const ul = document.querySelector("ul");
const input = document.querySelector("input");
const searchBtn = document.getElementById("input-btn-search");
const h1 = document.getElementById("NameApp");

const renderItems = (renderArray = students) => {
  ul.innerHTML = "";
  renderArray.map((element) => {
    const li = document.createElement("li");
    li.textContent = `${element.name} ${element.surname} -- Indeks: ${element.department}`;
    ul.append(li);
  });
};
renderItems(students);

const searchStudentHandler = () => {
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
  if (filteredArr.length > 0) {
    ul.innerHTML = "";
    renderItems(filteredArr);
  } else {
    alert("Student not found!!");
  }
};


searchBtn.addEventListener("click", searchStudentHandler);
h1.addEventListener("click", () => {
  renderItems(students);
});
