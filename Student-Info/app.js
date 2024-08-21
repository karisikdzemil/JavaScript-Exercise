const ul = document.querySelector("ul");
const input = document.querySelector("#search-input");
const searchBtn = document.getElementById("input-btn-search");
const addBtn = document.getElementById("input-btn-add");
const h1 = document.getElementById("NameApp");
const blackDrop = document.getElementById("black-drop");
const addStudent = document.getElementById("add-student");
const addStudentBtn = document.getElementById("add-student-btn");
const addStudentModal = document.getElementById("add-student");
const inputs = addStudentModal.querySelectorAll("input");

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
    input.value = '';
  } else {
    alert("Student not found!!");
    input.value = '';
  }
};

const addStudentHandler = () =>{
    console.log(inputs[0].value);
}
console.log(addStudentModal);

searchBtn.addEventListener("click", searchStudentHandler);
addBtn.addEventListener("click", ()=>{
    blackDrop.classList.toggle("visible");
    addStudent.classList.toggle("visible");
})
h1.addEventListener("click", () => {
  renderItems(students);
});
addStudentBtn.addEventListener("click", addStudentHandler);

